/** @format */

import { configureStore } from '@reduxjs/toolkit';
// import rocketReducer from './features/rockets/rocketsSlice';
import spaceMissionSlice from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    // rockets: rocketReducer,
    missions: spaceMissionSlice,
    // dragons: dragonsReducer,
  },
});

export default store;
