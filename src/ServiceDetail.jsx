import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getServiceData } from './data';
import './index.css';

function ServiceDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(getServiceData(id));
  }, [id]);

  if (!data) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <div className="service-banner">
        <div className="service-banner-content">
          <h1>{data.title.toUpperCase()}</h1>
          <button className="btn-primary" style={{ marginTop: '20px' }}>ENQUIRE NOW</button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <span>{data.title}</span>
      </div>

      <div className="service-content-wrapper">
        <h2 className="service-page-title">{data.title}</h2>
        <p className="service-intro-text">
          {data.intro}
        </p>

        {/* Dynamic Sections */}
        {data.sections && data.sections.map((section, idx) => (
          <div key={idx} className="service-detail-section">
            <h3 className="section-divider-title">{section.title}</h3>
            {section.desc && <p style={{ marginBottom: '1rem', color: '#555' }}>{section.desc}</p>}
            <ul className="service-detail-list">
              {section.list.map((item, i) => (
                <li key={i}>
                  {item.includes(':') ? (
                    <><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="faq-section" style={{ marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>FAQ</h3>
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="faq-container" style={{ marginBottom: '10px' }}>
                <div 
                  className={`faq-item ${openFaq === idx ? 'open' : ''}`} 
                  onClick={() => toggleFaq(idx)}
                >
                  {faq.q} <span>{openFaq === idx ? '▲' : '▼'}</span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;
