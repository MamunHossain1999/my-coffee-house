import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({coffee}) {
    const {id, name, image, category, ingredients, rating,popularity} = coffee || {};
    console.log(coffee)
  return (
    <Link to={ `/coffee/ $ {id}`} >
    <div className="transition hover:scale-105 card bg-base-100 w-96 mx-auto shadow-xl mt-3">
            <figure>
                <img className='flex-grow w-11/12 h-72 rounded-lg'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                    <h2 className="card-title">
                        {name || "Unknown Coffee"}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{category || ""}</p>
                    <p>{rating || "N/A"}</p>
                    <p>{popularity || "N/A"}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">Ingredients: {ingredients?.join(", ") || "N/A"}</div>
                    </div>
                </div>
        </div>
    </Link>
  )
}
