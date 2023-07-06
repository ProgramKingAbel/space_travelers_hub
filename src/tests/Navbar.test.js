import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Navbar', () => {
  it('renders navbar links correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();

    const dragonsLink = screen.getByText('Dragons');
    expect(dragonsLink).toBeInTheDocument();

    const missionsLink = screen.getByText('Missions');
    expect(missionsLink).toBeInTheDocument();

    const profileLink = screen.getByText('My Profile');
    expect(profileLink).toBeInTheDocument();
  });

  it('renders logo correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText('space-travelers-hub');
    expect(logo).toBeInTheDocument();
  });
});
