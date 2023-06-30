/* eslint-disable react/prop-types */
import './playerTable.css';
import PlayerRed from '../../public/imgs/rojo.png'
import PlayerGreen from '../../public/imgs/Verde.png'
import PlayerBlue from '../../public/imgs/Azul.png'
import PlayerYellow from '../../public/imgs/Amarillo.png'
import { useState } from 'react';

function Player ({ playerData }){
    const player = playerData;
    const [color,setColor] = useState(null);
    if(color===null){
        switch (player.color) {
            case "Red":
              setColor(PlayerRed);
              break;
            case "Blue":
              setColor(PlayerBlue);
              break;
            case "Green":
              setColor(PlayerGreen);
              break;
            case "Yellow":
                setColor(PlayerYellow);
                break;
        }
    }
    return (
        <>
        <div className='player-data '>
          <img src={color} className="character" alt="Player Red" />
          <h2 className="player-name">{player.User.name}</h2>
          <h3 className="player-money">${player.money }</h3>
        </div>
        </>
    )
}
export default Player;