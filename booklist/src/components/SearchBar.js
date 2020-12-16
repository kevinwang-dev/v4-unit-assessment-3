import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  //   handle change function
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  //handle click function
  handleClick() {}

  render() {
    return (
      <div className="SearchBar">
        <input type="text" />
        <button>Search</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default SearchBar;
