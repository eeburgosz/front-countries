import React, { useEffect, useState } from 'react'
import style from './CardsContainer.module.css'
import { Cards, NavBar, Paginado } from '../';
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux-toolkit/thunks";


export const CardsContainer = () => {

  const {countries, isLoading}= useSelector(state=>state.countries)
  const dispatch= useDispatch()
  useEffect(()=>{  
   dispatch(getCountries())
  },[dispatch])

  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line
  const [countriesPerPage, setCountriesPerPage] = useState(9)
  const indexOfLastCountry= currentPage * countriesPerPage;
  const indexOfFirstCountry= indexOfLastCountry-countriesPerPage
  const currentCountry= countries.slice(indexOfFirstCountry, indexOfLastCountry)
  
  const paginator = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

  return (
    <>
    {/* <NavBar setCurrentPage={setCurrentPage}/> */}
      <div className={style.container}>
        {
          /* !isLoading && */ currentCountry.length=== 0 ? (<h2>No countries found</h2>)
          :
          !isLoading && currentCountry.map(country=>          
            <Cards 
              key={country.id}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent} 
            />
          )
        }
        <Paginado
          countries={countries.length}
          countriesPerPage={countriesPerPage}
          paginator={paginator}
        />
      </div>
    </>
  )
}
