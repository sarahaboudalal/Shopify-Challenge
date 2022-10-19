import React, {useContext} from "react";
import { MovieStore } from "../store/MovieStore";
import {Link} from 'react-router-dom'
import WinnerMovie from "../component/WinnerMovie";

export default function WinnerMoviePage(){

    const {nomMovies} = useContext(MovieStore)
    const randomNumber = Math.floor(Math.random() * 5)
    const winnerMovie = nomMovies[randomNumber]

    return (
        <div className="bg-gray-300 h-fit flex flex-col justify-center">
        <h1 className="text-3xl font-bold p-6">Winner Movie</h1>
        <WinnerMovie
        key={winnerMovie.id} img={winnerMovie.img} title={winnerMovie.title} year={winnerMovie.year}   />
        <Link to='/'>
        <button className="bg-slate-100 font-semibold border-slate-300 border-2 rounded px-2 p-1 my-2 m-6 hover:bg-gray-300">Try Again</button>
        </Link>
        </div>
        )
    }