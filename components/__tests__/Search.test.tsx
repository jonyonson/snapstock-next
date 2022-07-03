import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Search';
import useSearch from '../../hooks/use-search';

jest.mock('../../hooks/use-search');

describe('Search', () => {
  it('renders a listbox when input is not empty', async () => {
    (useSearch as jest.Mock).mockReturnValue({
      suggestions: [{ symbol: 'AAPL', name: 'Apple Inc.' }],
      error: undefined,
      loading: false,
    });
    render(<Search placeholder="Search" />);

    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    userEvent.type(input, 'a');
    const listbox = await screen.findByRole('listbox');
    const option = await screen.findByRole('option');

    expect(input.value).toBe('a');
    expect(listbox).toBeVisible();
    expect(option).toHaveTextContent(/aapl/i);
  });

  it('should fail', () => {
    expect(true).toBe(false);
  });
});
