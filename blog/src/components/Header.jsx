import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Articles from "./Articles";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                My Blog
              </a>
            </div>
            <div>
              <div className="search-btn">Search</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Nvvr</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              {categories.map((item) => (
                <li key={item.id === Articles.id}>
                  <a href="/articles/">{item.name}</a>
                </li>
              ))}
              <li>
                <Link to="/ChatScreen"> Chat</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
