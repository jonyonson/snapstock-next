import formatMoney from '../format-money';

describe('format money', () => {
  it('should return a commpa separated number', () => {
    const expected = formatMoney(12345678.78);
    const actual = '12,345,678.78';

    expect(expected).toEqual(actual);
  });
});
