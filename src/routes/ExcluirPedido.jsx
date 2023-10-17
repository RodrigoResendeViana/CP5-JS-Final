import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../routes/ListaPedidos';


function ExcluirPedido() {
  /*Hooks- useParams e Navigate */
  const {id} = useParams();
  const navigate = useNavigate();

  const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);
  /*Hook-useState */
  const [pedido] = useState({
    id: recPedidoListaById[0].id,
    pedido: recPedidoListaById[0].pedido,

  });
  /*funções */
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1);
    navigate('/Pedido');
  };

  return (
    <section>
      <h1>Excluir Pedido</h1>
      <div>
        <p>Pedido : {pedido.pedido}</p>

      </div>
      <div>
        {/*chamando a função handleExclude dentro do botão*/}
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        {/*chamando o navigate para voltar para a tela produtos */}
        <button onClick={() => navigate('/Pedido')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default ExcluirPedido;