import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRocket', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch rockets');
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    booked: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
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
export const { booked, cancelReservation } = rocketSlice.actions;
