import { EmptyCart } from '../../pages/Cart/styles';
import { useNavigate } from 'react-router-dom';

const Success = (): JSX.Element => {

  const navigate = useNavigate();

  return (
    <EmptyCart>
      <p>Compra realizada com sucesso!</p>
      <img src="../src/assets/images/success.svg" alt="Carrinho vazio" />
      <button onClick={() => { navigate("../"); }}>
        VOLTAR
      </button>
    </EmptyCart>
  );
};

export default Success;
