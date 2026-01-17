import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="media/images/Quantaralogo.svg" alt="logo" id="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='navbar-nav ms-auto'>
                  <Link className="nav-link" aria-current="page" to="signup">
                    Signup
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/product">
                    Products
                  </Link>
                  <Link className="nav-link" to="pricing">
                    Pricing
                  </Link>
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
