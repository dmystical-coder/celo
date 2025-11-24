import { getFeedback } from './wordle';

describe('getFeedback', () => {
  it('returns correct feedback for exact match', () => {
    expect(getFeedback('APPLE', 'APPLE')).toEqual([
      'correct',
      'correct',
      'correct',
      'correct',
      'correct',
    ]);
  });

  it('returns present and absent feedback', () => {
    expect(getFeedback('APPLY', 'APPLE')).toEqual([
      'correct',
      'correct',
      'correct',
      'correct',
      'absent',
    ]);
    expect(getFeedback('LEMON', 'APPLE')).toEqual([
      'present',
      'absent',
      'absent',
      'present',
      'absent',
    ]);
  });
});
