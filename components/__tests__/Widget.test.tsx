import React from 'react';
import { render, screen } from '@testing-library/react';
import Widget from '../Widget';

const data = {
  averageVolume: 383536557,
  change: 321.8297656249997,
  dayRange: {
    highEnd: 31139.35,
    lowEnd: 30487.79,
  },
  open: 30737.77,
  percentChange: 1.0457360486108551,
  previousClose: 30775.43,
  price: 31097.259765625,
  volume: 313349000,
  yearRange: {
    highEnd: 36952.65,
    lowEnd: 29653.29,
  },
};

jest.mock('../../hooks/use-quote.ts', () => () => ({
  data,
  error: undefined,
  loading: false,
}));

describe('Widget', () => {
  it('renders a widget with name and correctly formatted price', () => {
    render(<Widget name={'DJIA'} symbol="^dia" />);

    const widget = screen.getByTestId('widget');

    expect(widget).toHaveTextContent('DJIA');
    expect(widget).toHaveTextContent('31,097.26');
  });

  it('renders a widget with a correctly formatted change', () => {
    render(<Widget name={'DJIA'} symbol="^dia" />);

    const widget = screen.getByTestId('widget');

    expect(widget).toHaveTextContent('+321.83');
  });
});
