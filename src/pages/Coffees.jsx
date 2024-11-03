import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

export default function Coffees() {
    const data = useLoaderData()
    console.log(data)
  return (
   
      <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
        {data.map(coffee => (<Card key={coffee.id} coffee={coffee}></Card>))}
        </div>
    </div>
  )
}
