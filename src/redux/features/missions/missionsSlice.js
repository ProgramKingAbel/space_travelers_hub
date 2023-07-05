/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// const baseUrl = `https://api.spacexdata.com/v3/missions`;
export const fetchMission = createAsyncThunk(
	"missions/fetchMission",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(
				`https://api.spacexdata.com/v3/missions`
			);
			const data = await response.data;
			console.log("hello")
			return data;

		} catch (error) {
			return thunkAPI.rejectWithValue("something went wrong");
		}
	}
);


const initialState = {
	spaceMission: [],
	isLoading: false,
	error: null,
};

const spaceMissionSlice = createSlice({
	name: "spaceMission",
	initialState,
	reducers: {
		joinMission:(state,action)=>{
			const missionId = action.payload;
			console.log(missionId)
      state.spaceMission = state.spaceMission.map((mission) => {
				console.log(mission.mission_id)
        if (mission.mission_id === missionId) {
          return { ...mission, statusCheck: true };
        }
        return mission;
      });

		},
		LeaveMission:(state,action)=>{
			const missionId = action.payload;
      state.spaceMission = state.spaceMission.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, statusCheck: false };
        }
        return mission;
      });

		}
	},
	extraReducers: (builder) => {
		builder.addCase("missions/fetchMission/pending", (state) => {
			state.isLoading = true
		}),
		builder.addCase("missions/fetchMission/fulfilled", (state, action) => {
				state.spaceMission = action.payload;
				state.isLoading = false;
			}),
			builder.addCase("missions/fetchMission/rejected", (state) => {
				state.isLoading = false;
				state.error = "something went wrong";
			});
	},
});

/* eslint-disable */

export const { joinMission, LeaveMission} = spaceMissionSlice.actions;
export default spaceMissionSlice.reducer;



// state.spaceMission = action.payload.map((mission) => ({
				// 	...mission,
				// 	statusCheck:true
				// }));