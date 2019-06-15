import React, { Component } from 'react';
import Book from './book';

class ResultsList extends Component {
    render() {        
        let bookResults = this.props.books.items.map((book, i) => 
            <Book {...book} key={i} />
        )

    

        return(
            <div className="list">
                { bookResults }
            </div>
        )
           
    }
}

export default ResultsList;