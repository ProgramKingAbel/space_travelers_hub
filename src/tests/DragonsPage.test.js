// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { useDispatch, useSelector } from 'react-redux';
// import '@testing-library/jest-dom';
// import DragonsPage from '../Pages/DragonsPage';
// import { fetchDragons } from '../redux/features/dragons/dragonsSlice';

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// describe('DragonsPage Component', () => {
//   const dragons = [
//     {
//       id: '1',
//       name: 'Test Dragon 1',
//       flickr_images: ['test-image-1.jpg'],
//       description: 'This is a test dragon 1.',
//       reserved: false,
//     },
//     {
//       id: '2',
//       name: 'Test Dragon 2',
//       flickr_images: ['test-image-2.jpg'],
//       description: 'This is a test dragon 2.',
//       reserved: true,
//     },
//   ];

//   it('should render the DragonsPage component with dragons', () => {
//     const dispatch = jest.fn();
//     useDispatch.mockReturnValue(dispatch);
//     useSelector.mockReturnValue({ dragons });

//     render(<DragonsPage />);

//     // Check if the dragon names are rendered
//     expect(screen.getByText('Test Dragon 1')).toBeInTheDocument();
//     expect(screen.getByText('Test Dragon 2')).toBeInTheDocument();

//     // Check if the dragon images are rendered
//     expect(screen.getAllByRole('img')).toHaveLength(2);

//     // Check if fetchDragons action is dispatched
//     expect(dispatch).toHaveBeenCalledTimes(1);
//     expect(dispatch).toHaveBeenCalledWith(fetchDragons());
//   });
// });
