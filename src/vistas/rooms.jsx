/* eslint-disable react/prop-types */
import { useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import './rooms.css'
import API_URL from "../config";

function DataCard({ game }) {
    const { token } = useContext(AuthContext);
    const [currentGame,setCurrentGame] = useState(game);
    const [canStart,setCanStart] = useState(game.number_of_players>2)
    const [checked, setChecked] = useState(false);
    const [error,setError] = useState("");

    const handleCheckboxChange = async (event) => {
      const { checked } = event.target;
      setChecked(checked);
      axios({ method: 'post',
           url: `${API_URL}/waitingroom/startgame`,
           headers: {
            'Authorization': `Bearer ${token}`
           },
           data: { gameId: currentGame.id, start: checked}
          }).then((response) => {
            if (!response.data.startTheGame){
              console.log('esperando demas jugadores')
            } else {
              const URL = `/game/${currentGame.id}`;
              window.location.href = URL;
            }
          }).catch((error) => {
            console.error('An error occurred while trying to login:', error.message);
          })
      };

    const handleEnterGame = async () => {
        axios({ method: 'post',
           url: `${API_URL}/waitingroom/playerjoined`,
           headers: {
            'Authorization': `Bearer ${token}`
           },
           data: { gameId: game.id}
          }).then((response) => {
            console.log(response.data.game)
            setCurrentGame(response.data.game)
            setCanStart(response.data.start)
            setError(response.data.error)
          }).catch((error) => {
            console.error('An error occurred while trying to login:', error);
          })
      };

    return (
        <div className="data-card">
        <h2>{currentGame.status}</h2>
        <p>{currentGame.number_of_players}</p>
        <p>{currentGame.id}</p>
        <button className="enter-game-button" onClick={handleEnterGame}>
        Ingresar al juego</button>
        {canStart&&<label><input type="checkbox"checked={checked} onChange={handleCheckboxChange}/> Listo para jugar </label>}
        {error.length>0&&<h2>{error}</h2>}
      </div>
    );
  }

function Rooms() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
        axios.get( `${API_URL}/games`,{
        }).then((response) => {
        console.log('games recieved');
        setGames(response.data)
      }).catch((error) => {
        console.error('An error occurred while trying to show Games:', error.message);
      })
  },[]);

    return (
      <div>
        <h1>Lista de objetos</h1>
        {games.map(game => (
          <DataCard key={game.id} game={game} />
        ))}
      </div>
    );
  }

export default Rooms;
