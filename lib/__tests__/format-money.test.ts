import formatMoney from '../format-money';

describe('format money', () => {
  it('should return a commpa separated number', () => {
    const expected = formatMoney(12345678.78);
    const actual = '12,345,678.78';

    expect(expected).toEqual(actual);
  });

  it('should prefix the number when prefix option is provided', () => {
    const expected = formatMoney(323.32, { prefix: '+' });
    const actual = '+323.32';

    expect(expected).toEqual(actual);
  });

  it('should not prefix the number when number is negative', () => {
    const expected = formatMoney(-323.32, { prefix: '+' });
    const actual = '-323.32';

    expect(expected).toEqual(actual);
  });

  it('should suffix the number when suffix option is provided', () => {
    const expected = formatMoney(323.32, { suffix: '%' });
    const actual = '323.32%';

    expect(expected).toEqual(actual);
  });

  it('should return a number rounded to 2 decimal places', () => {
    const expected = formatMoney(323.3);
    const actual = '323.30';

    expect(expected).toEqual(actual);
  });

  it('should return a number rounded to 1 decimal places', () => {
    const expected = formatMoney(323.323, { decimalAmount: 1 });
    const actual = '323.3';

    expect(expected).toEqual(actual);
  });

  it('should return a number without decimal', () => {
    const expected = formatMoney(323.323, { decimalAmount: 0 });
    const actual = '323';

    expect(expected).toEqual(actual);
  });
});
