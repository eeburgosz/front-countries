import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getCountries } from "../../redux-toolkit/thunks";

export const HomePage = () => {

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  return (
    <div className="">HomePage</div>
  )
}
