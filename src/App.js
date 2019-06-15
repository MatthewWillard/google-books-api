import React, { Component } from 'react';
import './App.css';
import ResultsList from './component/resultsList';
import Header from './component/header';
import SearchForm from './component/searchForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: {
        items: [],
      },
    }
  }

  componentDidMount() {
    
    fetch('https://www.googleapis.com/books/v1/volumes?q=henry') 
      .then(response => {
        if(!response.ok) {
          throw new Error('something went wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  
  
  onSubmitForm = (e) => {
    e.preventDefault();

    let searchTerm = document.getElementById('searchbox').value;
    console.log(searchTerm);
    let printType = document.getElementById('print-type').value;
    console.log(printType);
    let bookType = document.getElementById('book-type').value;
    console.log(bookType);
    
    
    
    let url = printType === 'all' ? `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${bookType}` :
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${printType}&printType=${bookType}` 
    
    
    document.getElementById('searchbox').value = '';
  

    fetch(url) 
      .then(response => {
        if(!response.ok) {
          throw new Error('something went wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }



  render() {
    

    return (
      <div className="App">
        <Header />
        <SearchForm onSubmitForm={this.onSubmitForm} />
        <main>
        <ResultsList books={this.state.books}/>
        </main>
      </div>
    );
  }
}

export default App;