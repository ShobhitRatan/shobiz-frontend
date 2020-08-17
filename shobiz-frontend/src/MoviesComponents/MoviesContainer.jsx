import React, {Component} from 'react';
import axios from 'axios' 
import ReactPaginate from 'react-paginate' 
import SearchBar from './SearchBar';
import FilteredMovieContainer from './FilteredMovieContainer';
import Filter from './Filter'
// import Pagination from 'react-bootstrap-4-pagination'

const moviesUrl = "http://localhost:4000/movies" 
class MoviesContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            offset: 0,
            movies: [],
            perPage: 20,
            currentPage: 0,
            searchTerm: "", 
            filter: "All",
        }
        this.handlePageClick = this.handlePageClick.bind(this); 
    }

    componentDidMount() {
        // this.fetchMovies() 
        this.recievedData() 
    }
    recievedData = () => {
        axios.get(moviesUrl)
        .then(res => {
            const data = res.data; 
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                movies: data   
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
    filteredMovies = () => {
        let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchTerm))
        const slice = filteredMovies.slice(this.state.offset, this.state.offset + this.state.perPage)
        if (this.state.filter === 'All') {
            return slice 
        }
        else if (this.state.filter !== 'All'){
            slice.filter((movie) => {
                return movie.language === this.state.filter 
            })
            return slice; 
        }
    } 
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

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    } 

    handleSelection = (e) => {
        this.setState({
            filter: e.target.value 
        })
        console.log(e.target.value) 
    }

    // filterMovies = () => {
    //     if (this.state.filter === 'All') {
    //         return this.state.movies; 
    //     }
    //     else {
    //         return this.state.movies.filter(movie => {
    //             if (movie.language === this.state.filter) return true; 
    //         })
    //     }
    // }

    render() {
        console.log(this.state.filter) 
        return (
            <div>
                <h1>Movies Page</h1>
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
                {/* <Pagination previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"} 
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis /> 
                
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis /> 
                    <Pagination.Item>{100}</Pagination.Item> 
                    <Pagination.Next/>
                    <Pagination.Last/> 
                </Pagination> */}
                <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleSearch} /> 
                <Filter handleSelection={this.handleSelection} />
                <FilteredMovieContainer movies={this.filteredMovies()} /> 
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