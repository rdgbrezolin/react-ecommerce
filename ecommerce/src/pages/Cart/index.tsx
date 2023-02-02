import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { useNavigate } from 'react-router-dom';

import { Container, ProductTable, Total, EmptyCart } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface CartFormatted extends Product {
  priceFormatted: string;
  totalFormatted: string;
}

const Cart = (): JSX.Element => {
  const navigate = useNavigate();
  const { cart, removeProduct, updateProductAmount, emptyCart } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    totalFormatted: formatPrice(product.price * product.amount),
  } as CartFormatted));

  const total = formatPrice(cart.reduce((sumTotal, product) => {
    return sumTotal += product.price * product.amount
  }, 0))

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  function handleFinalizedBuy(products: Product[]) {
    emptyCart(products);

    navigate("/success")
  }

  return (
    cart.length ? (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map(product => (
              <tr data-testid="product" key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      disabled={product.amount <= 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.totalFormatted}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button 
            type="button"
            data-testid="finish-cart-button"
            onClick={() => handleFinalizedBuy(cartFormatted)}
          >
            Finalizar pedido
          </button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    ) : (
      <EmptyCart>
        <p>Parece que não há nada por aqui :(</p>
        <img src="../src/assets/images/Group.svg" alt="Carrinho vazio" />
        <hr />
        <button onClick={() => { navigate("../"); }}>
          VOLTAR
        </button>
      </EmptyCart>
    )
  );
};

export default Cart;
