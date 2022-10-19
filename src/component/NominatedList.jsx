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
        <div className='nom-movie-container'>
        <h1>Nominated Movies:</h1>
        {nomMovies && 
            nomMovies.map((movie) => {
            return(
            <NominatedMovie key={movie.id} img={movie.img} title={movie.title} year={movie.year}/>
        )})}

        {nomMovies.length === 5 &&
            <div>
            <Link to='/winner-page'><button>Choose Winner!</button></Link>
            <button onClick={handleReset}>Reset</button>
            </div>
        }    
       </div>    
    )
}