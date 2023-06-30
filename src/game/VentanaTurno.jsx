/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext , useState} from "react";
import { OwnersContext } from "./global/OwnersContext";

function VentanaTurno( { buy, endTurn, cerrarVentana , action, }){

    return (
        <>
            {action==="Comprar" &&
                <div className='contenedor-ventana-turno'>
                    <div className='ventana-turno comprar'>
                    <div>
                        <h4>Felicidades puedes comprar</h4>
                        <h4>¿Qué deseas hacer?</h4>
                        <button onClick={buy}>Comprar</button>
                        <button onClick={endTurn}>Terminar Turno</button>
                    </div>
                    </div>
                    <button className="btn-cerrar" onClick={cerrarVentana}>
                    <span className="icono-cerrar">&#x2716;</span>
                    </button>
                </div>
            }
            {action==="Pagar"&&
                <div className='contenedor-ventana-turno'>
                    <div className='ventana-turno pagar'>
                        <div>
                            <h4> Debes pagar al propietario</h4>
                            <h4>¿Qué deseas hacer?</h4>
                            <button onClick={buy}>Comprar</button>
                        </div>
                    </div>
                    <button className="btn-cerrar" onClick={cerrarVentana}>
                    <span className="icono-cerrar">&#x2716;</span>
                    </button>
                </div>
            } 
        </>
    )
}

export default VentanaTurno;