import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./slice/mealSlice";
export const store = configureStore({
  reducer: {
    mealdetails: mealSlice,
  },
});
// console.log(store);