import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="treo-logo">Treo</span>
        </a>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#features" className="navbar-link">Features</a>
          <a href="#board" className="navbar-link">Board</a>
          <a href="#" className="navbar-link">Pricing</a>
          <a href="#" className="navbar-link">Support</a>
        </div>
        <div className="navbar-actions">
          <button className="navbar-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5L11.5 11.5M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="navbar-cart">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 15C5.77614 15 6 14.7761 6 14.5C6 14.2239 5.77614 14 5.5 14C5.22386 14 5 14.2239 5 14.5C5 14.7761 5.22386 15 5.5 15Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 15C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14C13.2239 14 13 14.2239 13 14.5C13 14.7761 13.2239 15 13.5 15Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H3.5L5.2 10.5C5.25472 10.8329 5.41668 11.1343 5.66004 11.3485C5.9034 11.5627 6.21474 11.6784 6.55 11.675H12.55C12.8853 11.6784 13.1966 11.5627 13.44 11.3485C13.6833 11.1343 13.8453 10.8329 13.9 10.5L15 4.5H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
