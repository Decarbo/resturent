import React from "react";
import "../CSS/footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
            alt="Restaurant Logo"
          />
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
