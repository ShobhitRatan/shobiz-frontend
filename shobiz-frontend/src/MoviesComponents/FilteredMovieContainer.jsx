import React from "react" 
import Movie from "./Movie" 

const FilteredMovieContainer = (props) => {
    return (
        <ul>
            {props.movies.map(movie => <Movie key={movie.id} movie={movie} />)} 
        </ul>
    )
}

export default FilteredMovieContainer; 