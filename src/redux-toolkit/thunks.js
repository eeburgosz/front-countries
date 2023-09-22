import { setCountries, setCountryById, setCountryByName, setFilteredCountries, startLoadingCountries } from "./countriesSlice";
import axios from "axios";
import { filteringCountries } from './../utils/utils';

export const getCountries = () => {
   return async (dispatch, getState) => {
      dispatch(startLoadingCountries());
      const { data } = await axios.get('https://backcountries-d6li.onrender.com/countries/');
      dispatch(setCountries(data));
   };
};

export const getCountryById = (id) => {
   return async (dispatch, getState) => {
      dispatch(startLoadingCountries());
      const { data } = await axios.get(`https://backcountries-d6li.onrender.com/countries/${id}`);
      dispatch(setCountryById(data));
   };
};

export const getCountriesByName = (name) => {
   return async (dispatch) => {
      dispatch(startLoadingCountries());
      const { data } = await axios.get(`https://backcountries-d6li.onrender.com/countries?name=${name}`);
      dispatch(setCountryByName(data));
   };
};

export const continentSeasonFilter = ({ continent, season }) => {
   return async (dispatch, getState) => {
      const { auxCountries } = getState().countries;
      const filtrarPaises = filteringCountries(auxCountries, continent, season);
      dispatch(setFilteredCountries(filtrarPaises));
   };
}
/*
*/