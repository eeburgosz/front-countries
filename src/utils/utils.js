export const mappingCountriesByContinent = (countries, payload) => {
   return countries.filter(country => country.continent === payload);
};

export const mappingCountriesBySeason = (countries, payload) => {
   return countries.filter(country => country.Activities.some(activity => activity.season === payload));
};

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