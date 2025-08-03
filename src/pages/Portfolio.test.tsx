import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  it('renders the main heading', () => {
    render(<Portfolio />);
    expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
  });

  it('renders a project title', () => {
    render(<Portfolio />);
    expect(screen.getByText(/Personal Portfolio Website/i)).toBeInTheDocument();
  });
}); 