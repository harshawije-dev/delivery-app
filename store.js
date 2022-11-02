import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./features/bucketSlice";

export default configureStore({
  reducer: {
    bucket: bucketSlice,
  },
});
