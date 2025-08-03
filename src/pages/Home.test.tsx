import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the main heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /alonso/i })).toBeInTheDocument();
  });

  it('renders value cards', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Team Leader & Mentor/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS Cloud Expert/i)).toBeInTheDocument();
    expect(screen.getByText(/Angular Specialist/i)).toBeInTheDocument();
  });
}); 