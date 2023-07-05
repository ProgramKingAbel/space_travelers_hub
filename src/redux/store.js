/** @format */
/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import spaceMissionSlice from './features/missions/missionsSlice'

const store = configureStore({
  reducer: {
    spaceMission: spaceMissionSlice,
  },
});

export default store;



