import React from 'react';
import './TeamSection.css';

export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'ProjectFlow transformed how our team collaborates on complex projects.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'The intuitive interface makes tracking progress a breeze for our engineering team.'
    },
    {
      name: 'Alicia Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'As a designer, I appreciate how the clean UI helps me focus on what matters.'
    },
    {
      name: 'David Wilson',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'Our marketing campaigns are now perfectly synchronized with product development.'
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet the Team</h2>
        <p className="team-subtitle">The faces behind ProjectFlow</p>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-quote">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
