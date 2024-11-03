import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

export default function Coffees() {
    const data = useLoaderData()

    // sort korar jonno state declare
    const [sortedData, setSortedData] = useState(data);
    console.log(sortedData)

    const sortByRating = () => {
        const sortedByRating = [...sortedData].sort((a, b) => b.rating - a.rating);
        setSortedData(sortedByRating);
    };

    const sortByPopularity = () => {
        const sortedByPopularity = [...sortedData].sort((a, b) => b.popularity - a.popularity);
        setSortedData(sortedByPopularity);
    };
   

  
  return (
    <>
        <div className='flex justify-between items-center mt-16 w-11/12 mx-auto'>
            <h2 className='text-3xl'>Sort Coffee's by Popularity & Rating -> </h2>
            <div className='flex gap-2'>
                <button onClick={sortByPopularity} className='btn bg-yellow-500'>Sort By Popularity</button>
                <button onClick={sortByRating} className='btn bg-yellow-500'>Sort By Rating</button>
            </div>
        </div>
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 mt-5'>
            {sortedData.map(coffee => (<Card key={coffee.id} coffee={coffee}></Card>))}
        </div> 
    </>
  )
}
