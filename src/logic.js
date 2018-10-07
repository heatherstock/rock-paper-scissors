export const ROCK = 'ROCK';
export const PAPER = 'PAPER';
export const SCISSORS = 'SCISSORS';
export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const DRAW = 'DRAW';

export const logic = {
  ROCK: {
    ROCK: DRAW,
    PAPER: LOSE,
    SCISSORS: WIN
  },
  PAPER: {
    ROCK: WIN,
    PAPER: DRAW,
    SCISSORS: LOSE
  }, 
  SCISSORS: {
    ROCK: LOSE,
    PAPER: WIN,
    SCISSORS: DRAW
  }
}