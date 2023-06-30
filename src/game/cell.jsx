/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import casa from '../../public/imgs/casa.png'
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import PlayerRed from '../../public/imgs/rojo.png'
import PlayerGreen from '../../public/imgs/verde.png'
import PlayerBlue from '../../public/imgs/azul.png'
import PlayerYellow from '../../public/imgs/amarillo.png'
import { PlayersContext } from './global/PlayersContext';
import { OwnersContext } from './global/OwnersContext';

import './cell.css';

function getImageSource(color) {
  switch (color) {
    case 'Red':
      return PlayerRed;
    case 'Green':
      return PlayerGreen;
    case 'Blue':
      return PlayerBlue;
    case 'Yellow':
      return PlayerYellow;
    default:
      return ''; // Fuente de imagen por defecto si el color no coincide
  }
}

function Houses({houses}) {
  if (houses===0){
    return null; 
  } else { 
  
  return ( 
      <div>
       {Array.from({ length: houses }, (_, index) => (
        <img
          key={index}
          src={casa}
        />
      ))}
      </div>
    )}
}

function Fichas( { fichas }){
  if (fichas.length===0){
    return null;
  } else { 
  return (
    <div>
      {fichas.map((color, index) => (
        <img
          key={index}
          src={getImageSource(color)}
          alt={color}
        />
      ))}
  </div>
    )}
}
const Cell = ({ boxe , addhouse}) => {
  const [box] = useState(boxe);
  const [houses, setHouses] = useState(null);
  const [fondo, setFondo] = useState("Default");
  const [fichas, setFichas] = useState(null);
  const {players} = useContext(PlayersContext);
  const {owners} = useContext(OwnersContext);

  const handleClick = () => {
    addhouse(boxe);
  };
  
  useEffect(() => {
    let fichas = [];
    players?.forEach(player => {
      if(player.actual_position === box.number){
        fichas.push(player.color);
      }
    setFichas(fichas)
    });
    }, [players]);

   useEffect(()=>{
    owners?.forEach(property =>{
      if(property.Box.number===box.number) {
        setFondo(property.Player.color);
        setHouses(property.number_of_houses);
      }
      console.log("actualizando propeidades")
    });
   },[box.number, owners]);

    return (
      <>
        {box.type === 'Propriedad' ? (
          <>
            {houses !== null ? (
              <>
                {fichas !== null ? (
                  <div className={`cell cell-property-h-n ${fondo}`} onClick={handleClick}>
                    <h5>{box.name}</h5>
                    <p>${box.price}</p>
                    <Houses houses={houses} />
                    <Fichas fichas={fichas} />
                  </div>
                ) : (
                  <div className={`cell cell-property-h-0 ${fondo}`}>
                    <h5>{box.name}</h5>
                    <p>${box.price}</p>
                    <Houses houses={houses} />
                  </div>
                )}
              </>
            ) : (
              <>
                {fichas !== null ? (
                  <div className={`cell cell-property-h-0 ${fondo}`}>
                    <h5>{box.name}</h5>
                    <p>${box.price}</p>
                    <Fichas fichas={fichas} />
                  </div>
                ) : (
                  <div className={`cell cell-property-0-0 ${fondo}`}>
                    <h5>{box.name}</h5>
                    <p>${box.price}</p>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {fichas === null ? (
              <div className="cell cell-action">
                <h5>{box.name}</h5>
              </div>
            ) : (
              <div className="cell cell-action-n">
                <h5>{box.name}</h5>
                <div>
                  <Fichas fichas={fichas} />
                </div>
              </div>
            )}
          </>
        )}
      </>
    );
}

export default Cell;