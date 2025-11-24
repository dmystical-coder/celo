import React, { useEffect, useState } from 'react';

const STATS_KEY = 'wordle_stats';

export interface Stats {
  gamesPlayed: number;
  gamesWon: number;
}

export function useStats() {
  const [stats, setStats] = useState<Stats>({ gamesPlayed: 0, gamesWon: 0 });

  useEffect(() => {
    const stored = localStorage.getItem(STATS_KEY);
    if (stored) setStats(JSON.parse(stored));
  }, []);

  const updateStats = (won: boolean) => {
    setStats((prev) => {
      const updated = {
        gamesPlayed: prev.gamesPlayed + 1,
        gamesWon: won ? prev.gamesWon + 1 : prev.gamesWon,
      };
      localStorage.setItem(STATS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return { stats, updateStats };
}
