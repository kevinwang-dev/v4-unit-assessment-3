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
    this.reset = this.reset.bind(this);
  }

  addToShelf(index) {
    let bookName = this.state.books;
    let bookTitles = this.state.shelf;
    // for (let i = 0; i < bookName.length; i++) {
    bookTitles.push(bookName[index].title);
    // }

    this.setState({
      shelf: bookTitles,
    });
  }

  clearShelf() {
    this.setState({
      shelf: [],
    });
  }

  reset() {
    this.setState({
      books: data,
    });
  }

  filterBooks(input) {
    let books = this.state.books;
    let filteredBook = [];

    for (let i = 0; i < books.length; i++) {
      if (
        books[i].title.toLowerCase().includes(input.toLowerCase()) ||
        books[i].author.toLowerCase().includes(input.toLowerCase())
      ) {
        filteredBook.push(books[i]);
      }
    }

    this.setState({
      books: filteredBook,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filter={this.filterBooks} reset={this.reset} />
        <div className="container">
          <BookList books={this.state.books} addShelfFn={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clearFn={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
