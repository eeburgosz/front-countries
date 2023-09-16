import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getCountries } from "../../redux-toolkit/thunks";
import style from "./Home.module.css"
import { CardsContainer, Filtros } from "../../components";

export const HomePage = () => {

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  return (
    <div className={style.container}>
      <Filtros />
      <div className={style.subcontainer}>
        <CardsContainer />
        <div>Paginado</div>
      </div>
    </div>
  )
}
