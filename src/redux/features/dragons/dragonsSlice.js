import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dragonsUrl = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async (arg, { rejectWithValue }) => {
  try {
    const response = await axios.get(dragonsUrl);
    const result = response.data;
    return result;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const id = action.payload;
      state.dragons = state.dragons.map((dragon) => (
        dragon.id !== id ? dragon : { ...dragon, reserved: true }
      ));
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      state.dragons = state.dragons.map((dragon) => (
        dragon.id !== id ? dragon : { ...dragon, reserved: false }
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.loading = false;
        state.dragons = action.payload;
        state.error = null;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;
export const { cancelReservation, reserveDragon, extraReducers } = dragonsSlice.actions;
