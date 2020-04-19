import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render NY Times Most Popular Article', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NY Times Most Popular Article/i);
  expect(linkElement).toBeInTheDocument();
});
