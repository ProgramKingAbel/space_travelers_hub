/** @format */
import { configureStore } from '@reduxjs/toolkit';
import spaceMissionSlice from './features/missions/missionsSlice';
import rocketReducer from './features/rockets/rocketsSlice';
import dragonsReducer from './features/dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    spaceMission: spaceMissionSlice,
    dragons: dragonsReducer,
  },
});

export default store;
