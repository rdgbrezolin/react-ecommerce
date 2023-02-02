import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  emptyCart: (products: Product[]) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('wemovies_cart')
    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });
  function updateLocalStorage(newCart: Product[]) {
    localStorage.setItem('wemovies_cart', JSON.stringify(newCart));
  }

  async function getProductStock(productId: number) {
    const stockResponse = await api.get<Stock>(`/stock/${productId}`)
    const { amount: stock } = stockResponse.data;
    return stock || 0;
  }

  const addProduct = async (productId: number) => {
    try {
      const stock = await getProductStock(productId);
      const newCart = [...cart];
      const alreadyExists = newCart.find(product => product.id === productId);
      const amount = (alreadyExists ? alreadyExists.amount : 0) + 1;

      if (amount > stock) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (alreadyExists) {
        alreadyExists.amount = amount;
      } else {
        const product = await api.get<Product>(`/products/${productId}`)
        const newProduct = {
          ...product.data,
          amount
        }
        newCart.push(newProduct)
      }
      setCart(newCart)
      updateLocalStorage(newCart)
    } catch (error) {
      toast.error("Erro na adição do produto")
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const remainingProduct = cart.filter(product => product.id !== productId)
      if (remainingProduct.length === cart.length) {
        throw new Error('Erro na remoção do produto')
      }
      setCart(remainingProduct)
      updateLocalStorage(remainingProduct)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("Erro na adição do produto")
      }
    }
  };

  const emptyCart = (cart: Product[]) => {
    setCart([])
    updateLocalStorage([])
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        toast.error('Quantidade é inválida');
        return;
      }
      const productInCart = cart.filter(product => product.id === productId);
      if (!productInCart) {
        toast.error('O produto informado não está no carrinho');
        return;
      }

      const stock = await getProductStock(productId);
      if (amount > stock) {
        toast.error('Quantidade fora de estoque');
        return;
      } else {
        const newCart = cart.map(product => {
          if (product.id === productId) {
            product.amount = amount;
          }
          return product;
        })
        setCart(newCart)
        updateLocalStorage(newCart)
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto")
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
