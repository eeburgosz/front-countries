import { setCountries, startLoadingCountries } from "./countriesSlice";
import axios from "axios";

export const getCountries = () => {
   return async (dispatch, getState) => {
      dispatch(startLoadingCountries());
      const { data } = await axios.get('https://backcountries-d6li.onrender.com/countries/');
      console.log(data);
      dispatch(setCountries(data));
   };
};