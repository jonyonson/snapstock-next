import React from 'react';
import { render, screen } from '@testing-library/react';
import Widget from '../Widget';

describe('Widget', () => {
  it('renders a widget with name and correctly formatted price', () => {
    render(
      <Widget
        name={'DJIA'}
        change={823.28345}
        price={31500.57867}
        percentChange={2.6788}
        loading={false}
      />,
    );

    const widget = screen.getByTestId('widget');

    expect(widget).toHaveTextContent('DJIA');
    expect(widget).toHaveTextContent('31,500.58');
  });

  it('renders a widget with a correctly formatted change', () => {
    render(
      <Widget
        name={'DJIA'}
        change={823.28345}
        price={31500.57867}
        percentChange={2.6788}
        loading={false}
      />,
    );

    const widget = screen.getByTestId('widget');

    expect(widget).toHaveTextContent('+823.23');
  });
});
