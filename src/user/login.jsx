/* eslint-disable react/jsx-no-undef */
import { useState, useContext} from 'react';
import NavBar from '../common/navbar';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import './form.css';
import API_URL from "../config";


function Login() {
  const { token, setToken } = useContext(AuthContext);
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  
  //const [loggedIn, setLoggedIn] = useState(false);
  //const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //axios.post(`${import.meta.env.BACKEND_URL}/login`, {
    axios.post(`${API_URL}/login`,{
        mail: mail,
        password: password
      }).then((response) => {
        console.log('Login successful');
        setError(false);
        setMsg("Login exitoso!");
        // Recibimos el token y lo procesamos
        const access_token = response.data.access_token;
        //localStorage.setItem('token', access_token);
        setToken(access_token);
        console.log("Se seteo el token: ", token);
        //setRedirectToHome(true);
        //setLoggedIn(true);
      }).catch((error) => {
        console.error('An error occurred while trying to login:', error);
        setError(true);// aquí puede haber más lógica para tratar los errores
      })
  };
  //{redirectToHome && <Redirect to="/" />}
  return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
        { token=== "null"?(<div className='form-user-sesion'>
            <br></br>
            <h1 className='title-user-form-sesion'>Sign In </h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-labels'>Enter your email:
                        <input type="email" name="email" className='input-user-sesion' value={mail} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <br></br>
                <div>
                <label className='form-labels'> Enter your password:
                    <input type="password" name="password" className='input-user-sesion' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                </div>
                <input type="submit" className='btn-form-user-sesion' value="Enviar"/>
            </form>
        </div>):
        (
          <div className='options-after-login-box center'>
          {msg.length > 0 && 
          <h2>Bienvenido: {msg}</h2>}
          <div className="container-options-btn-after-login">
          <a href="/rooms">Jugar</a>
          <a href='/'>Ir al inicio</a>
          </div>
          </div>
      )}
    </div>
  );
}

export default Login;