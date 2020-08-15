import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <input onChange={e => this.props.handleChange(e)} className="searchTerm" type='text' name='search' value={this.props.searchTerm} /> 
            </div>
        ); 
    }
}

export default SearchBar