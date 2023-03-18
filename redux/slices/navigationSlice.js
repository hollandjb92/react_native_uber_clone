import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    origin: null,
    destination: null,
    travelInformation: null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

export const selectOrigin = (state) => state.navigation.origin;
export const selectDestination = (state) => state.navigation.destination;
export const selectTravelInformation = (state) =>
  state.navigation.travelInformation;

export const { setOrigin, setDestination, setTravelInformation } =
  navigationSlice.actions;

export default navigationSlice.reducer;
