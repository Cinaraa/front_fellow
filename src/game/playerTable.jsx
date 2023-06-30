
/* eslint-disable react/prop-types */
//import { useState } from 'react';
import Player from './player';
import { useContext } from 'react';
import { PlayersContext } from './global/PlayersContext';
function PlayerTable(){
  const {players} = useContext(PlayersContext);
  return (
    <>
    <div className='players-table'>
    {players?.map(player => (
        <Player key={player.color} playerData={player} />
      ))}
  </div>
    </>

  );
}

export default PlayerTable;
