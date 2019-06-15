import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return(
            <div className="filter_bar">
                <div className="print-type">
                    <label htmlFor="print-type">Print Type:  </label>
                    <select
                        id="print-type"
                        name="print-type"
                    >
                        <option value='all'>All</option>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='ebooks'>Ebook</option>
                        <option value='paid-ebooks'>Paid Ebook</option>
                        <option value='free-ebooks'>Free Ebook</option>
                    </select>
                </div>
                <div className="book-type">
                    <label htmlFor="book-type">Book Type:  </label>
                    <select 
                        id="book-type"
                        name="book-type"
                    >
                        <option value='all'>No Filter</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                </div>
        </div>
        )
    }
}

export default Filters;