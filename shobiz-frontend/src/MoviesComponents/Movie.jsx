import React, {Component} from "react" 
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck' 
import Review from '../ReviewsComponents/Review'
import ReviewForm from '../ReviewsComponents/ReviewForm'
import Button from 'react-bootstrap/Button' 
class Movie extends Component { 
    state = {
        showImg: false, 
        display: false  
    }

    handleClick = (e) => {
        const val = this.state.showImg 
        this.setState({
            showImg: !val 
        })
    }

    handleDisplay = () => {
        const val = !this.state.display 
        this.setState({
            display: val 
        })
    }
    render() {
        return (
            <div> 
                
                    {/* <h1>{this.props.movie.title} - {this.props.movie.language}</h1> 
                    <p>{this.props.movie.overview}</p> 
                    <p>{this.props.movie.release_date}</p>
                    <img onClick={(e) => this.handleClick(e)} src={this.state.showImg ? this.props.movie.image_1 : this.props.movie.image_2} alt={this.props.movie.title} /> */}
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" onClick={(e) => this.handleClick(e)} src={this.state.showImg ? this.props.movie.image_1 : this.props.movie.image_2} alt={this.props.movie.title} />
                            <Card.Body>
                                <Card.Title>{this.props.movie.title} - {this.props.movie.language}</Card.Title>
                                <Card.Text>{this.props.movie.overview}</Card.Text>
                                <Card.Text>{this.props.movie.release_date}</Card.Text>
                                <Card.Title>Reviews</Card.Title>
                                {this.props.movie.reviews.map(review => <Review key={review.id} review={review} increaseLikes={this.increaseLikes} deleteReview={this.deleteReview} />)}
                                {this.state.display ? <ReviewForm addReview={this.props.addReview()}/> : null}
                                <Button onClick={this.handleDisplay}>Add a Review</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>
            
        )
    }
}

export default Movie; 