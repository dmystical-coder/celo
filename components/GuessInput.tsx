import React, { useState } from 'react';
import { useGame } from './GameProvider';

export const GuessInput: React.FC = () => {
  const [guess, setGuess] = useState('');
  const { addGuess, status } = useGame();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.length === 5) {
      addGuess(guess.toUpperCase());
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input">
      <input
        type="text"
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={status !== 'playing'}
        pattern="[A-Z]{5}"
        title="Enter a 5-letter word"
        aria-label="Guess input"
        autoFocus
      />
      <button type="submit" disabled={status !== 'playing' || guess.length !== 5}>
        Guess
      </button>
    </form>
  );
};
