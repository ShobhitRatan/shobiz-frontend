import React, {Component} from 'react'
import Review from '../ReviewsComponents/Review'
class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.user.username}&apos;s Profile</h2>
                {this.props.user.reviews.map(review => <Review key={review.id} review={review} increaseLikes={this.increaseLikes} deleteReview={this.deleteReview}/> )} 
            </div>
        )
    }
}

export default ProfileContainer