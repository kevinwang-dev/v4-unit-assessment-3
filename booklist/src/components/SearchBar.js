import React, { Component } from "react";
import "./SearchBar.css";
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

  handleClick() {
    this.props.filter(this.state.userInput);
  }

  handleClear() {
    this.setState({
      userInput: "",
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-input">
          <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            placeholder="enter book title"
            value={this.state.userInput}
          />
          <button onClick={() => this.handleClick()}>Search</button>
          <button>Clear</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
