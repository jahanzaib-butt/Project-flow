import React from "react";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-brand gradient-text">ProjectFlow</div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#board">Board</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-copy">© {new Date().getFullYear()} ProjectFlow. All rights reserved.</div>
    </footer>
  );
}
