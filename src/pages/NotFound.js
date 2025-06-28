import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <>
      <Header />
      <section className="container text-center my-5">
        <h1 className="display-3 text-danger font-weight-bold">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn btn-primary mt-3">Back to Home</a>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
