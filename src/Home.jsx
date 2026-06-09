import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { teamMembers, sliderImages, servicesList, industriesServed } from './data';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [activeTeamMember, setActiveTeamMember] = useState(teamMembers[0]);

  const getCirclePosition = (index) => {
    if (index === 0) return { top: '0%', left: '50%' };
    if (index === 1) return { top: '50%', left: '100%' };
    if (index === 2) return { top: '100%', left: '50%' };
    if (index === 3) return { top: '50%', left: '0%' };
    return { top: '50%', left: '50%' };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <section id="home" className="hero-slider">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            {index === currentSlide && (
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-desc">{slide.desc}</p>
                <a href="#enquiry" className="btn-primary">Learn More</a>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <h2 className="section-title">About Our Firm</h2>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=1000" alt="Accounting and Finance Office" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              Founded in 1979, M P Mohan & Co. is an established Chartered Accountants firm with over 45 years of continuous service to business and industry in tax and audit advisory services.
            </p>
            <p>
              With over four decades of expertise, we are renowned for an unwavering commitment to work discipline and a straightforward approach. We handle complex litigation with insightful advice and legal acumen.
            </p>
            <p>
              Our team is a unique blend of seasoned professionals and dynamic young talent, providing tailored financial strategies and comprehensive compliance support across a wide spectrum of industries. Honesty and integrity is our corner stone for success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="industries-container" style={{ background: '#145886', margin: '4rem -5% 0 -5%', padding: '4rem 5%' }}>
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 className="section-title" style={{ fontSize: '2rem', color: 'white', border: 'none', display: 'inline-block', marginBottom: '10px' }}>Industries We Serve</h3>
            <div style={{ width: '80px', height: '3px', background: 'var(--accent)', margin: '0 auto' }}></div>
          </div>
          
          <div className="industries-grid">
            {industriesServed.map((industry, index) => (
              <div key={index} className="industry-card">
                <img src={industry.image} alt={industry.name} className="industry-img" />
                <div className="industry-overlay">
                  <h4 className="industry-name">{industry.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-light">
        <h2 className="section-title">Our Key People</h2>
        <div className="interactive-team-container">
          <div className="team-details-left">
            <h3 className="team-name">{activeTeamMember.name}</h3>
            <h4 className="team-role">{activeTeamMember.role}</h4>
            <p className="team-bio">{activeTeamMember.bio}</p>
            <Link to={`/team/${activeTeamMember.id}`} className="btn-primary">View Full Profile</Link>
          </div>
          
          <div className="team-circle-right">
            <div className="circle-layout">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`circle-photo-wrapper ${activeTeamMember.id === member.id ? 'active' : ''}`}
                  onClick={() => setActiveTeamMember(member)}
                  style={getCirclePosition(index)}
                >
                  <img src={member.image} alt={member.name} />
                </div>
              ))}
              <div className="circle-center">
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Meet<br/>The Team</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
