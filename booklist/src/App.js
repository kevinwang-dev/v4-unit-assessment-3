import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Shelf from "./components/Shelf";
import SearchBar from "./components/SearchBar";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [...data],
      shelf: [],
    };

    this.addToShelf = this.addToShelf.bind(this);
  }

  addToShelf() {
    let bookName = this.state.books;
    let bookTitles = [];
    for (let i = 0; i < bookName.length; i++) {
      bookTitles.push(bookName[i].title);
    }

    this.setState({
      shelf: bookTitles,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div className="container">
          <BookList books={this.state.books} addShelfFn={this.addShelf} />
          <Shelf shelf={this.state.shelf} />
        </div>
      </div>
    );
  }
}

export default App;
