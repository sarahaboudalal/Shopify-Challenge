import React, {useContext} from "react"
import { MovieStore } from "../store/MovieStore";
import SingleMovie from "../component/SingleMovie"

export default function SearchResults(){


    const { movies, error, setNomMovies } = useContext(MovieStore)

    const nominate = (e, mov) =>{
        const nomMovie ={
            id: mov.imdbID,
            img: mov.Poster,
            title: mov.Title,
            year: mov.Year
        };
        setNomMovies(nom => [...nom, nomMovie])
        e.target.disabled = true;
    }

    return(
        <div className="movies-container">
        <h1>Results:</h1>
        {movies && movies.Search ? movies.Search.slice(0, 5).map((movie) => {
           return <SingleMovie key={movie.imdbID} img={movie.Poster} title={movie.Title} year={movie.Year} nominate={(e) => nominate(e, movie)}/> 
        })
        : <p>{error}</p>}
        </div>
    )
}