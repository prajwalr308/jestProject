import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 elements', () => {
  render(<App />);
  const listitem = screen.getAllByRole("listitem");
  expect(listitem).toHaveLength(3);
});
