import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
   name: 'countries',
   initialState: {
      isLoading: false,
      countries: [],
      auxCountries: [],
      auxCountriesToMap: [],
      countryById: {},
      currentPage: 1
   },
   reducers: {
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload;
      },
      startLoadingCountries: (state) => {
         state.isLoading = true;
      },
      setCountries: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
         state.auxCountries = action.payload;
         state.auxCountriesToMap = action.payload;
      },
      setCountryById: (state, action) => {
         state.isLoading = false;
         state.countryById = action.payload;
      },
      setCountryByName: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      },
      setFilteredCountries: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      },
      setSortByAZ: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      },
      setSortByPopulation: (state, action) => {
         state.isLoading = false;
         state.countries = action.payload;
      }
   },
});

export const {
   setCurrentPage,
   startLoadingCountries,
   setCountries,
   setCountryById,
   setCountryByName,
   setFilteredCountries,
   setSortByAZ,
   setSortByPopulation
} = countriesSlice.actions;
