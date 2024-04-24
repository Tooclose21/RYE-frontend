import { render, screen } from '@testing-library/react';
import LoginPage from './pages/LoginPage';
import Navbar from "./components/Navbar";

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
