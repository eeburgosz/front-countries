import React from 'react'
import { Link } from "react-router-dom"
import style from './Card.module.css'
import 'animate.css';

export const Cards = ({id, flag, name, continent}) => {


  return (
    <Link to={`/country/${id}`} className={style.link}>
      <div className={`${style.container} animate__animated animate__fadeIn`}>
        <img className={style.flagContainer} src={flag} alt={name} />
        <p>{name}</p>
        <span>{continent}</span>
      </div>
    </Link>
  )
}