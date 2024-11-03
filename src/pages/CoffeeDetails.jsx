import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CoffeeDetails() {
    const data = useLoaderData(); // Data লোড করা হচ্ছে
    const { id } = useParams(); // URL থেকে id সংগ্রহ করা হচ্ছে
    
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        const singleData = data.find(coffee => coffee.id === parseInt(id)); 
        setCoffee(singleData);
    }, [data, id]);

    // Coffee ডেটা থেকে প্রতিটি ফিল্ড এক্সট্র্যাক্ট করা
    const { name, image, category, ingredients, rating, popularity } = coffee || {};

    return (
        <div className="transition hover:scale-105 card bg-base-100 w-96 mx-auto shadow-xl mt-24">
            <figure>
                <img className='flex-grow w-11/12 h-72 rounded-lg'
                     src={image || 'default_image.jpg'}
                     alt="Coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {name || "Unknown Coffee"}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Category: {category || "N/A"}</p>
                <p>Rating: {rating || "N/A"}</p>
                <p>Popularity: {popularity || "N/A"}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category || "N/A"}</div>
                    <div className="badge badge-outline">
                        Ingredients: {ingredients ? ingredients.join(", ") : "N/A"}
                    </div>
                </div>
            </div>
        </div>
    );
}
