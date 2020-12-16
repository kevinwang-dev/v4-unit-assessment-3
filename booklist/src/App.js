import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Shelf from "./components/Shelf";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: [],
    };
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
  }

  addToShelf() {
    this.setState({
      shelf: [...this.state.shelf, this.state.books.title],
    });
  }

  clearShelf() {
    this.setState({
      shelf: [],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <BookList books={this.state.books} add={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clear={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
