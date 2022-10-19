import React from 'react';

export default function NominatedMovie( {img, title, year} ){

    return(
        <div>
        <img src={img} alt='movie poster'/>
        <h4>{title}</h4>
        <p>Release Year: {year}</p>
        </div>
    )
}