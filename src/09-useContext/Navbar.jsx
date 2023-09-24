import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "Active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "Active" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `nav-link ${isActive ? "Active" : ""}`
              }
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
