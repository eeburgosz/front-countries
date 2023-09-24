import React, { useEffect, useState } from 'react';
import style from './Filtros.module.css';
import { useDispatch, useSelector } from "react-redux";
import { continentSeasonFilter, sortByAZ, sortByPopulation,  } from "../../redux-toolkit/thunks";
import { setCurrentPage } from "../../redux-toolkit/countriesSlice";
import { useFiltersContinentSeason } from "../../hooks/useFilters";

export const Filtros = () => {

  const dispatch = useDispatch();

  const { isLoading, auxCountriesToMap } = useSelector(state => state.countries);

  const continentesUnicos = new Set(auxCountriesToMap?.map(obj => obj.continent));
  const contients = Array.from(continentesUnicos);

  const seasonsSet = new Set();

  auxCountriesToMap?.forEach((obj) => {
    if (obj.Activities && obj.Activities.length > 0) {
      obj.Activities.forEach((activity) => {
        seasonsSet.add(activity.season);
      });
    }
  });

  const seasons = Array.from(seasonsSet);

  const { CSfilters, setCSFilters } = useFiltersContinentSeason();

  const handleContinent = (e) => {
    setCSFilters({
      ...CSfilters,
      continent: e.target.value
    });
    dispatch(setCurrentPage(1));
  };

  const handleSeason = (e) => {
    setCSFilters({
      ...CSfilters,
      season: e.target.value
    });
    dispatch(setCurrentPage(1));
  };
  
  useEffect(() => {
    dispatch(continentSeasonFilter(CSfilters));
  }, [dispatch, CSfilters]);
  
  const [sortFilter, setSortFilter] = useState("All countries");
  const [populationFilter, setPopulationFilter] = useState("All countries");
  
  const handleSort = (e) => {
    setSortFilter(e.target.value);
    dispatch(setCurrentPage(1));    
  };
  useEffect(() => {
    dispatch(sortByAZ(sortFilter))
  }, [dispatch, sortFilter]);

  const handlePopulation = (e) => {
    setPopulationFilter(e.target.value);
    dispatch(setCurrentPage(1));    
  };  
  useEffect(() => {
   dispatch(sortByPopulation(populationFilter))
  }, [dispatch, populationFilter]);
  
  return (
    <div className={style.container}>
      {
        !isLoading &&
        (
          <div className={style.subcontainer}>
            <div className={style.selectContainer}>
              <label htmlFor="continents">Continent</label>
              <select
                id="continents"
                onChange={handleContinent}
                className={style.select}
              >
                <option defaultValue>All continents</option>
                {
                  contients?.map(continent => (
                    <option key={continent} value={continent}>{continent}</option>
                  ))
                }
              </select>
            </div>
            <div className={style.selectContainer}>
              <label htmlFor="seasons">Season Activity</label>
              <select
                id="seasons"
                onChange={handleSeason}
                className={style.select}
              >
                <option defaultValue>All seasons</option>
                {
                  seasons?.map(season => (
                    <option key={season} value={season}>{season}</option>
                  ))
                }
              </select>
            </div>
            <hr />
            <div className={style.selectContainer}>
              <label htmlFor="sort">Sort</label>
              <select
                id="sort"
                onChange={handleSort}
                className={style.select}
              >
                <option defaultValue>All countries</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>

            <div className={style.selectContainer}>
              <label htmlFor="population">Population</label>
              <select
                id="population"
                onChange={handlePopulation}
                className={style.select}
              >
                <option defaultValue>All countries</option>
                <option value="major">More population</option>
                <option value="minor">Less population</option>
              </select>
            </div>
          </div>
        )
      }
    </div>
  );
}
/*

*/