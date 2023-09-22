import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export const useFiltersContinentSeason = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterCountries = (countries) => {
    return countries.filter(country => {
      return (
        country.season === filters.season &&
        (
          filters.continent === "All continents" ||
          filters.continent === country.contient
        )
      );
    });
  };
  return { filterCountries, setFilters, filters };
};

// export const 