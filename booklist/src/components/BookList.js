import React from "react";
import "./BookList.css";

function BookList(props) {
  const mappedBooks = props.books.map((e, i) => (
    <div key={i}>
      <img
        index={i}
        src={e.img}
        alt={e.title}
        onClick={() => props.addShelfFn}
      />
      <p>{e.title}</p>
      <p>{e.author}</p>
    </div>
  ));
  return <div className="BookList">{mappedBooks}</div>;
}

export default BookList;
