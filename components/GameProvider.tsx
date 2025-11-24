import React, { createContext, useContext, useState } from 'react';

interface GameState {
  guesses: string[];
  feedbacks: Array<Array<'correct' | 'present' | 'absent'>>;
  solution: string;
  status: 'playing' | 'won' | 'lost';
  addGuess: (guess: string) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
};

import { pickRandomWord, getFeedback } from '../utils/wordle';
import wordList from '../utils/words';

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [solution, setSolution] = useState(() => pickRandomWord(wordList));
  const [guesses, setGuesses] = useState<string[]>([]);
  const [feedbacks, setFeedbacks] = useState<Array<Array<'correct' | 'present' | 'absent'>>>([]);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const addGuess = (guess: string) => {
    if (status !== 'playing') return;
    const feedback = getFeedback(guess, solution);
    setGuesses((prev) => [...prev, guess]);
    setFeedbacks((prev) => [...prev, feedback]);
    if (guess === solution) setStatus('won');
    else if (guesses.length + 1 >= 6) setStatus('lost');
  };

  const resetGame = () => {
    setSolution(pickRandomWord(wordList));
    setGuesses([]);
    setFeedbacks([]);
    setStatus('playing');
  };

  return (
    <GameContext.Provider value={{ guesses, feedbacks, solution, status, addGuess, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};
