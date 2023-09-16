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
  
  return (
      <div className={style.container}>
        { !isLoading &&
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
