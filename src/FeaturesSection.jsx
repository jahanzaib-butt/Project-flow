import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    icon: "📋",
    title: "Visual Task Board",
    desc: "Organize, drag and drop, and track tasks visually across customizable statuses.",
  },
  {
    icon: "⏰",
    title: "Smart Deadlines",
    desc: "Color-coded, easy-to-see deadlines keep your team on track and future-focused.",
  },
  {
    icon: "✨",
    title: "Minimalist UI",
    desc: "Distraction-free, futuristic design inspired by the world’s best interfaces.",
  },
  {
    icon: "🧊",
    title: "Glassmorphism",
    desc: "Modern glassy effects and subtle gradients for a premium, calming workspace.",
  },
  {
    icon: "🚀",
    title: "Lightning Fast",
    desc: "Instant updates, smooth transitions, and a seamless experience on any device.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2 className="features-title gradient-text">Features</h2>
      <div className="features-list">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
