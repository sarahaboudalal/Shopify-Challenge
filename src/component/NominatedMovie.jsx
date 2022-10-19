import React from 'react';

export default function NominatedMovie( {img, title, year} ){

    return(
        <div className='mx-3 my-6'>
        <img className="my-1 rounded shadow-2xl" src={img} alt='movie poster'/>
        <h4 className="text-xl font-bold my-1">{title}</h4>
        <p className='my-1'><strong>Release Year:</strong> {year}</p>
        </div>
    )
}