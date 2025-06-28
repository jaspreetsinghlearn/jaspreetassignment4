import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center" style={{ background: "#1f1f1f", color: "#bbb", padding: "1.5em 0", fontSize: "0.9rem" }}>
      <div className="container">
        
        <div className="mb-3">
          <a href="/a" className="text-light mx-3">Privacy</a>
          <a href="/a" className="text-light mx-3">Terms</a>
        </div>
        <div className="mb-3">
          <a href="facebook.com" className="text-light mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="x.com" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
          <a href="linkedin.com" className="text-light mx-2"><i className="fab fa-linkedin-in"></i></a>
          <a href="instagram.com" className="text-light mx-2"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="mb-0 text-light">&copy; 2025 ITBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
