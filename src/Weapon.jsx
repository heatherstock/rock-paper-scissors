import React from 'react';

const Weapon = ({ type, player, click }) => {
  return (
    <button onClick={() => click(type, player)}>{type}</button>
  )
}

export default Weapon;