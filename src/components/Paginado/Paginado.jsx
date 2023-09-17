import React from 'react'
import style from './Paginado.module.css'

export const Paginado = ({countries, countriesPerPage, paginator,onPageChange}) => {

   const pageNumbers = [];
	for (let i = 1; i < Math.ceil(countries / countriesPerPage) + 1; i++) {
		pageNumbers.push(i);
	}

  return (
    <div className={style.container}>
      <ul className={style.listContainer}>
         {
            pageNumbers && pageNumbers.map(number=>(
               <li key={number}>
                  <button onClick={()=>paginator(number)}>                 
                     {number}
                  </button>
               </li>
            ))
         }
      </ul>
    </div>
  )
}
