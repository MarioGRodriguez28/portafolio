import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders logo text', () => {
  const { getByText } = render(<Header />);
  const logoText = screen.getByText(/portfolio/i);
  expect(logoText).toBeInTheDocument();
});

test('renders navigation links', () => {
  const { getByText } = render(<Header />);
  const homeLink = screen.getByText(/home/i);
  const servicesLink = screen.getByText(/services/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});


