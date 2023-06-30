/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from "../config";


function Partida ( ){
  const { gameId }  = useParams();
  const [gameData, setGameData] = useState(null);
  const { token } = useContext(AuthContext);
  const [turn, setTurn] = useState(0);
  const [ board, setBoard] = useState(false);
  // const [ boxes, setBoxes] = useState({});

  const updateTurn = async (currentturn) => {
    console.log(currentturn)
    console.log(turn);
    if(turn!=currentturn){
      setTurn(currentturn);
      axios({
        method: 'get',
        url: `${API_URL}/games/updateboard/${gameId}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        console.log("actualizando tablero");
        console.log("Jugadores:", response.data.players);
        setBoard(response.data.funciona);
      })
      .catch(error => {
        console.error('Error al obtener la actualización del estado del juego:', error);
      });
    }
  }
  const settingboard = async() => {
    axios({
    method: 'get',
    url: `${API_URL}/boxes`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      console.log("seteando board");
      console.log("boxes: ", response.data.boards)
      fetchGameData();
    })
    .catch(error => {
      console.error('Error al obtener la actualización del estado del juego:', error.message);
    })};

  const fetchGameData = async() => {
    axios({
    method: 'get',
    url: `${API_URL}/games/updateturn/${gameId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      console.log("actualizando turno");
      if(response.data.canrolldice){
        setGameData('puedo lanzar dado')
      }
      updateTurn(response.data.currentturn);
    })
    .catch(error => {
      console.error('Error al obtener la actualización del estado del juego:', error.message);
    })};

return (
  <div>
    <h2>Juego ID: {gameId}</h2>
    <button onClick={settingboard}>actualizar</button>
    {gameData}
    <h2>status tablero: {board}</h2>
  </div>
  );
}
export default Partida;