import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cruzeiro Analytics title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Cruzeiro Analytics/i);
  expect(titleElement).toBeInTheDocument();
});