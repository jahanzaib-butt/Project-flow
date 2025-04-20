import React from 'react';
import './ProductShowcase.css';

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      <div className="showcase-container">
        <div className="showcase-split">
          <div className="showcase-content">
            <h2 className="showcase-title">ProjectFlow Mobile</h2>
            <p className="showcase-tagline">Seamless task management on the go.</p>
            <p className="showcase-description">Manage tasks and track progress from anywhere with real-time updates.</p>
            
            <div className="showcase-actions">
              <a href="#board" className="showcase-btn primary">Learn more</a>
              <a href="#features" className="showcase-btn secondary">Buy</a>
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="iphone-pro">
              <div className="iphone-screen">
                <div className="iphone-content">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="app-title">ProjectFlow</div>
                    </div>
                    <div className="app-tasks">
                      <div className="app-task">
                        <div className="task-title">Website Redesign</div>
                        <div className="task-date">Apr 22</div>
                      </div>
                      <div className="app-task">
                        <div className="task-title">Client Meeting</div>
                        <div className="task-date">Apr 23</div>
                      </div>
                      <div className="app-task">
                        <div className="task-title">Product Launch</div>
                        <div className="task-date">Apr 25</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iphone-notch"></div>
              <div className="iphone-button"></div>
              <div className="iphone-camera"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="showcase-container light">
        <div className="showcase-split reversed">
          <div className="showcase-content">
            <h2 className="showcase-title">Solve Workflow Problems</h2>
            <p className="showcase-tagline">Streamline your team's productivity.</p>
            <p className="showcase-description">Clear status updates, prioritized tasks, and balanced workloads for faster delivery.</p>
            
            <div className="showcase-actions">
              <a href="#board" className="showcase-btn primary">Learn more</a>
              <a href="#features" className="showcase-btn secondary">Buy</a>
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="iphone-regular blue">
              <div className="iphone-screen">
                <div className="iphone-content">
                  <div className="app-preview light">
                    <div className="app-header">
                      <div className="app-title">Team Progress</div>
                    </div>
                    <div className="app-tasks">
                      <div className="app-task">
                        <div className="task-title">Design System</div>
                        <div className="task-progress"><div className="progress-bar" style={{width: '75%'}}></div></div>
                      </div>
                      <div className="app-task">
                        <div className="task-title">Frontend Dev</div>
                        <div className="task-progress"><div className="progress-bar" style={{width: '60%'}}></div></div>
                      </div>
                      <div className="app-task">
                        <div className="task-title">User Testing</div>
                        <div className="task-progress"><div className="progress-bar" style={{width: '30%'}}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iphone-notch"></div>
              <div className="iphone-button"></div>
              <div className="iphone-camera"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
