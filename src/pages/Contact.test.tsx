import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders contact methods', () => {
    render(<Contact />);
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });

  it('renders expertise items', () => {
    render(<Contact />);
    expect(screen.getByText(/Angular \(4-18\) & TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Python & NodeJS development/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS \(Lambda, S3, Cognito, DynamoDB\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Team leadership & mentoring/i)).toBeInTheDocument();
  });
}); 