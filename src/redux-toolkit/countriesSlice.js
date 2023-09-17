import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
   name: 'countries',
   initialState: {
      isLoading: false,
      countries: [],
      countryById: {},
      currentPage: 1
   },
   reducers: {
      startLoadingCountries: (state) => {
         state.isLoading = true;
      },
      setCountries: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      },
      startLoadingCountryById: (state) => {
         state.isLoading = true;
      },
      setCountryById: (state, action) => {
         state.isLoading = false;
         state.countryById = action.payload;
      },
      startLoadingCountryByName: (state) => {
         state.isLoading = true;
      },
      setCountryByName: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      },
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload;
      }
   },
});
// Action creators are generated for each case reducer function
export const {
   startLoadingCountries,
   setCountries,
   startLoadingCountryById,
   setCountryById,
   startLoadingCountryByName,
   setCountryByName,
   setCurrentPage
} = countriesSlice.actions;
