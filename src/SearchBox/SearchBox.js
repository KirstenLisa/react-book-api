import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {
  render() {
    return (
        <form className="SearchBox"
        onSubmit={(e) => this.props.handleSubmit(e)}>
          <p>Search:</p>
          <input
            type="text"
            placeholder="Search term"
            value={this.props.searchTerm}
            onChange={e => this.props.handleUpdate(e.target.value)}
            />
          <button
            type="submit"
            value="submit"
            >Search</button>
      </form>   
    );
  }
}

export default SearchBox;