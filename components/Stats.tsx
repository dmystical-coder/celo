import React from 'react';
import { useStats } from '../utils/stats';

export const Stats: React.FC = () => {
  const { stats } = useStats();
  return (
    <div className="stats">
      <p>Games Played: {stats.gamesPlayed}</p>
      <p>Games Won: {stats.gamesWon}</p>
    </div>
  );
};
