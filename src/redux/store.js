import { configureStore } from '@reduxjs/toolkit';
//import rocketReducer from './features/rockets/rocketsSlice';

const store = configureStore({
    reducer: {
        // rockets: rocketReducer,
        // missions: missionsReducer,
        // dragons: dragonsReducer,
    },
});

export default store;