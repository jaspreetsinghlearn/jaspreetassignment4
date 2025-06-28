import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="container-fluid bg-light py-3">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand text-primary font-weight-bold" to="/">ITBrand</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navBar">
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
              <Link className="nav-link" to="/404">Not Found</Link> {/* optional for demo */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
