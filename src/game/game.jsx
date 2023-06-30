
import './game.css';
import {useState } from "react";
import Board from './board';
import Logo from '../../public/imgs/logo.png';
import PlayerTable from './playerTable';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from "../config";
/* eslint-disable no-unused-vars */


function Game() {
  const [diceResult, setDiceResult] = useState("");
  const gameId = 9;
  
    const rollDice = async () => {
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceResult(result);
      
      axios.post(`${API_URL}/launch`,{
          gameId: gameId,
          result: result
        }).then((response) => {
        }).catch((error) => {
          console.error('An error occurred while trying to login:', error);
        })
    };
  return (
    <div className="game">
      <div className="logo-game-page">
        <img src={Logo} alt="Logo" />
        </div>
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
