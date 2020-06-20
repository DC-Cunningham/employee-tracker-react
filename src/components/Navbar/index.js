import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div className="text-light">
        <h3 className="d-inline">
          dA
          <h2 className="d-inline">
            TA<h1 className="d-inline">Q</h1>UE
          </h2>
          St
        </h3>
        <h4 className="d-inline"> Employee Directory</h4>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
