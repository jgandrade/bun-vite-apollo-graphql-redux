import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from '../Home';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Home /> as React.ReactNode);

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'));
  const header = await screen.findByTestId('page-headers');

  // ASSERT
  expect(header).toHaveTextContent('Hello Home');
  expect(screen.getByRole('button')).toBeDisabled();
});
