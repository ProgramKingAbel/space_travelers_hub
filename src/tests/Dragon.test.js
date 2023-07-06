// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { useDispatch } from 'react-redux';
// import Dragon from '../Pages/Dragon';
// import { reserveDragon, cancelReservation } from '../redux/features/dragons/dragonsSlice';

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// describe('Dragon Component', () => {
//   const dragon = {
//     id: '1',
//     name: 'Test Dragon',
//     flickrImages: 'test-image.jpg', // Update the flickrImages to an array
//     description: 'This is a test dragon.',
//     reserved: false,
//   };

//   it('should render the Dragon component with Reserve button', () => {
//     const dispatch = jest.fn();
//     useDispatch.mockReturnValue(dispatch);

//     render(<Dragon {...dragon} />);

//     expect(screen.getByAltText('Test Dragon')).toBeInTheDocument();
//     expect(screen.getByText('Test Dragon')).toBeInTheDocument();
//     expect(screen.getByText('This is a test dragon.')).toBeInTheDocument();
//     expect(screen.getByText('Reserve Dragon')).toBeInTheDocument();

//     fireEvent.click(screen.getByText('Reserve Dragon'));
//     expect(dispatch).toHaveBeenCalledWith(reserveDragon('1'));
//   });

//   it('should render the Dragon component with Cancel Reservation button', () => {
//     const dispatch = jest.fn();
//     useDispatch.mockReturnValue(dispatch);

//     render(<Dragon {...dragon} reserved />);

//     expect(screen.getByAltText('Test Dragon')).toBeInTheDocument();
//     expect(screen.getByText('Test Dragon')).toBeInTheDocument();
//     expect(screen.getByText('This is a test dragon.')).toBeInTheDocument();
//     expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();

//     fireEvent.click(screen.getByText('Cancel Reservation'));
//     expect(dispatch).toHaveBeenCalledWith(cancelReservation('1'));
//   });
// });
