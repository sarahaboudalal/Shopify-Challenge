import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import NominatedMovie from './NominatedMovie'
import { MovieStore } from "../store/MovieStore";

export default function NominatedList(){

    const { nomMovies, setNomMovies } = useContext(MovieStore)

    function handleReset(){
        setNomMovies([])
    }
    return (
        <div className='bg-slate-100 m-6 p-2 shadow-2xl rounded basis-1/2'>
        <h1 className="text-xl font-bold py-3 mx-3">Nominated Movies:</h1>
        {nomMovies && 
            nomMovies.map((movie) => {
            return(
            <NominatedMovie key={movie.id} img={movie.img} title={movie.title} year={movie.year}/>
        )})}

        {nomMovies.length === 5 &&
            <div>
            <Link to='/winner-page'><button className="font-semibold border-slate-300 border-2 rounded px-2 p-1 my-6 mx-3 hover:bg-gray-300">Choose Winner!</button></Link>
            <button onClick={handleReset} className="font-semibold border-slate-300 border-2 rounded px-2 p-1 my-6 mx-3 hover:bg-gray-300">Reset</button>
            </div>
        }    
       </div>    
    )
}