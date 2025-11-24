import React from 'react';

interface BoardProps {
  guesses: string[];
  feedbacks: Array<Array<'correct' | 'present' | 'absent'>>;
  maxRows?: number;
}

const WORD_LENGTH = 5;

export const Board: React.FC<BoardProps> = ({ guesses, feedbacks, maxRows = 6 }) => {
  return (
    <div className="board">
      {Array.from({ length: maxRows }).map((_, rowIdx) => {
        const guess = guesses[rowIdx] || '';
        const feedback = feedbacks[rowIdx] || [];
        return (
          <div className="board-row" key={rowIdx}>
            {Array.from({ length: WORD_LENGTH }).map((_, colIdx) => (
              <span
                className={`tile ${feedback[colIdx] || ''}`}
                key={colIdx}
              >
                {guess[colIdx] || ''}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};
