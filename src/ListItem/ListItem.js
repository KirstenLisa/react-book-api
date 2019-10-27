import React, { Component } from 'react';
import './ListItem.css';


class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddInfo: false
    };
  }

  render() {

    

    return (
      <div className="ListItem">
          <div className="BookCover"> <img src={'this.props.volumeInfo.imageLinks.thumbnail'} alt="Book Cover" /></div> 
            <div className="ListItem__heading">
              <div className="ListItem__title">{this.props.volumeInfo.title}</div>
              <div className="ListItem__author">{this.props.volumeInfo.authors}</div>
          </div>
          <div className="ListItem__addinfo">
            <div className="ListItem__description">{this.props.volumeInfo.description}</div>
           
          </div>
            
      </div>
    );
  }
}

export default ListItem;