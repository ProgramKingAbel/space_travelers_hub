import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import RocketsPage from "../../Pages/RocketsPage";
import { fetchRockets, booked, cancelReservation } from "../../redux/features/rockets/rocketsSlice";

jest.mock('react-redux hooks', () => (
    {
        useDispatch: jest.fn(),
        useSelector: jest.fn,
    }
));