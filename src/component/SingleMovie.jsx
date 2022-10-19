import React ,{useContext} from 'react'
import { MovieStore } from "../store/MovieStore";

export default function SingleMovie({ img, title, year, id, nominate}){

    const { nomMovies } = useContext(MovieStore)

    const nominateLimits = nomMovies.length === 5 ? true : false;

    return(
        <div key={id} className="my-6 mx-3">
        <img className="my-1 rounded shadow-2xl" src={img} alt="movie poster"/>
        <div>
        <h4 className="text-xl font-bold my-1">{title}</h4>
        <p className='my-1'><strong>Release Year:</strong> {year}</p>
        </div>
        <button className="font-semibold border-slate-300 border-2 rounded px-2 p-1 hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300" onClick={nominate} disabled={nominateLimits}>Nominate</button>
        </div>
    )
}