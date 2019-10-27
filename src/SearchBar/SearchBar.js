import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__controls">
            <SearchBox
                searchTerm={ this.props.searchTerm }
                handleUpdate={this.props.handleUpdate}
                handleSubmit={this.props.handleSubmit} />
            <FilterOptions 
                filterPrint={this.props.filterPrintType}
                filterBook={this.props.filterBookType}
                handleBookChange={ this.props.handleBookChange }
                handlePrintChange={ this.props.handlePrintChange } />
        </div>
      </div>
    );
  }
}

export default SearchBar;