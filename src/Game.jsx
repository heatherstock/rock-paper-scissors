import React, { Component } from 'react';
import Weapons from './Weapons';
import Score from './Score';
import { logic } from './logic';

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleChoice = this.handleChoice.bind(this);
    this.state = {
      player1: {
        name: 1,
        // wins: 0,
        // losses: 0,
        // draws: 0
      },
      player2: {
        name: 2,
        // wins: 0,
        // losses: 0,
        // draws: 0
      }
    };
  }

  handleChoice(type, player) {
    // console.log('LOGIC: ', logic);
    // console.log('PLAYER ', player, 'CHOSE WEAPON: ', type);

    if (player === 1) {
      // find player 1 type object in logic object, then find player 2 type in that object
    }
    
    
  }

  render() {
    return (
      <div>
        <Weapons player={this.state.player1} click={this.handleChoice} />
        <Weapons player={this.state.player2} click={this.handleChoice} />
        <Score score='winner of last game'/>
      </div>
    )
  }
}

export default Game;