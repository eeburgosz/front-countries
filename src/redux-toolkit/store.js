import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from "./countriesSlice";

export const store = configureStore({
   reducer: {
      countries: counterSlice.reducer
   },
});