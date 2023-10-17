import {} from 'react';
import styles  from '../Css/Footer.Module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
    
    <footer className={styles.footer}>
      <div>
        <a href="https://www.facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:seu-email@exemplo.com">
          <FaEnvelope size={30} />
        </a>
      </div>
  
        <p>2023 - Todos os direitos reservados</p>
      
      
    </footer>
    
    </>
  )
}

export default Footer
