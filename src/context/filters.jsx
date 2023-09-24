import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
   const [CSfilters, setCSFilters] = useState({      
      continent: "All continents",
      season: "All seasons",
   });
   return (
      <FiltersContext.Provider value={{
         CSfilters,
         setCSFilters
      }}>
         {children}
      </FiltersContext.Provider>
   );
}