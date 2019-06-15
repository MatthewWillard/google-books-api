import React from 'react';
import SearchBar from './searchBar';
import Filters from './filters';

export default function Form(props) {
    return(
        <form onSubmit={props.onSubmitForm} className="form">
            <SearchBar />
            <Filters />
        </form>
    )
}