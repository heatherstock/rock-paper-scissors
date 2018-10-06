import React from 'react';
import Weapon from './Weapon'

const Weapons = ({ player }) => {
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>Current score - Wins: {player.wins}, Losses: {player.losses}, Draws: {player.draws}</h2>
      <Weapon type='rock' />
      <Weapon type='paper' />
      <Weapon type='scissors' />
    </div>
  )
}

export default Weapons;