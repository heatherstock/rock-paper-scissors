import React from 'react';
import Weapon from './Weapon';
import { ROCK, PAPER, SCISSORS } from './logic';


const Weapons = ({ player, click }) => {
  return (
    <div>
      <h1>Player {player.name}</h1>
      {/* <h2>Current score - Wins: {player.wins}, Losses: {player.losses}, Draws: {player.draws}</h2> */}
      <Weapon type={ROCK} click={click} player={player.name} />
      <Weapon type={PAPER} click={click} player={player.name} />
      <Weapon type={SCISSORS} click={click} player={player.name} />
    </div>
  )
}

export default Weapons;