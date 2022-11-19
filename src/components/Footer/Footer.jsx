import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <div className="join-community">
          <div className="footer-logo">
            <h2>Streamu</h2>
            <RiMovie2Line size={40} className="nav-icon" />
          </div>
          <a className="footer-btn" href="/">
            JOIN THE COMMUNITY
          </a>
        </div>
        <div className="column-list">
          <div>
            <h5 className="">THE BASICS</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  About TMDb
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Support Forums
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  API
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="">GET INVOLVED</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  Contribution Bible
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  3rd Party Applications
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Add New Movie
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Add New TV Show
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="">COMMUNITY</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  Guidelines
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Discussions
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Leaderboard
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="">LEGAL</h5>
            <ul>
              <li>
                <a className="" href="#!">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  API Terms of Use
                </a>
              </li>
              <li>
                <a className="" href="#!">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
