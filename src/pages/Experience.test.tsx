import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';

describe('Experience', () => {
  it('renders experience roles and companies', () => {
    render(<Experience />);
    expect(screen.getByText(/Senior Software Engineer & Team Lead/i)).toBeInTheDocument();
    expect(screen.getByText(/Airnguru/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Nobilis/i)).toBeInTheDocument();
  });
}); 