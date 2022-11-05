import { createSlice } from "@reduxjs/toolkit";

const state = {
  resturant: {
    preview: null,
    title: null,
    location: null,
    rating: null,
    dishes: null,
    lat: null,
    long: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState: state,
  reducers: {
    setResturant: (state, actions) => {
      state.resturant = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;
export const selectResturantItems = (state) => state;
export default resturantSlice.reducer;
