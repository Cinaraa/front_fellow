/* eslint-disable no-unused-vars */
import './navbar.css'
import React, {useContext} from 'react';
import { AuthContext } from '../auth/AuthContext';

export default function NavBar(){
  const {logout,token} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }
    return (
       <div className="navbar">
            <a href='/' className="desaparece">Inicio</a>
            <a href="/about">Quienes Somos</a>
            <a href="/instructions">Instrucciones</a>
            {token==="null"?(  
                <>
                <a href="/login">Iniciar Sesión</a>
                <a href="/register">Registarse</a>
                </>
            ):(
                <a href='/' onClick={handleLogout}> Cerrar Sesión</a>
            )}
        </div>
    )
}