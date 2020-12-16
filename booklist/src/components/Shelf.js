import React from "react";

export default function Shelf(props) {
  let mappedTitles = props.shelf.map((e, i) => {
    return (
      <div key={i}>
        <p>Title : {e.title}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>shelf</h1>
      {mappedTitles}
      <button onClick={() => props.clear}>Clear Shelf</button>
    </div>
  );
}
