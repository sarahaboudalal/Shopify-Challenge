import {useState, useContext} from "react"
import { MovieStore } from "../store/MovieStore";

export default function SearchMovies() {
    const [keyID, setKeyID] = useState('')
    const { setMovies, setError } = useContext(MovieStore);


    const handleSubmit = async (e, key) => {
        e.preventDefault();
        const resp = await fetch(`http://www.omdbapi.com/?s=${key}&apikey=${process.env.REACT_APP_API_KEY}`)
        const data = await resp.json()
        setMovies(data)
        setError(data.Error)
        setKeyID('')
    }

    return (
        <div>
        <h3 >Seach Movie Title</h3>
        <form 
        onSubmit={(e) => handleSubmit(e, keyID)}>
        <input 
        placeholder="Movie Title" 
        value={keyID}
        onChange={(e) => setKeyID(e.target.value)}>
        </input>
        <button type="submit">Search</button>
        </form>
        </div>
    )
}
