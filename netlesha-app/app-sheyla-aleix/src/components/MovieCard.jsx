import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard(props) {

    const{title, year, genre, director, rating} = props.eachMovie
  return (
    <div className='movie'>
        <Link to={"/movies"} style={{color:"white"}}> <h3>{title}</h3></Link>
        <h5>Release year:</h5>
        <p>{year}</p>
        <h5>Genre:</h5>
        <p>{genre}</p>
        <h5>Director:</h5>
        <p>{director}</p>
        <h5>Rating:</h5>
        <p>{rating}⭐</p>
        
    </div>
  )
}

export default MovieCard