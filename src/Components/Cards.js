import React from "react";
import dummy from "./media/Dummy.jpg"

export default function Cards(props) {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={dummy} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`Card title ${props.name}`}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
