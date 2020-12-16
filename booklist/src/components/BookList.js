import React from "react";

export default function BookList(props) {
  let mappedBooks = props.books.map((e, i) => {
    return (
      <div key={i}>
        <img src={e.img} alt={e.title} onClick={() => props.add} />
        <p>{e.title}</p>
        <p>{e.author}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>list</h1>
      {mappedBooks}
    </div>
  );
}
