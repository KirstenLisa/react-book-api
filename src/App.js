import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

//const apiKey = 'AIzaSyBEav5lwfjcMJ0VCOHk7GHksa-3H3rNIrE';
//const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=pride and prejudice&filter=ebooks&printType=all&key=AIzaSyBEav5lwfjcMJ0VCOHk7GHksa-3H3rNIrE';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterPrintType: 'all',
      filterBookType: 'no filter',
      bookList: [],
      error: null
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateBookOption(option) {
    this.setState({
      filterBookType: option
    })
  }

  updatePrintOption(option) {
    this.setState({
      filterPrintType: option
    })
  }
  

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit works');
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const apiKey = 'AIzaSyBEav5lwfjcMJ0VCOHk7GHksa-3H3rNIrE';
    let searchParams = '';


    if(this.state.filterBookType==='no filter') {
      searchParams = this.state.searchTerm + '&printType=' + this.state.filterPrintType + '&key=' + apiKey;
    } else {
      searchParams = this.state.searchTerm + '&filter=' + this.state.filterBookType + '&printType=' + this.state.filterPrintType + '&key=' + apiKey;
    }
    console.log(searchParams)
    const searchUrl = baseUrl + searchParams;
    console.log(searchUrl);

    fetch(searchUrl)
      .then(response => {
      //check if response is ok
        console.log('About to check for errors');
        if(!response.ok) {
        console.log('An error did occur, let\'s throw an error.');
        throw new Error('Something went wrong'); //throw an error
        }
        return response; //ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          bookList: data.items,
          error: null
        })
        const title = 
              data.items[0].volumeInfo.title;
            console.log(title); 
        const author = data.items[0].volumeInfo.authors;
            console.log(author);
        const picture = data.items[0].volumeInfo.imageLinks.thumbnail;
            console.log(picture); 
    })
    .catch(err => {
      //this catch handles the error condition
      console.log('Handling the error here.', err);
    });


  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterPrint={this.state.filterPrintType}
          filterBook={this.state.filterBookType}
          handleSubmit={(e) => this.handleSubmit(e)}
          handleUpdate={term=>this.updateSearchTerm(term)} 
          handleBookChange={option => this.updateBookOption(option)}
          handlePrintChange={option => this.updatePrintOption(option)} />
        <FilterableList 
          bookList={this.state.bookList}
           />
        </main>
      </div>
    );
  }
}

export default App;