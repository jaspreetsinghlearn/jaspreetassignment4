import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <header className="container-fluid bg-light py-3">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand text-primary font-weight-bold" to="/">ITBrand</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">User Info</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/404">Not Found</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
