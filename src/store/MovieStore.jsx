import { createContext, useState } from 'react';

const MovieStore = createContext();

const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState();
    const [error, setError] = useState();
    const [nomMovies, setNomMovies] = useState([]);
    return(
        <MovieStore.Provider 
        value={
            { movies, setMovies, error, setError, nomMovies, setNomMovies}
        }>
        {children}
        </MovieStore.Provider>
    )
};

export {MovieProvider, MovieStore}