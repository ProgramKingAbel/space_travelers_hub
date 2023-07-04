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

// import { configureStore } from '@reduxjs/toolkit'
// import bookReducer from "./features/missions/missionsSlice"
// // import categoryReducer from "./categories/categoriesSlice";

//  const store = configureStore({
//   reducer :{
//     bookStore:bookReducer,
//     // bookCategory:categoryReducer
//   },
// })

// export default store;
