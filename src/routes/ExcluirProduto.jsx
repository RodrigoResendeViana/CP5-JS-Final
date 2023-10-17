import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../routes/Lista';


function ExcluirProduto() {
  /*Hooks- useParams e Navigate */
  const {id} = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);
  /*Hook-useState */
  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });
  /*funções */
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return (
    <section>
      <h1>Excluir Produto</h1>
      <div>
        <p>Nome : {produto.nome}</p>
        <p>Desc : {produto.desc}</p>
        <p>valor : {produto.valor}</p>
      </div>
      <div>
        {/*chamando a função handleExclude dentro do botão*/}
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        {/*chamando o navigate para voltar para a tela produtos */}
        <button onClick={() => navigate('/produtos')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default ExcluirProduto;