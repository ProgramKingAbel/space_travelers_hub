import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    rockets: [],
    error: '',
}

export const fetchRockets = createAsyncThunk('rocket/fetchRocket', () => {
    return axios.get('https://api.spacexdata.com/v3/rockets')
        .then((response) => response.data)
})

