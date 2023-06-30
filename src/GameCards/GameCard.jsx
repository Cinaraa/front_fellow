// import React from 'react';
// import { AuthContext } from '../auth/AuthContext';
// import axios from 'axios';
// import { useState, useContext} from 'react';
// import './GameCard.css'; // Archivo CSS para estilos del componente

// function GameCard { async (event,{ gameId, numPlayers, status }) => {
//   const { token } = useContext(AuthContext);
//   const handleEnterGame = () => {
//     axios.post("http://localhost:3000/playerjoined",{
//       gameId: gameId,
//       userId: token
//     }).then((response) => {
//       console.log(`Ingresando al juego ${gameId}`);
//         setError(false);
//         setMsg("ingreso exitoso!");

//         const access_token = response.data.access_token;
//         gameId, players, start: false, error:
//         //localStorage.setItem('token', access_token);
//         setToken(access_token);
//         console.log("Se seteo el token: ", token);
//         //setRedirectToHome(true);
//         //setLoggedIn(true);
//       }).catch((error) => {
//         console.error('An error occurred while trying to login:', error);
//         setError(true);// aquí puede haber más lógica para tratar los errores
//       })
//   };

//     console.log(`Ingresando al juego ${gameId}`);
//   }};



  
//   return (
//     <div className="game-card">
//       <div className="game-info">
//         <div className="game-id">ID del juego: {gameId}</div>
//         <div className="player-count">Jugadores: {numPlayers}</div>
//         <div className="game-status">Estado: {status}</div>
//       </div>
//       <button className="enter-game-button" onClick={handleEnterGame}>
//         Ingresar al juego
//       </button>
//     </div>
//   );
// };

// export default GameCard;