import React ,{useContext} from 'react'
import { MovieStore } from "../store/MovieStore";

export default function SingleMovie({ img, title, year, id, nominate}){

    const { nomMovies } = useContext(MovieStore)

    const nominateLimits = nomMovies.length === 5 ? true : false;

    return(
        <div key={id}>
        <img src={img} alt="movie poster"/>
        <div>
        <h4>{title}</h4>
        <p>Release Year: {year}</p>
        </div>
        <button onClick={nominate} disabled={nominateLimits}>Nominate</button>
        </div>
    )
}