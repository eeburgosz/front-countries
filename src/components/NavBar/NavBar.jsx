import React, { useState } from 'react'
import style from './Navbar.module.css'
import 'primeicons/primeicons.css';
import { Link } from "react-router-dom";
import 'animate.css'

export const NavBar = () => {

  const [showInput, setShowInput] = useState(false)
  const toggleInput=()=>{
    setShowInput(!showInput)
  }

  return (
    <div className={style.container}>
      <h1>Countries App</h1>
      <div className={style.iconContainer}>        
        <div onClick={toggleInput} className={style.toggleInput}>
          <i className="pi pi-search"></i>
          <span>Search</span>
        </div>
        {showInput && (
          <input 
            type="text" 
            placeholder="Search a country" 
            className={`${style.input} animate__animated animate__fadeInDown`}
            onKeyDown={()=>{console.log("Enter")}}
          />
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
