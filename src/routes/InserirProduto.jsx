
import { useState } from 'react';
import { ListaProdutos } from '../routes/Lista';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';
import '../Css/InserirProduto.module.css'


function InserirProduto() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  /*Hooks - useState */
  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de produtos */
    ListaProdutos.push(produto);
    navigate('/Produtos');
  };

  const handleChange = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    //Destructuring
    const { name, value } = e.target;
    //Através da função set do useState, vamos adicionar o valor(value), na propriedade name que é a mesma que foi declarada no useState produto.
    //Utilize o SPREAD, para tornar a função mais simples!!
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section>
      <h1>Cadastro de Produtos</h1>
      {/*chando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO</legend>
          <p>
            <label htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={produto.nome}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              
              value={produto.desc}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              
              value={produto.valor}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <button type="submit">
              CADASTRAR
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
export default InserirProduto;