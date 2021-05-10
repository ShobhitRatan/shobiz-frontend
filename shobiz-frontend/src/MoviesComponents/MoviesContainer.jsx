import React, {Component} from 'react';
import axios from 'axios' 
import ReactPaginate from 'react-paginate' 
import SearchBar from './SearchBar';
import FilteredMovieContainer from './FilteredMovieContainer';
import Filter from './Filter'

// import Pagination from 'react-bootstrap-4-pagination'
const reviews_url = "https://shobiz-backend.herokuapp.com/reviews"

const moviesUrl = "https://shobiz-backend.herokuapp.com/movies" 
class MoviesContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            offset: 0,
            movies: [],
            perPage: 20,
            currentPage: 0,
            searchTerm: "",
            language: "All",
            display: false,
            reviews: []
        }
        this.handlePageClick = this.handlePageClick.bind(this); 
    }
    handleDisplay = () => {
        const val = !this.state.display 
        this.setState({
            display: val 
        })
    }

    addReview = (review) => {
        review.user_id = this.props.userId
        fetch(reviews_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                Accept: "application/json" 
            },
            body: JSON.stringify(review) 
        })
        .then(res => res.json()) 
        .then(data => {
            const newMovies = [...this.state.movies]
            newMovies.find(movie => movie.id === review.movie_id).reviews.push(data)
            this.setState({movies: newMovies})
        })
    }

    increaseLikes = (review) => {
        fetch(`${reviews_url}/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json" 
            },
            body: JSON.stringify({
                likes: review.likes + 1 
            })
        })
        .then(res => res.json())
        .then(res => {
            const newMovies = [...this.state.movies] 
            const movieFound = newMovies.find(movie => movie.id === review.movie.id)
            const foundReview = movieFound.reviews.find(review => review.id === res.id)
            foundReview.likes = res.likes  
            this.setState({
                movies: newMovies 
            })
        })
    }

    deleteReview = (id) => {
        fetch(`${reviews_url}/${id}`, {
            method: "DELETE" 
        })
        .then(res => res.json()) 
        .then(this.removeDeletedReview)
    }

    removeDeletedReview = ({id, movie}) => {
        const newMovies = [...this.state.movies]
        const foundMovie = newMovies.find(m=> m.id === movie.id)
        const reviewIndex = foundMovie.reviews.findIndex((review)=> review.id === id )
        foundMovie.reviews.splice(reviewIndex, 1)
        this.setState({
            movies: newMovies
        })
    }

    componentDidMount() {
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

    languageFilter = () => {
        let {movies, language } = this.state
        return language === "All" ? movies : movies.filter(movie => movie.language === language) 
    }
    
    filteredMovies = () => {
        let { searchTerm } = this.state
        return this.languageFilter().filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))   
    } 

    pageCount = () => {
        let pageCount =  Math.ceil(this.filteredMovies().length / this.state.perPage)
        return pageCount ? pageCount : undefined  
    } 
    
    slicedMovies = () => this.filteredMovies().slice(this.state.offset, this.state.offset + this.state.perPage)

    
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
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            
            <div>
                <h1>Movies Page</h1>
                <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.pageCount()}
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
                <FilteredMovieContainer addReview={this.addReview} increaseLikes={this.increaseLikes} deleteReview={this.deleteReview} movies={this.slicedMovies()} /> 
                <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.pageCount()}
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