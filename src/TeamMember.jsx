import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teamMembers } from './data';
import './index.css';

function TeamMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const member = teamMembers.find(m => m.id === id);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="section" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h2 className="section-title">Member Not Found</h2>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="section bg-light" style={{ minHeight: '80vh', padding: '6rem 5%' }}>
      <button 
        onClick={() => navigate('/')} 
        className="btn-primary" 
        style={{ marginBottom: '2rem', background: 'transparent', color: 'var(--bcs-teal)', border: '1px solid var(--bcs-teal)' }}
      >
        ← Back to Home
      </button>

      <div className="about-grid" style={{ background: '#fff', padding: '3rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
        <div className="team-photo-wrap" style={{ width: '100%', border: '5px solid var(--bcs-teal)', margin: '0 auto' }}>
          <img src={member.image} alt={member.name} className="team-photo" />
        </div>
        
        <div className="about-text">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--bcs-blue)', textTransform: 'uppercase' }}>{member.name}</h2>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--bcs-teal)', marginBottom: '2rem' }}>{member.role}</h4>
          
          <h3 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--bcs-teal)', paddingBottom: '10px', marginBottom: '15px' }}>Biography</h3>
          <p style={{ fontSize: '1.1rem', color: '#444' }}>{member.bio}</p>

          <h3 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--bcs-teal)', paddingBottom: '10px', marginBottom: '15px', marginTop: '2rem' }}>Key Portfolio & Works</h3>
          <ul className="service-list" style={{ marginTop: '1rem' }}>
            {member.works.map((work, idx) => (
              <li key={idx} style={{ fontSize: '1.05rem', padding: '8px 0', borderBottom: '1px dashed #eee' }}>
                ✓ {work}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
