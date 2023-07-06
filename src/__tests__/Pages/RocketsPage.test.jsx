import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import RocketsPage from "../../Pages/RocketsPage";
import { fetchRockets, booked, cancelReservation } from "../../redux/features/rockets/rocketsSlice";

jest.mock('react-redux', () => (
    {
        useDispatch: jest.fn(),
        useSelector: jest.fn,
    }
));

jest.mock('../../redux/features/rockets/rocketsSlice.js', () => ({
    fetchRockets: jest.fn(),
    booked: jest.fn(),
    cancelReservation: jest.fn(),
}));

describe('RocketsPage', () => {
    
})