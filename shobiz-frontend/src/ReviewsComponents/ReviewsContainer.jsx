import React from 'react';
import Review from './Review'

const ReviewsContainer = (props) => {
    return (
        <>
            {props.reviews.map(review => <Review review={review} key={review.id} increaseLikes={props.increaseLikes} deleteReview={props.deleteReview} />)} 
        </>
    )
}

export default ReviewsContainer