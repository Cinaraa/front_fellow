/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './game.css';
import PlayerTable from './playerTable';
import Logo from '../../public/imgs/logo.png';
import Board from './board';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from "../config";
import { PlayersContext } from './global/PlayersContext';
import { OwnersContext } from './global/OwnersContext';
import API_URL from "../config";



function Partida ( ){
  const { gameId }  = useParams(); //id del juego
  const [canRollDice, setCanRollDice] = useState(null); // puede lanzar el dado
  const { token } = useContext(AuthContext); // token del usuario
  const {players,setPlayers} = useContext(PlayersContext);
  const { setOwners } = useContext(OwnersContext);
  const [turn, setTurn] = useState(0); // turno actual
  const [ventanaTurno, setVentanaTurno] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(null);
  const [ launchdice, setLaunchDice ] = useState(false);

  const [diceResult, setDiceResult] = useState(""); 
  const [ boxesData, setBoxes] = useState(null);


  if(boxesData===null){
    settingboard();
  }

  useEffect(() => {
    if (players !== null) {
      players?.forEach(player => {
        if (player.turn === turn) {
          setPlayerTurn(player);
        }
      });
    }
  }, [players, turn]);

  const endTurn = async () => {
    axios({ method: 'post',
           url: `${API_URL}/turn/endturn`,
           headers: {
            'Authorization': `Bearer ${token}`
           },
           data: { gameId: gameId, players: players}
          }).then((response) => {
              setLaunchDice(false)
              setPlayers(response.data.players)
              setOwners(response.data.owners)
              setTurn(response.data.currentturn)
              console.log(response.data)
          }).catch((error) => {
            console.error('Error al terminar el turno:', error.message);
          })
    };

  const buy = async () => {
    axios({ method: 'post',
           url: `${API_URL}/buy`,
           headers: {
            'Authorization': `Bearer ${token}`
           },
           data: { gameId: gameId, numberBox: playerTurn.actual_position, turn: playerTurn.turn }
          }).then((response) => {
              if (response.data.bought){ 
                setPlayers(response.data.players)
                setOwners(response.data.owners)
              } else {
                console.log("No tienes dinero suficiente")
              }
              console.log(response.data)
          }).catch((error) => {
            console.error('An error occurred while trying to login:', error.message);
          })
    };

  const rollDice = async () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
    setLaunchDice(true)
    axios({ method: 'post',
           url: `${API_URL}/launch`,
           headers: {
            'Authorization': `Bearer ${token}`
           },
           data: { gameId: gameId, result: result}
          }).then((response) => {
              setPlayers(response.data.players)
              setOwners(response.data.owners)
              console.log(playerTurn.turn)
              if (!response.data.currentbox.hasOwner &&response.data.currentbox.type ==="Propriedad"){
                setVentanaTurno(true);
              }
              console.log(response.data)
          }).catch((error) => {
            console.error('An error occurred while trying to login:', error.message);
          })
    };

  const updateboard = async (currentturn) => {
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
        setPlayers(response.data.players);
        setOwners(response.data.owners)
      })
      .catch(error => {
        console.error('Error al obtener la actualización del estado del juego:', error);
      });
    }
  }

  async function settingboard() {
    axios({
    method: 'get',
    url: `${API_URL}/boxes`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      console.log("seteando board");
      console.log("boxes: ", response.data.boardsDictionary)
      setBoxes(response.data.boardsDictionary)
      updateturn();
    })
    .catch(error => {
      console.error('Error al obtener la actualización del estado del juego:', error.message);
    })}

  const updateturn = async() => {
    axios({
    method: 'get',
    url: `${API_URL}/games/updateturn/${gameId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      console.log("actualizando turno");
        setCanRollDice(response.data.canrolldice);
        updateboard(response.data.currentturn);
    })
    .catch(error => {
      console.error('Error al obtener la actualización del estado del juego:', error.message);
    })};
  
    const cerrarVentana = async()=>{
      setVentanaTurno(false)
    }

    const AddOrDecrease = async (box) => {
        if (canRollDice){
          axios({ method: 'post',
               url: `${API_URL}/turn/endturn`,
               headers: {
                'Authorization': `Bearer ${token}`
               },
               data: { gameId: gameId, box, action: 'add', players: players}
              }).then((response) => {
                  setLaunchDice(false)
                  setPlayers(response.data.players)
                  setOwners(response.data.owners)
                  setTurn(response.data.currentturn)
                  console.log(response.data)
              }).catch((error) => {
                console.error('Error al terminar el turno:', error.message);
              })
        }
    }

return (
    <div className="game">
      {playerTurn != null&&
        <div className='turn-block'>
          <h2>Turno de: {playerTurn.User.name}</h2>
        </div>}
      {boxesData !== null &&
        <div className="board">
            <div className="logo-board-game">
            {canRollDice&&
            <>
              <img src={Logo} alt="Logo" />
                <button onClick={rollDice}>Lanzar Dado!</button>
                {diceResult && <p>{diceResult}</p>}
                </>
                }
            </div>
            {players !== null &&
            <Board boxesData={boxesData} addhouse={AddOrDecrease}/>}
            <div className='dice'>
            </div>
            { ventanaTurno && launchdice && 
            <div className='contenedor-ventana-turno'>
                <div className='ventana-turno'>
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
            </div>}
        </div>}
        {players !== null &&
          <div className='table'>
          <PlayerTable />
        </div>
        }
      </div>
  );
}

export default Partida;