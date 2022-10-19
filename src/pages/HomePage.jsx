import React from "react";
import SearchMovies from "../component/SearchMovies";
import SearchResults from "../component/SearchResults";
import NominatedList from "../component/NominatedList";

export default function HomePage(){

    return(
        <div>
        <h1>The Shoppies</h1>
        <SearchMovies />
        <SearchResults />
        <NominatedList />
        </div>
    )
}
