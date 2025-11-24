// utils/wordle.ts

const WORD_LENGTH = 5;

export function pickRandomWord(wordList: string[]): string {
  const idx = Math.floor(Math.random() * wordList.length);
  return wordList[idx].toUpperCase();
}

export function validateGuess(guess: string, wordList: string[]): boolean {
  return guess.length === WORD_LENGTH && wordList.includes(guess.toLowerCase());
}

export function getFeedback(
  guess: string,
  solution: string
): Array<'correct' | 'present' | 'absent'> {
  const feedback: Array<'correct' | 'present' | 'absent'> = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === solution[i]) {
      feedback.push('correct');
    } else if (solution.includes(guess[i])) {
      feedback.push('present');
    } else {
      feedback.push('absent');
    }
  }
  return feedback;
}
