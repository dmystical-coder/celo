import React from 'react';
import { Board } from '../components/Board';
import { Keyboard } from '../components/Keyboard';
import { GuessInput } from '../components/GuessInput';
import { useGame } from '../components/GameProvider';

export const Game: React.FC = () => {
  const { guesses, feedbacks, status, resetGame, solution } = useGame();

  return (
    <div className="game">
      <Board guesses={guesses} feedbacks={feedbacks} />
      <GuessInput />
      <Keyboard onKeyPress={() => {}} />
      <div className="game-status">
        {status === 'won' && (
          <p>Congratulations! You guessed the word: {solution}</p>
        )}
        {status === 'lost' && <p>Game Over! The word was: {solution}</p>}
        {(status === 'won' || status === 'lost') && (
          <button onClick={resetGame}>Restart</button>
        )}
      </div>
    </div>
  );
};
