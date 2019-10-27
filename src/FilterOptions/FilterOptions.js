import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
      return (
        <div className="FilterOptions">
          <form className="FilterOptions__print">
            <label htmlFor="filter_print">
              Print Type
              </label>
              <select  
                id="print_type" 
                name="filter" 
                onChange={e => this.props.handlePrintChange(e.target.value)}>
                <option key={1} value="all">all</option>
                <option key={2} value="books">books</option>
                <option key={3} value="magazines">magazines</option>
              </select>
      
          </form>
          <form className="FilterOptions__book">
            <label htmlFor="filter_options_book">
              Book Type
            </label>
              <select 
                id="book_type" 
                name="filter" 
                onChange={e => this.props.handleBookChange(e.target.value)}>
                <option key={1} value="partial">partial</option>
                <option key={2} value="full">full</option>
                <option key={3} value="free-ebooks">free-ebooks</option>
                <option key={4} value="paid-ebooks">paid-ebooks</option>
                <option key={5} value="ebooks">ebooks</option>
                <option key={6} value="no filter">no filter</option>
            </select>
          </form>
          
          </div>
      );
    }
  }

export default FilterOptions;