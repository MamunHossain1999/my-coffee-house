import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Card from './Card';

export default function CoffeeCard() {
    // button er jonno useState 
    const navigate = useNavigate();
    const data = useLoaderData();
    
    const {category} = useParams();
   

    const [coffees, setCoffees] = useState([]);
  
   useEffect(()=>{
  
   
    if(category){
        const filteredByCategory = [...data].filter(coffee => coffee.category === category)
        setCoffees(filteredByCategory)
    }else{
        setCoffees(data.slice(0, 6))
    }
    }, [category, data]);
        
    console.log(data)
  
  return (
   <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
        {coffees.map(coffee => (<Card key={coffee.id} coffee={coffee}></Card>))}
       
      
    </div>
    <div className='w-11/12 mx-auto'>
            <button onClick={()=>navigate('/coffees')} className='btn bg-lime-400 mt-7 mb-7 text-white'>View All</button>
        </div>
   </div>
  )
}
