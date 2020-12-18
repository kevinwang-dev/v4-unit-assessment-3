import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div>
        Searchbar
        <input type="text" onChange={(e) => this.handleChange(e)} />
        <button>Search</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default SearchBar;
