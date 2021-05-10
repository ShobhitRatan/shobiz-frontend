import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 


class ReviewForm extends React.Component { 
    state = {
        content: "",
        user: {
            id: 0,
            username: ""
        },
        movie: {
            id: 0,
            title: ""
        },
        likes: 0,
    }
    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.addReview({
            user_id: this.props.userId, 
            movie_id: this.props.movieId,
            content: e.target.content.value,
            likes: e.target.likes.value 
        })
        this.setState({
            content: "",
            likes: 0
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() {
        const {content, likes} = this.state 
        return (
            <Form   onSubmit={(e) => this.handleSubmit(e)}> 
                <Form.Group controlId="formGroupContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the content for your review" rows={10} value={content} name="content" /> 
                </Form.Group>
                <Form.Group controlId="formGroupLikes">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control onChange={this.handleChange} type="number" value={likes} name="likes" /> 
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default ReviewForm; 