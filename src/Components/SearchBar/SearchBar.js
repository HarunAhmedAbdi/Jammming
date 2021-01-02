import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
  handleTermChange(e) {
    let searchquery = e.target.value;
    this.setState({searchTerm : searchquery});
  }
  search(searchTerm) {
    this.props.onSearch(searchTerm);
  }

}

export default SearchBar;
