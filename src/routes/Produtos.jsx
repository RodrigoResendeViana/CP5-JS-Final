import {} from 'react'; 
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../routes/Lista';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import styles from '../Css/Produtos.module.css'
import '../Css/Produtos.module.css'; 

function Produtos() {
  return (
    <section>
      
      <h1>LISTA DE PRODUTOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/Produtos/EditarProduto/${item.id}`}>
                    <Editar className={styles.icones} />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/Produtos/ExcluirProduto/${item.id}`}>
                    <Excluir className={styles.icones}/>
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/Produtos/InserirProduto'> 
          <button className={styles.InserirP}>Inserir novo produto</button>
        </Link>
      </div>
    </section>
  );
}

export default Produtos;
