import { createSlice } from "@reduxjs/toolkit";

const state = {
  items: [],
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState: state,
  reducers: {
    appendCart: (state, actions) => {
      state.items = [...state.items, actions.payload];
    },
    popCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      //push item into a new Bucket
      const newBucket = [...state.items];

      if (index >= 0) {
        newBucket.splice(index, 1);
      }

      state.items = newBucket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { appendCart, popCart } = resturantSlice.actions;
export const selectBucketItems = (state) => state.bucket.items;
// get by Id
export const selectBucketItemsOnId = (state, id) =>
  state.bucket.items.filter((item) => item.id === id);
// total amount
export const selectBucketSubTotal = (state) =>
  //TODO:: why reduce is not working
  //state.bucket.items.map((item) => );
  state.bucket.items.reduce((total, item) => total + Math.round(item.price), 0);

export default resturantSlice.reducer;
