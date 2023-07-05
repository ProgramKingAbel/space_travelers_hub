/** @format */
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import spaceMissionSlice from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    spaceMission: spaceMissionSlice,
=======
import rocketReducer from './features/rockets/rocketsSlice';
import dragonsReducer from './features/dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    // missions: missionsReducer,
    dragons: dragonsReducer,
>>>>>>> development
  },
});

export default store;
