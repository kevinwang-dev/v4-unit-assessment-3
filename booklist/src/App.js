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
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
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

  clearShelf() {
    this.setState({
      shelf: [],
    });
  }

  filterBooks(input) {
    let filteredBook = this.state.books.filter((e, i) => {
      return e.title.includes(input) || e.author.includes(input);
    });
    this.setState({
      books: filteredBook,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filter={this.filterBooks} />
        <div className="container">
          <BookList books={this.state.books} addShelfFn={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clearFn={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
