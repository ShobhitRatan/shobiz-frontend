import React, {Component} from 'react';
import Movie from './Movie'
import axios from 'axios' 
import ReactPaginate from 'react-paginate' 
const moviesUrl = "http://localhost:4000/movies" 

class MoviesContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            offset: 0,
            movies: [],
            perPage: 20,
            currentPage: 0 
        }
        this.handlePageClick = this.handlePageClick.bind(this); 
    }

    componentDidMount() {
        // this.fetchMovies() 
        this.recievedData() 
    }
    recievedData = () => {
        axios .get(moviesUrl)
        .then(res => {
            const data = res.data; 
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(movie => <><ul><Movie key={movie.id} movie={movie} /></ul></>)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                postData
            })
        })
    }
    // fetchMovies = () => {
    //     fetch(moviesUrl) 
    //         .then(res => res.json()) 
    //         .then(movie => this.setState({
    //             movies: movie 
    //         }))
    // } 

    handlePageClick = (e) => {
        const selectedPage = e.selected; 
        const offset = selectedPage * this.state.perPage; 
        this.setState({
            currentPage: selectedPage, 
            offset: offset
        }, () => {
            this.recievedData() 
        })
    }

    render() {
        return (
            <div>
                <h1>Movies Page</h1>
                {this.state.postData} 
                <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"} 
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}

export default MoviesContainer