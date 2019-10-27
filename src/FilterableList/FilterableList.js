import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  render() {
    const list = this.props.bookList.map((book, key) => <ListItem {...book} key={key}/>)
   
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}



export default FilterableList;