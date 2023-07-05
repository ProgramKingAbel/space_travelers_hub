import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketsSlice';
import dragonsReducer from './features/dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    // missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
