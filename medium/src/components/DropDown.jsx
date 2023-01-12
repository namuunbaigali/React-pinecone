import React, { useState } from "react";
import Star from "../images/Star";

export default function DropDown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className="dropdown text-end">
        <a
          onClick={toggleDropdown}
          href=""
          className="d-block  text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img src="" alt="" className="rounded-circle" />
        </a>

        <div>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item d-flex justify-content-center " href="#">
                Get started on Medium
              </a>
            </li>
            <li className="dropDown-button">
              <button className="button rounded-3"> Sign up</button>
            </li>
            <li className="dropDown-button">
              <button className="rounded-3 "> Sign in</button>
            </li>
            <hr />
            <ul className=" px-5 ">
              <li className="list-group-item text-danger d-flex justify-content-between ">
                Become a member
                <Star />
              </li>
              <li className="list-group-item ">Become a member</li>
              <li className="list-group-item">Become a member</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
