import { validateGuess } from './wordle';
import wordList from './words';

describe('validateGuess', () => {
  it('validates correct guess', () => {
    expect(validateGuess('apple', wordList)).toBe(true);
  });
  it('invalidates wrong length', () => {
    expect(validateGuess('appl', wordList)).toBe(false);
  });
  it('invalidates word not in list', () => {
    expect(validateGuess('zzzzz', wordList)).toBe(false);
  });
});
