import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories({categories}) {
    // console.log(categories)
  return (

       
        <div role="tablist" className="w-11/12 tabs tabs-lifted mb-10">
            {
                 categories.map(category => (
                    <NavLink key={category.category} 
                    to={`/category/${category.category}`} role="tab" className={({isActive })=> `tab text-2xl ${isActive  ? 'tab-active ': ''}`}>{category.category}</NavLink>) )
            }
            
        </div>
  )
}
