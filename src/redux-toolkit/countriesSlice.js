import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      isLoading: false,
      countries: [],
      countryById: {}
   },
   reducers: {
      startLoadingCountries: (state) => {
         state.isLoading = true;
      },
      setCountries: (state, action) => {
         // console.log(action);
         state.isLoading = false;
         state.countries = action.payload;
      },
      startLoadingCountryById: (state) => {
         state.isLoading = true;
      },
      setCountryById: (state, action) => {
         state.isLoading = false;
         state.countryById = action.payload;
      }
   },
});

// Action creators are generated for each case reducer function
export const { startLoadingCountries, setCountries } = counterSlice.actions;
