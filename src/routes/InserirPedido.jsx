import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../routes/ListaPedidos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';
import '../Css/InserirPedido.module.css'


function InserirPedido() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

  /*Hooks - useState */
  const [produto, setProduto] = useState({
    id: novoId,
    pedido: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de produtos */
    ListaPedidos.push(produto);
    navigate('/Pedido');
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
      <h1>Cadastro de Pedidos</h1>
      {/*chando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PEDIDO</legend>
          <p>
            <label htmlFor="idPedido"> Insira o pedido:</label>
            <input
              type="text"
              name="pedido"
              id="idPedido"
           
              value={produto.pedido}
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
export default InserirPedido;