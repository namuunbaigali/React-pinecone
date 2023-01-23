import React from "react";
import { Link } from "react-router-dom";
export default function Card({ image, title }) {
  return (
    <>
      <Link to={"/card"}>
        <div className="card">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
          <div className="card-body"> {title}</div>
        </div>
      </Link>
    </>
  );
}
