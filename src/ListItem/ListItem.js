import React, { Component } from 'react';
import './ListItem.css';


class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  setShowInfo(show) {
    this.setState({
      showInfo: show
    });
  }


  render() {

    const description = this.state.showInfo ? 
                        <div className="ListItem__description">{this.props.volumeInfo.description}</div>
                        : <button className="infoButton" onClick={show => this.setShowInfo(show)}>More</button>;
    return (
      <div className="ListItem">
          <div className="BookCover"> <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="Book Cover" /></div> 
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.volumeInfo.title}</div>
            <div className="ListItem__author">Author: {this.props.volumeInfo.authors}</div>
            <div className="ListItem__Price">Price: {this.props.saleInfo.saleability === "FOR_SALE" ? this.props.saleInfo.listPrice.amount : 'not for sale'}</div>
          </div>
          <div className="ListItem__addinfo">
            { description }
           
          </div>
            
      </div>
    );
  }
}

export default ListItem;