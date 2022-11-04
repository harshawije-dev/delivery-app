import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./features/bucketSlice";
import resturantSlice from "./features/resturantSlice";

export default configureStore({
  reducer: {
    bucket: bucketSlice,
    resturant: resturantSlice
  },
});
