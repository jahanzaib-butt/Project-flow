import React from 'react';
import './DarkHeroSection.css';

export default function DarkHeroSection() {
  return (
    <section className="dark-hero">
      <div className="dark-hero-content">
        <h1 className="dark-hero-title">ProjectFlow Pro</h1>
        <p className="dark-hero-tagline">A work of smart.</p>
        
        <div className="dark-hero-actions">
          <a href="#board" className="dark-hero-btn primary">Learn more</a>
          <a href="#features" className="dark-hero-btn secondary">Buy</a>
        </div>
      </div>
      
      <div className="dark-hero-visual">
        <div className="macbook">
          <div className="macbook-screen">
            <div className="macbook-content">
              <div className="board-preview">
                <div className="preview-column">
                  <div className="column-title">To Do</div>
                  <div className="preview-task">
                    <div className="task-preview-title">Design System</div>
                    <div className="task-preview-date">Apr 25</div>
                  </div>
                  <div className="preview-task">
                    <div className="task-preview-title">User Research</div>
                    <div className="task-preview-date">Apr 28</div>
                  </div>
                </div>
                <div className="preview-column">
                  <div className="column-title">In Progress</div>
                  <div className="preview-task">
                    <div className="task-preview-title">Frontend Dev</div>
                    <div className="task-preview-date">Apr 22</div>
                  </div>
                  <div className="preview-task">
                    <div className="task-preview-title">API Integration</div>
                    <div className="task-preview-date">Apr 24</div>
                  </div>
                </div>
                <div className="preview-column">
                  <div className="column-title">Done</div>
                  <div className="preview-task">
                    <div className="task-preview-title">Wireframes</div>
                    <div className="task-preview-date">Apr 18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="macbook-keyboard">
            <div className="keyboard-light"></div>
          </div>
        </div>
      </div>
      
      <div className="dark-hero-tagline-bottom">
        Built for Apple Intelligence.
      </div>
    </section>
  );
}
