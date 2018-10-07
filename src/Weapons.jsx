import React from 'react';
import Weapon from './Weapon'

const Weapons = ({ player, click }) => {
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>Current score - Wins: {player.wins}, Losses: {player.losses}, Draws: {player.draws}</h2>
      <Weapon type='rock' click={click} player={player.name} />
      <Weapon type='paper' click={click} player={player.name} />
      <Weapon type='scissors' click={click} player={player.name} />
    </div>
  )
}

export default Weapons;