import React from "react";
import "./Shelf.css";

function Shelf(props) {
  console.log(props);
  let mappedTitles = props.shelf.map((e, i) => {
    <div key={i}>
      <p>{e}</p>
    </div>;
  });
  return (
    <div className="Shelf">
      <h1>shelf</h1>
      {mappedTitles}
    </div>
  );
}

export default Shelf;
