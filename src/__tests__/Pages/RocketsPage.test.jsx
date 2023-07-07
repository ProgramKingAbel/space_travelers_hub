import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { booked, cancelReservation } from '../../redux/features/rockets/rocketsSlice';
import RocketsPage from '../../Pages/RocketsPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('RocketsPage', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue({ rockets: [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders rocket information correctly', () => {
    const rockets = [
      {
        id: 1,
        rocket_name: 'Falcon 9',
        description: 'Description of Falcon 9',
        flickr_images: ['rocket_image.jpg'],
        reserved: false,
      },
      {
        id: 2,
        rocket_name: 'Falcon Heavy',
        description: 'Description of Falcon Heavy',
        flickr_images: ['rocket_image.jpg'],
        reserved: true,
      },
    ];

    useSelector.mockReturnValue({ rockets });

    const { getByText, getByTestId } = render(<RocketsPage />);

    rockets.forEach((rocket) => {
      expect(getByText(rocket.rocket_name)).toBeInTheDocument();
      expect(getByText(rocket.description)).toBeInTheDocument();
      expect(getByTestId(`rocket-image-${rocket.id}`)).toHaveAttribute('src', rocket.flickr_images[0]);

      if (rocket.reserved) {
        expect(getByText('Reserved')).toBeInTheDocument();
        expect(getByText('Cancel Reservation')).toBeInTheDocument();
        fireEvent.click(getByText('Cancel Reservation'));
        expect(mockDispatch).toHaveBeenCalledWith(cancelReservation(rocket.id));
      } else {
        expect(getByText('Reserve Rocket')).toBeInTheDocument();
        fireEvent.click(getByText('Reserve Rocket'));
        expect(mockDispatch).toHaveBeenCalledWith(booked(rocket.id));
      }
    });
  });
});
