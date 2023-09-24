export const validatorName = (name) => {
   if (name.length < 2) return ("Name must be at least 2 characters");
};
export const validatorSeason = (season) => {
   if (season.length === 0) return ("Season must not be empty");
};
export const validatorDuration = (duration) => {
   if (duration.length < 1) return ("Duration must not be empty");
};
export const validatorCountries = (countries) => {
   if (countries.length === 0) return ("Countries must not be empty");
};