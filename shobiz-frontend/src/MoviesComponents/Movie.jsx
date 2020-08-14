import React, {Component} from "react" 

class Movie extends Component { 
    render() {
        return (
            <div> 
                <li>
                    <h1>{this.props.movie.title} - {this.props.movie.language}</h1> 
                    <p>{this.props.movie.overview}</p> 
                    <p>{this.props.movie.release_date}</p>
                </li>
            </div>
            
        )
    }
}

export default Movie; 