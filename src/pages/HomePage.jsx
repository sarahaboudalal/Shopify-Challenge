import React from "react";
import SearchMovies from "../component/SearchMovies";
import SearchResults from "../component/SearchResults";
import NominatedList from "../component/NominatedList";

export default function HomePage(){

    return(
        <div  className="bg-gray-300 h-fit">
        <h1 className="text-3xl font-bold p-6">The Shoppies</h1>
        <SearchMovies />
        <div className="flex flex-row">
        <SearchResults />
        <NominatedList />
        </div>
        </div>
    )
}
