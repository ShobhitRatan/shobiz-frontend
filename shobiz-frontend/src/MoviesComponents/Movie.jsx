import React, {Component} from "react" 
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck' 
class Movie extends Component { 
    state = {
        showImg: false  
    }

    handleClick = (e) => {
        const val = this.state.showImg 
        this.setState({
            showImg: !val 
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
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>
            
        )
    }
}

export default Movie; 