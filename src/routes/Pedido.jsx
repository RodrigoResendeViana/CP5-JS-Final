import { } from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../routes/ListaPedidos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import styles from '../Css/Pedido.module.css'

function Pedido() {
  return (
    <section>
      <h1>LISTA DE PEDIDOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>PEDIDOS</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.pedido}</td>

                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/Pedido/EditarPedido/${item.id}`}>
                    <Editar className={styles.icones}/>
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/Pedido/ExcluirPedido/${item.id}`}>
                    <Excluir className={styles.icones}/>
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>

              </tr>
            ))}



          </tbody>

       



        </table>
      </div>
      <Link to='/Pedido/InserirPedido'>
        <button className={styles.InserirP}>Inserir Pedido</button>
      </Link>
    </section>
  );
}
export default Pedido;