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

const rocketSlice = createSlice({
    name: 'rocket',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchRockets.fulfilled, (state, action) => {
            state.loading = false,
            state.rockets = action.payload
            state.error = ''
        })
    }
})

export default rocketSlice.reducer;