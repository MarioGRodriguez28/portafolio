import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders logo text', () => {
  // Renders the Header component
  render(<Header />);
  
  // Verify that the text "portfolio" is present in the document
  const logoText = screen.getByText(/portfolio/i);
  expect(logoText).toBeInTheDocument();
});

test('renders navigation links', () => {
  // Renders the Header component
  render(<Header />);
  
  // Verify that navigation links are present in the document
  const homeLink = screen.getByText(/home/i);
  const servicesLink = screen.getByText(/services/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
