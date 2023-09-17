import { setCountries, setCountryById, setCountryByName, startLoadingCountries, startLoadingCountryById, startLoadingCountryByName } from "./countriesSlice";
import axios from "axios";

export const getCountries = () => {
   return async (dispatch, getState) => {
      dispatch(startLoadingCountries());
      const { data } = await axios.get('https://backcountries-d6li.onrender.com/countries/');
      // console.log(data);
      dispatch(setCountries(data));
   };
};

export const getCountryById = (id) => {
   return async (dispatch, getState) => {
      dispatch(startLoadingCountryById());
      const { data } = await axios.get(`https://backcountries-d6li.onrender.com/countries/${id}`);
      dispatch(setCountryById(data));
   };
};

export const getCountriesByName = (name) => {
   return async (dispatch) => {
      console.log(name);
      dispatch(startLoadingCountryByName());
      const { data } = await axios.get(`https://backcountries-d6li.onrender.com/countries?name=${name}`);
      console.log(data);
      dispatch(setCountryByName(data));
   };
};