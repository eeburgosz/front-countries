import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export const useFiltersContinentSeason = () => {
  const { CSfilters, setCSFilters } = useContext(FiltersContext);

  const filterCountries = (countries) => {
    return countries.filter(country => {
      return (
        country.season === CSfilters.season &&
        (
          CSfilters.continent === "All continents" ||
          CSfilters.continent === country.contient
        )
      );
    });
  };
  return { filterCountries, setCSFilters, CSfilters };
};
