import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import RocketsPage from "../../Pages/RocketsPage";
import { fetchRockets, booked, cancelReservation } from "../../redux/features/rockets/rocketsSlice";

jest.mock('react-redux');

// jest.mock('../../redux/features/rockets/rocketsSlice.js', () => ({
//     fetchRockets: jest.fn(),
//     booked: jest.fn(),
//     cancelReservation: jest.fn(),
// }));

describe('RocketsPage', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
    })

    test('renders the component with rockets', () => {
        const mockSelector = jest.spyOn(useSelector);
        mockSelector.mockReturnValue({
            rockets: [
                {
                    id: 1,
                    rocket_name: 'Falcon 9',
                    flickr_images: ["https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"],
                    description: 'Rocket description',
                    reserve: false,
                },
            ],
    
        })
        render(<RocketsPage />);
    
        // Assertions
        expect(screen.getByText('Falcon 9')).toBeInTheDocument();
        expect(screen.getByText('Rocket description')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Reserve Rocket' })).toBeInTheDocument();
    
        mockSelector.mockRestore()
      });
});

afterEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    // fetchRockets.mockClear();
    // booked.mockClear();
    // cancelReservation.mockClear();
});
  
