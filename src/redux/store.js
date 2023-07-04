import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../redux/features/rockets/rocketsSlice'

const store = configureStore({
  reducer: {
     rocket: rocketReducer,
    // missions: missionsReducer,
    // dragons: dragonsReducer,
  },
});

export default store;
