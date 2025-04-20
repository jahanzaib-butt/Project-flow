import React from 'react';
import './CaseStudySection.css';

export default function CaseStudySection() {
  const caseStudies = [
    {
      company: 'TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Increased team productivity by 37% within the first quarter of implementing ProjectFlow.',
      quote: 'ProjectFlow has completely transformed how our engineering and design teams collaborate on product development.',
      person: 'Jennifer Lee, CTO'
    },
    {
      company: 'Global Marketing Group',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Reduced project delivery time by 42% and improved client satisfaction scores.',
      quote: 'The visual workflow and deadline tracking features have revolutionized our campaign management process.',
      person: 'Marcus Johnson, Operations Director'
    }
  ];

  return (
    <section className="case-study-section">
      <div className="case-container">
        <h2 className="case-title">Success Stories</h2>
        <p className="case-subtitle">See how leading companies use ProjectFlow</p>
        
        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <div className="case-card" key={index}>
              <div className="case-image-container">
                <img src={study.image} alt={study.company} className="case-image" />
                <div className="case-overlay">
                  <div className="case-company">{study.company}</div>
                </div>
              </div>
              <div className="case-content">
                <p className="case-description">{study.description}</p>
                <blockquote className="case-quote">
                  <p>"{study.quote}"</p>
                  <cite>— {study.person}</cite>
                </blockquote>
                <a href="#board" className="case-link">Read full case study</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
