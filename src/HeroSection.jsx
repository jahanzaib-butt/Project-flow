import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="gradient-text">ProjectFlow</span>
        </h1>
        <p className="hero-tagline">
          The next-gen minimalist project management board.<br />
          <span className="hero-fade">Plan. Track. Succeed.</span>
        </p>
        <div className="hero-actions">
          <a href="#board" className="hero-btn primary">Get Started</a>
          <a href="#features" className="hero-btn secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
