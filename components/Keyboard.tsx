import React from 'react';

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
];

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  keyFeedback?: Record<string, 'correct' | 'present' | 'absent'>;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  onKeyPress,
  keyFeedback = {},
}) => {
  return (
    <div className="keyboard">
      {KEYS.map((row, rowIdx) => (
        <div className="keyboard-row" key={rowIdx}>
          {row.map((key) => (
            <button
              key={key}
              className={`key ${keyFeedback[key] || ''}`}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
