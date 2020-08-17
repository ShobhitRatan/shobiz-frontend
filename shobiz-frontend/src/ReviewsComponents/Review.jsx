import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button' 
class Review extends Component {
    state = {
        display: false 
    }
    handleLike = (e) => {
        this.props.increaseLikes(this.props.review) 
    }

    
    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.review.user.username}</Card.Title>
                        <Card.Text>{this.props.review.movie.title}</Card.Text>
                        <Card.Text>{this.props.review.content}</Card.Text>
                        <Card.Text><Button onClick={(e) => this.handleLike(e)}>Like{'♥'}</Button>{this.props.review.likes}</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Review; 