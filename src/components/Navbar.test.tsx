import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to home page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Navigate to About page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Navigate to Experience page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Navigate to Portfolio page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Navigate to Contact page/i)).toBeInTheDocument();
  });

  it('toggles dark mode', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
}); 