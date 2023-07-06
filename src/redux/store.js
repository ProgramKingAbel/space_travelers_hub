/** @format */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import spaceMissionSlice from './features/missions/missionsSlice';
import rocketReducer from './features/rockets/rocketsSlice';
import dragonsReducer from './features/dragons/dragonsSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    spaceMission: spaceMissionSlice,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger),
});

export default store;
