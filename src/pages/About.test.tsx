import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders main values', () => {
    render(<About />);
    expect(screen.getByText(/Async Work Culture/i)).toBeInTheDocument();
    expect(screen.getByText(/Continuous Learning/i)).toBeInTheDocument();
    expect(screen.getByText(/Remote Collaboration/i)).toBeInTheDocument();
  });

  it('renders timeline items', () => {
    render(<About />);
    expect(screen.getByText(/Senior Software Engineer & Team Lead/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
  });
}); 