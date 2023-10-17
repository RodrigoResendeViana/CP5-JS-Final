/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../routes/ListaPedidos';
import { useState } from 'react';

function EditarPedido() {
  //Recuperando o ID do produto selecionado com useParams()
  const { id } = useParams();
  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate();

  /*Filter-para filtrar elementos de um array de dados antes de renderizá-los em uma lista */
  const recProdutoListaById = ListaPedidos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    pedido: recProdutoListaById[0].pedido,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaPedidos.splice(indice, 1, produto);
    /*chamar a tela produtos */
    navigate('/Pedido');
  };

  const handleChange = (event) => {
    /*desestruturando */
    const { name, value } = event.target;
    /*pegando o useState e fazendo um spred no produto pegando o name e value do input */
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section >
      <h1 >EDITAR PRODUTOS</h1>
      {/*chamando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO SELECIONADO</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={produto.id}
               /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idPedido">Nome do Produto:</label>
            <input
              type="text"
              name="pedido"
              id="idPedido"
              value={produto.pedido}
                 /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="subtmit" >EDITAR</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default EditarPedido;