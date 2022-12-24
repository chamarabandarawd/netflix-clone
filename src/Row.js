import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovie] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    console.log(movies)

    return (
        <div className='row'>
            <h1> {title}</h1>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name} />
                ))}

            </div>

        </div>
    )
}
