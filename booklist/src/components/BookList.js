import React from "react";
import "./BookList.css";

function BookList(props) {
  const mappedBooks = props.books.map((e, i) => (
    <div key={i} className="book-container" onClick={() => props.addShelfFn()}>
      <img index={i} src={e.img} alt={e.title} />
      <p>{e.title}</p>
      <p>{e.author}</p>
    </div>
  ));
  return <div className="BookList">{mappedBooks}</div>;
}

export default BookList;
