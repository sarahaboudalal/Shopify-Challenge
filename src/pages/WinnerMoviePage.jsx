import React, {useContext} from "react";
import { MovieStore } from "../store/MovieStore";
import {Link} from 'react-router-dom'
import WinnerMovie from "../component/WinnerMovie";

export default function WinnerMoviePage(){

    const {nomMovies} = useContext(MovieStore)
    const randomNumber = Math.floor(Math.random() * 5)
    const winnerMovie = nomMovies[randomNumber]

    return (
        <div>
        <h1>Winner Movie</h1>
        <WinnerMovie
        key={winnerMovie.id} img={winnerMovie.img} title={winnerMovie.title} year={winnerMovie.year}   />
        <Link to='/'>
        <button>Try Again</button>
        </Link>
        </div>
        )
    }