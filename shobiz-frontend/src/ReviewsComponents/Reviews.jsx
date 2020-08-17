import React, {Component} from 'react'
import axios from 'axios'
import ReviewsContainer from './ReviewsContainer'
import ReviewForm from './ReviewForm' 
const reviews_url = "http://localhost:4000/reviews"
class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        this.receivedData() 
    }

    receivedData = () => {
        axios.get(reviews_url)
        .then(res => {
            const data = res.data; 
            this.setState({
                reviews: data
            })
        })
    }

    addReview = (review) => {
        fetch(reviews_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                Accept: "application/json" 
            },
            body: JSON.stringify(review) 
        })
        .then(res => res.json()) 
        .then(json => {
            const newReviews = [...this.state.reviews, json] 
            this.setState({
                reviews: newReviews
            })
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
        .then(res => {
            const newReviews = this.state.reviews.map(checkReview => {
                const newReview = {...checkReview} 
                if (checkReview === review) {
                    newReview.likes += 1 
                }
                return newReview 
            })
            this.setState({
                reviews: newReviews 
            })
        })
    }

    deleteReview = (id) => {
        fetch(`${reviews_url}/${id}`, {
            method: "DELETE" 
        })
        .then(res => {
            const newReviews = this.state.reviews.filter(review => review.id !== id) 
            this.setState({
                reviews: newReviews 
            })
        })
    }


    render() {
        return (
            <div>
                <ReviewsContainer increaseLikes={this.increaseLikes} deleteReview={this.deleteReview} reviews={this.state.reviews} />
                <ReviewForm addReview={this.addReview} test="test"/> 
            </div> 
        )
        
    }
} 

export default Reviews