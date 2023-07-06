import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img
            src="https://img.freepik.com/free-icon/warning_318-502947.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-nav ms-auto gap-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link
              className="btn btn-nav"
              style={{
                backgroundColor: "#FF8B43",
                color: "white",
                width: "75px",
              }}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link
              className="btn btn-nav"
              style={{
                backgroundColor: "#FF8B43",
                color: "white",
                width: "75px",
              }}
              to="#"
            >
              Us
            </Link>
            <Link
              className="btn btn-nav"
              style={{
                backgroundColor: "#FF8B43",
                color: "white",
                width: "75px",
              }}
              to="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
