import React from "react";

export default function WinnerMovie({img, title, year}) {
    return(
        <div className="bg-slate-100 m-6 px-3 py-6 shadow-2xl rounded w-fit text-center">
        <img className="my-1 rounded shadow-2xl" src={img} alt="movie poster"/>
        <h4 className="text-xl font-bold my-1">{title}</h4>
        <p><strong>Release Year:</strong> {year}</p>
        </div>
    )
}