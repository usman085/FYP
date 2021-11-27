import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);
  const user = JSON.parse(localStorage.getItem("auth_user"));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <nav
      className={
        isSticky || isCollapsed
          ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top"
          : "slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top "
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          E-<strong>Health Care</strong>
        </Link>
        <button
          onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed}`}
          id="collapsibleNavId"
        >
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {user?.user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
