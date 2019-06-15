import React, { Component } from 'react';

class SearchBar extends Component {

    

    render() {
        return(
            <div className="search_bar">
             <label htmlFor="searchbox">Search: </label>
                <input
                    placeholder="Enter search term..."
                    name="searchbox"
                    id="searchbox" />
                <button 
                    type="submit">Search</button>
            </div>
        )
    }
}

export default SearchBar;