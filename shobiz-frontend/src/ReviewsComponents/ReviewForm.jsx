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
            // <div className="container">
            //     <form onSubmit={(e) => this.handleSubmit(e)} className="add-review-form">
            //     <label>Username</label>
            //     <input onChange={(e) => this.handleChange(e)} type="text" className="input-text" placeholder="Enter your username please: " value={username} name="username" />
            //     <label>Title</label>
            //     <input onChange={(e) => this.handleChange(e)} type="text" className="input-text" placeholder="Please enter the title of the film you want to review: " value={title} name="title" /> 
            //     <label>Content</label>
            //     <textarea onChange={(e) => this.handleChange(e)} className="input-text" placeholder="Please enter the content for your review" rows={10} value={content} name="content" /> 
            //     <label>Likes</label>
            //     <input onChange={(e) => this.handleChange(e)} type="number" value={likes} name="likes" /> 
            //     <Button variant="primary" type="submit">Submit</Button>
            // </form>
            // </div>
            <Form   onSubmit={(e) => this.handleSubmit(e)}> 
                {/* <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control  onChange={this.handleChange} type="text" placeholder="Enter your username please: " value={username} name="username" />
                </Form.Group> 
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the title of the film you want to review: " value={title} name="title" /> 
                </Form.Group> */}
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