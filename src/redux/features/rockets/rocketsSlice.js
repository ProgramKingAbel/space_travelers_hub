import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRocket', () => axios.get('https://api.spacexdata.com/v3/rockets')
  .then((response) => response.data));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    booked: (state, action) => {
      const id = action.payload;
      state = state.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
      state.error = '';
    });
  },
});

export default rocketSlice.reducer;
export const { booked } = rocketSlice.actions;
