import { useRef } from 'react';
import Pedido from './Pedido.jsx';
import styles from '../Css/Login.module.css'

function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando o senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');

  /*função que verifica se o usuario e senha são validos e grava na sessão */
  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <div>
      <section>
        <h1>Login</h1>
        {/* if ternario*/}
        {getUser && getSenha ? (
          <Pedido/>
        ) : (
          /* chamando a função handleSubmit dentro do form*/
          <form onSubmit={handleSubmit}>
            <p>
              USUÁRIO:
              {/* passando a referencia no usuario */}
              <input type="text" ref={user} />
            </p>
            <br />
            <p>
              SENHA:
              {/* passando a referencia na senha */}
              <input type="password" ref={password} />
            </p>
            <br />
            <button type="submit" value="Login">Entrar</button>
          </form>
        )}
      </section>
      </div>
  );
}

export default Login;