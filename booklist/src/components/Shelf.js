import React from "react";
import "./Shelf.css";

function Shelf(props) {
  let mappedTitles = props.shelf.map((e, i) => {
    return <p key={i}>{e}</p>;
  });

  return (
    <div className="Shelf">
      <h1>My Book Shelf</h1>
      <div>
        <button onClick={() => props.clearFn()}>Clear Shelf</button>
      </div>
      {mappedTitles}
    </div>
  );
}

export default Shelf;
