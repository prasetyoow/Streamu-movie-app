import React from "react";
import "./Navbar.css"
import {RiMovie2Line} from "react-icons/ri"
import {FiPlus, FiSearch} from "react-icons/fi"

export default function Navbar() {
  return (
    <nav>
      <div className="navigationBar">
        <a href="/" className="nav-logo">
          <h2>Streamu</h2>
          <RiMovie2Line size={40} className="nav-icon"/>
        </a>

        <div className="nav-list-container">
          <ul>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">TV Shows</a>
            </li>
            <li>
              <a href="/">People</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/">
                <FiPlus size={20}/>
              </a>
            </li>

            <li>
              <a href="/">
                <div className="box-visible">EN</div>
              </a>
            </li>

            <li>
              <a href="/">Login</a>
            </li>

            <li>
              <a href="/">Join TMDb</a>
            </li>

            <li>
              <a href="/">
                <FiSearch size={20} color="#64b5f6"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
