import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
   const [filters, setFilters] = useState({      
      continent: "All continents",
      season: "All seasons",
   });
   return (
      <FiltersContext.Provider value={{
         filters,
         setFilters
      }}>
         {children}
      </FiltersContext.Provider>
   );
}