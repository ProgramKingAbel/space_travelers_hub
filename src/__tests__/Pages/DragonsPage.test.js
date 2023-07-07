import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DragonsPage from '../../Pages/DragonsPage';

const mockStore = configureStore([]);

describe('DragonsPage', () => {
  let store;
  let renderedComponent;

  beforeEach(() => {
    store = mockStore({
      dragons: {
        dragons: [
          {
            id: '1',
            name: 'Dragon 1',
            flickr_images: ['image1.jpg'],
            description: 'Dragon 1 description',
            reserved: false,
          },
          {
            id: '2',
            name: 'Dragon 2',
            flickr_images: ['image2.jpg'],
            description: 'Dragon 2 description',
            reserved: true,
          },
        ],
      },
    });
  });

  afterEach(() => {
    renderedComponent.unmount();
  });

  it('renders dragons correctly', () => {
    renderedComponent = render(
      <Provider store={store}>
        <DragonsPage />
      </Provider>,
    );

    const dragon1 = screen.getByText('Dragon 1');
    expect(dragon1).toBeInTheDocument();

    const dragon2 = screen.getByText('Dragon 2');
    expect(dragon2).toBeInTheDocument();

    const reserveButton = screen.getByText('Reserve Dragon');
    fireEvent.click(reserveButton);
    expect(store.getActions()).toEqual([{ type: 'dragons/reserveDragon', payload: '1' }]);
  });

  it('renders reserved dragon correctly', () => {
    renderedComponent = render(
      <Provider store={store}>
        <DragonsPage />
      </Provider>,
    );

    const reservedText = screen.getByText('Reserved');
    expect(reservedText).toBeInTheDocument();

    const cancelReservationButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelReservationButton);
    expect(store.getActions()).toEqual([{ type: 'dragons/cancelReservation', payload: '2' }]);
  });
});
