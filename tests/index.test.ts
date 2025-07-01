import { merge } from '../src/index';

describe('merge', () => {
  it('merges three arrays correctly', () => {
    const c1 = [1, 4, 7];
    const c2 = [6, 3, 2]; 
    const c3 = [5, 8, 10];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10]);
  });

  it('handles empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [4, 5])).toEqual([4, 5]);
  });

  it('handles arrays with duplicates', () => {
    const c1 = [1, 2, 2];
    const c2 = [3, 2, 1];
    const c3 = [2, 3];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 2, 2, 2, 3, 3]);
  });
});