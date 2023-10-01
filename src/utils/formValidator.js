


export const validatorName = (name, countries) => {

   const activities = countries.find(country => country.Activities.some(activity => activity.activityName === name));

   if (name.length < 2) return ("Name must be at least 2 characters");
   if (activities) return ("Activity already exists");
};
export const validatorSeason = (season) => {
   if (season.length === 0 || season === "Select") return ("Season must not be empty");
};
export const validatorDuration = (duration) => {
   if (duration.length < 1 || duration.length > 12) return ("Duration must be between 1 and 12");
};
export const validatorCountries = (countries) => {
   if (countries.length === 0) return ("Countries must not be empty");
};