import React, { useEffect } from 'react'
import style from './CardsContainer.module.css'
import { Cards } from '../';
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux-toolkit/thunks";


export const CardsContainer = () => {

const {countries, isLoading}= useSelector(state=>state.countries)
const dispatch= useDispatch()
useEffect(()=>{  
   dispatch(getCountries())
  },[dispatch])

  if(countries.length === 0 ){
    return <h2>No countries found</h2>
  }
  
  return (
      <div className={style.container}>
        {!isLoading && countries.length=== 0 ? (<h2>No countries found</h2>):
 !isLoading &&
  countries.map(country=>          
    <Cards 
      key={country.id}
      id={country.id}
      flag={country.flag}
      name={country.name}
      continent={country.continent} 
    />
  )


        }
      </div>
  )
}
