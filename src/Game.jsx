import React, { Component } from 'react';
import Weapons from './Weapons';
import Score from './Score';
import logic from './logic';

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleChoice = this.handleChoice.bind(this);
    this.state = {
      player1: {
        name: 'Player 1',
        wins: 'x',
        losses: 'y',
        draws: 'z'
      },
      player2: {
        name: 'Player 2',
        wins: 'a',
        losses: 'b',
        draws: 'c'
      }
    };
  }

  handleChoice(player, type) {
    
  }

  render() {
    return (
      <div>
        <Weapons player={this.state.player1}/>
        <Weapons player={this.state.player2} />
        <Score score='winner of last game'/>
      </div>
    )
  }
}

export default Game;