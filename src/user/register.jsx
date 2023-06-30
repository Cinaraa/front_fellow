import { useState } from 'react';
import NavBar from '../common/navbar';
import './form.css';
import axios from 'axios';
import API_URL from "../config";

function Register() {

  const [name, setUsername] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [signup,setSignup] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    //axios.post(`${import.meta.env.BACKEND_URL}/signup`, {
    axios.post(`${API_URL}/signup`,{    
    name: name,
        mail: mail,
        password: password
      }).then((response) => {
        setError(false);
        setMsg(response.username);
        setSignup(true)
      }).catch((error) => {      
      console.error('Ocurrió un error:', error.message);
      setError(true); // aquí puede haber más lógica para tratar los errores
      });
    }
  
  return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        {error && <div className="error">{error.message} Hubo un error con el Registro, por favor trata nuevamente.</div>}
        {signup?(
          <div className='options-after-login-box center'>
          {msg.length > 0 && <div className="successMsg"> {msg} </div>}
          <div className="container-options-btn-after-login">
          <a href='/login'>Iniciar Sesión</a>
          <a href='/'>Ir al inicio</a>
          </div>
          </div>):(<div className='form-user-sesion'>
            <br></br>
            <h1 className='title-user-form-sesion'>Sign Up </h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-labels'>Enter your username:
                        <input type="text" className='input-user-sesion' value={name} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label className='form-labels'>Enter your email:
                        <input type="email" className='input-user-sesion' value={mail} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <br></br>
                <div>
                <label className='form-labels'> Enter your password:
                    <input type="password" className='input-user-sesion' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                </div>
                <input type="submit" value="Enviar" className='btn-form-user-sesion'/>
            </form>
        </div>)}
    </div>
  );
}

export default Register;