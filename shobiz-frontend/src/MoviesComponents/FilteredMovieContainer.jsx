import React from "react" 
import Movie from "./Movie" 

const FilteredMovieContainer = (props) => {
    return (
        <ul>
            {props.movies.map(movie => <Movie increaseLikes={props.increaseLikes} deleteReview={props.deleteReview} addReview={props.addReview} key={movie.id} movie={movie} />)} 
        </ul>
    )
}

export default FilteredMovieContainer; 