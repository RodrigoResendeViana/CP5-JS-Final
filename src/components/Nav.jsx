import {} from "react";
import { Link } from "react-router-dom";
import styles from "../Css/Nav.Module.css";

function Nav() {

  const handleLogout = async()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    window.location.href = '/';
  }

  return (
    <>
      <nav>
          <ul>
            <li className={styles.links}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.links}>
              <Link to="/Sobre">Sobre</Link>
            </li>
            <li className={styles.links}>
              <Link to="/Produtos">Produtos</Link>
            </li>  
            <li className={styles.links}>
              <Link to="/Login">Login</Link>
            </li>
            <li className={styles.logout}>
              <button onClick={handleLogout}>Logout</button>
            </li>
            
          </ul>
      </nav>
    </>
  )
}

export default Nav;