import React, { useState } from 'react'
import style from './Navbar.module.css'
import 'primeicons/primeicons.css';
import { Link } from "react-router-dom";
import 'animate.css'
import countries from '../../assets/countries.png'
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux-toolkit/thunks";

export const NavBar = () => {

  const dispatch= useDispatch()

  const [showInput, setShowInput] = useState(false)
  const toggleInput=()=>{
    setShowInput(!showInput)
  }

  const [value, setValue] = useState("")

  const handleInputChange=(e)=>{
    e.preventDefault() 
    setValue(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(getCountriesByName(value))
    setValue("")
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={countries} alt="countries" className={style.image}/>
        <h1>Countries App</h1>
      </div>
      <div className={style.iconContainer}>        
        <div onClick={toggleInput} className={style.toggleInput}>
          <i className="pi pi-search"></i>
          <span>Search</span>
        </div>
        {showInput && (
          <form onSubmit={handleSubmit} className={style.form}>            
            <input 
              type="text" 
              placeholder="Search a country" 
              className={`${style.input} animate__animated animate__fadeInDown`}
              value={value}
              onChange={handleInputChange}
            />
          </form>          
        )}        
        <Link to="/countries" className={style.link}>
          <div>
            <i className="pi pi-home"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/create" className={style.link}>
          <div>
            <i className="pi pi-plus"></i>      
            <span>Activity</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
