import './game.css';
import {useState } from "react";
import Board from './board';
// import Logo from '../../public/assets/imgs/logo.png';
import PlayerTable from './playerTable';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from "../config";


function Game() {
  const [diceResult, setDiceResult] = useState("");

  
    const rollDice = async () => {
      // Lógica para generar un número aleatorio entre 1 y 6 (resultado del dado)
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceResult(result);
      
      axios.post(`${API_URL}/launch`,{
          gameId: gameId,
          result: result
        }).then((response) => {
          const game = response.data.game;
          const players = response.data.players;
          const properties = response.data.playerProperties;
          const currentbox = response.data.currentBox; 
          const box = response.data.box;
        }).catch((error) => {
          console.error('An error occurred while trying to login:', error);
          setError(true);// aquí puede haber más lógica para tratar los errores
        })
    };
  return (
    <div className="game">
      <div className="logo-game-page">
        {/* <img src={Logo} alt="Logo" /> */}
        </div>
      <div className='space'></div>
      <div className="Board">
        <Board />
        </div>
      <div className="table">
        <PlayerTable />
        </div>
      <div className='dice'>
        <button onClick={rollDice}>Dice!</button>
        {diceResult && <p>Resultado: {diceResult}</p>}
      </div>
      
      <div>
    </div>
      

      </div>
  );
}

export default Game;
