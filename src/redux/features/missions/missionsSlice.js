/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseUrl = `https://api.spacexdata.com/v3/missions`;
export const fetchMission = createAsyncThunk(
  'missions/fetchMission',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      const { ...data } = await response.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  spaceMission: [],
  status: false,
  isLoading: false,
  error: null,
};

const spaceMissionSlice = createSlice({
  name: 'spaceMission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      console.log(action.payload);
      state.spaceMission = action.payload;
      console.log('hello');
      console.log(state.fetchMission);
      state.isLoading = false;
    }),
    builder.addCase(fetchMission.rejected, (state) => {
      state.isLoading = false;
      state.error = 'something went wrong';
    });
  },
});

export const { actions } = spaceMissionSlice;
export default spaceMissionSlice.reducer;
