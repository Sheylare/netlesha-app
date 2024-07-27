import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieCard from '../components/MovieCard';

function MoviesList() {
    const [movies, setMovies] = useState(null)

    useEffect(() =>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/movies`)
        .then((response)=>{
            console.log(response.data);
            setMovies(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })

    }, [])

    if (movies === null) {
        return <h2>... Buscando</h2>;
      }
    

  return (
    
    <div>
        <h1>MoviesList</h1>

        {movies.map((eachMovie) => {
            return <MovieCard eachMovie={eachMovie}  key={eachMovie.title}/>
        })}
    </div>
      
  )
}

export default MoviesList