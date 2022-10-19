import {useState, useContext} from "react"
import { MovieStore } from "../store/MovieStore";

export default function SearchMovies() {
    const [keyID, setKeyID] = useState('')
    const { setMovies, setError } = useContext(MovieStore);


    const handleSubmit = async (e, key) => {
        e.preventDefault();
        const resp = await fetch(`https://www.omdbapi.com/?s=${key}&apikey=${process.env.REACT_APP_API_KEY}`)
        const data = await resp.json()
        setMovies(data)
        setError(data.Error)
        setKeyID('')
    }

    return (
        <div className="bg-slate-100 m-6 px-3 py-6 shadow-2xl rounded">
        <h3 className="text-xl font-bold mb-2">Seach Movie Title</h3>
        <form
        onSubmit={(e) => handleSubmit(e, keyID)}>
        <input 
        className="border-slate-300 border-2 rounded p-1 w-full"
        placeholder="Movie Title" 
        value={keyID}
        onChange={(e) => setKeyID(e.target.value)}>
        </input>
        <button type="submit" className="font-semibold border-slate-300 border-2 rounded px-2 p-1 my-2 hover:bg-gray-300">Search</button>
        </form>
        </div>
    )
}
