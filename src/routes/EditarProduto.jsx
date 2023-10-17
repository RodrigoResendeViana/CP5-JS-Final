/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../routes/Lista';
import { useState } from 'react';

function EditarProduto() {
  //Recuperando o ID do produto selecionado com useParams()
  const { id } = useParams();
  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate();

  /*Filter-para filtrar elementos de um array de dados antes de renderizá-los em uma lista */
  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaProdutos.splice(indice, 1, produto);
    /*chamar a tela produtos */
    navigate('/produtos');
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
            <label htmlFor="idNome">Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
                 /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição do Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={produto.desc}
                 /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idValor">Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              value={produto.valor}
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
export default EditarProduto;