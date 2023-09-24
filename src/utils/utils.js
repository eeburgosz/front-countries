export const filteringCountries = (countries, continent, season) => {
   if (continent === "All continents" && season === "All seasons") {
      return countries;
   }
   if (continent === "All continents" && season !== "All seasons") {
      return countries.filter(country => country.Activities.some(activity => activity.season === season));
   }
   if (continent !== "All continents" && season === "All seasons") {
      return countries.filter(country => country.continent === continent);
   }
   if (continent !== "All continents" && season !== "All seasons") {
      return countries.filter(country => {
         return (
            country.continent === continent &&
            country.Activities.some(activity => activity.season === season)
         );
      });
   }
   return [];
};

export const sortCountriesByAZ = (countries, sort) => {
   if (sort === "A-Z") {
      return countries.sort((a, b) => a.name.localeCompare(b.name));
   } else if (sort === "Z-A") {
      return countries.sort((a, b) => b.name.localeCompare(a.name));
   } else {
      return countries;
   }
};

export const sortedCountriesByPopulation = (countries, population) => {
   let countriesToSort = [...countries];
   countriesToSort.sort((a, b) => {
      if (population === "minor") {
         return a.population - b.population;
      } else if (population === "major") {
         return b.population - a.population;
      } else {
         return 0;
      }
   });
   return countriesToSort;
};