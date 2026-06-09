import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import TeamMember from './TeamMember';
import Career from './Career';
import ServiceDetail from './ServiceDetail';
import Chatbot from './Chatbot';
import { teamMembers } from './data';
import { newsData } from './data';
import './index.css';
import TaxCirculars from "./TaxCircular";
import IncomeTaxNews from "./IncomeTaxNews";
import IncomeTaxTicker from './IncomeTaxTicker';
import NewsAndResources from './NewsAndResources';
import GstNews from './GstNews';
import McaNews from './McaNews';
import calogo from '../src/assets/calogo.png'
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <div style={{ position: 'relative', background:"#fff" }}>
       {/* <TaxCirculars />
      <IncomeTaxNews />  */}
      <IncomeTaxTicker />
      {/* Top Header */}
      {/* <img src="../src/assets/calogo.png" alt="CA M P Mohan"  className="logo1"/> */}
      <div className="header-top">
        
        <Link to="/" className="logo">
         
          <div> <img src={calogo} alt="CA M P Mohan"  className="logo1"/>
              <div className='logotitle'> M.P. <span>Mohan</span> & Co 
               <div style={{ fontSize: '16px', fontWeight: 'normal', color: '#f37920', marginTop: '-5px', paddingLeft:"57px" }}>
            Chartered Accountants
          </div>
              </div>
              
              </div>
          
        </Link>
        <div className="header-contact">
          <a href="mailto:info@mpmohan.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-envelope"></i> info@mpmohan.com
          </a>
          <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-phone-alt"></i> +91 98765 43210
          </a>
          {/* <button className="btn-primary" style={{ padding: '5px 15px', marginLeft: '10px' }}>Payment</button>
          <button className="btn-primary" style={{ padding: '5px 15px', background: 'var(--primary)', borderColor: 'var(--primary)' }}>Client login</button> */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-item" onClick={handleNavClick}>ABOUT US</Link></li>
          
          <li className="dropdown">
            <Link to="/#team" className="nav-item dropbtn" onClick={handleNavClick}>OUR TEAM ▾</Link>
            <div className="dropdown-content">
              {teamMembers.map(member => (
                <Link key={member.id} to={`/team/${member.id}`} onClick={handleNavClick}>
                  {member.name}
                </Link>
              ))}
            </div>
          </li>
          
          <li className="dropdown">
            <Link to="/#services" className="nav-item dropbtn" onClick={handleNavClick}>SERVICES ▾</Link>
            <div className="dropdown-content">
               <Link to="/services/incometax-services" onClick={handleNavClick}>Income Tax Services</Link>
              <Link to="/services/audit-assurance" onClick={handleNavClick}>Audit and Assurance Services</Link>
              <Link to="/services/consulting-advisory" onClick={handleNavClick}>Consulting and Advisory Services</Link>
              <Link to="/services/technology" onClick={handleNavClick}>Technology and Automation Services</Link>
              <Link to="/services/backoffice" onClick={handleNavClick}>Back Office Support Services</Link>
            </div>
          </li>

          {/* <li><Link to="/" className="nav-item" onClick={handleNavClick}>INTERNATIONAL</Link></li> */}
          <li className="dropdown">
            <a href="#" className="nav-item dropbtn" onClick={handleNavClick}>NEWS & RESOURCES ▾</a>
             <div className="dropdown-content">
              <Link
      to="/newsandresources/income-tax-news"
      onClick={handleNavClick}
    >
      Income Tax News
    </Link>

    <Link
      to="/newsandresources/tax-circulars"
      onClick={handleNavClick}
    >
      Tax Circulars
    </Link>
    <Link
      to="/newsandresources/gst-news"
      onClick={handleNavClick}
    >
      GST News
    </Link>
    <Link
      to="/newsandresources/mca-news"
      onClick={handleNavClick}
    >
      MCA News
    </Link>

            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-item dropbtn" onClick={(e) => e.preventDefault()}>CAREER ▾</a>
            <div className="dropdown-content">
              <Link to="/career" onClick={handleNavClick}>Apply Online</Link>
            </div>
          </li>
          <li><a href="#" className="nav-item" onClick={() => { handleNavClick(); setIsEnquiryModalOpen(true); }}>CONTACT US</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
          {/* News & Resources */}
  <Route path="/newsandresources" element={<NewsAndResources />} />

    <Route
      path="/newsandresources/income-tax-news"
      element={<IncomeTaxNews />}
    />

    <Route
      path="/newsandresources/tax-circulars"
      element={<TaxCirculars />}
    />
    <Route
      path="/newsandresources/gst-news"
      element={<GstNews />}
    />
     <Route
      path="/newsandresources/mca-news"
      element={<McaNews />}
    />
      </Routes>

      {/* Pre-Footer Contact Strip */}
      <div className="pre-footer-contact">
        <div className="contact-person-img">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" alt="CA M P Mohan" />
        </div>
        <div className="contact-text">
          <h3>Feel free to contact us</h3>
          <p>Let us know what you need here, we are there to help you</p>
        </div>
        <button className="btn-contact-us" onClick={() => setIsEnquiryModalOpen(true)}>CONTACT US</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid-top">
          {/* Col 1 */}
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <h3 className="foot-logo-img">
              MP<span>Mohan</span> & Co
              <div style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--accent)', marginTop: '-5px' }}>
                chartered accountants
              </div>
            </h3>
            <p className="foot-desc" style={{ marginTop: '20px' }}>
              MP Mohan & Co is CA firms in Bangalore for accounting and bookkeeping services. The firm has the most reliable chartered accountants in Bangalore who will offer you the best services. You can also rely on their chartered accountants for transfer pricing and advisory services.
            </p>
          </div>
          {/* Col 2 */}
          {/* <div className="footer-col">
            <h4 className="foot-heading">OUR BRANCHES</h4>
            <ul className="foot-list with-icons">
              <li><i className="fas fa-map-marker-alt"></i> Malleshwaram, Bangalore</li>
              <li><i className="fas fa-map-marker-alt"></i> Hubli</li>
              <li><i className="fas fa-map-marker-alt"></i> Mysore</li>
              <li><i className="fas fa-map-marker-alt"></i> Udupi</li>
              <li><i className="fas fa-map-marker-alt"></i> Hyderabad</li>
            </ul>
          </div> */}
          {/* Col 3 */}
          <div className="footer-col">
            <h4 className="foot-heading">CONTACT US</h4>
            <ul className="foot-list">
              <li>CA Abhishek</li>
              <li>Client Engagement Partner</li>
              <li>
                <a href="tel:+919876543210"><i className="fas fa-mobile-alt"></i> +91 98765 43210</a>
              </li>
              <li>
                <a href="tel:08023443636"><i className="fas fa-phone-alt"></i> 08023443636</a>
              </li>
              <li>
                <a href="mailto:abhishek@mpmohan.com"><i className="fas fa-envelope"></i> abhishek@mpmohan.com</a>
              </li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className="footer-col">
            <h4 className="foot-heading">CAREER</h4>
            <ul className="foot-list">
              <li>HR Department</li>
              <li>
                <a href="tel:+918197981450"><i className="fas fa-mobile-alt"></i> +91 8197981450</a>
              </li>
              <li>
                <a href="mailto:career@mpmohan.com"><i className="fas fa-envelope"></i> career@mpmohan.com</a>
              </li>
              {/* <li style={{ marginTop: '15px' }}>To know about current openings!</li>
              <li><a href="#" style={{ color: 'var(--accent)' }}>Click Here</a></li> */}
            </ul>
          </div>
          {/* Col 5 */}
          <div className="footer-col">
            {/* <h4 className="foot-heading">FOLLOW US</h4>
            <div className="social-icons">
              <a href="#" className="social-fb"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-li"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-in"><i className="fab fa-instagram"></i></a>
            </div> */}
            <h4 className="foot-heading">HEAD OFFICE</h4>
            <p className="foot-desc" style={{ marginTop: '10px' }}>
              No. 78, Sai Sharan Heights, 5th Floor, Above ICICI Bank, 15th Cross, Margosa Road, MES College Road, Malleshwaram, Bangalore - 560003
            </p>
          </div>
        </div>

        {/* Services Line */}
        <div className="footer-services-section">
          <h4 className="foot-heading">OUR SERVICES</h4>
          <div className="footer-services-grid">
            <ul className="foot-list">
              <li><Link to="/services/statutory-audit" style={{ color: 'inherit', textDecoration: 'none' }}>Statutory Audit</Link></li>
              <li><Link to="/services/gst-audit" style={{ color: 'inherit', textDecoration: 'none' }}>Gst Audit</Link></li>
              <li><Link to="/services/gst-registration" style={{ color: 'inherit', textDecoration: 'none' }}>Gst Registration</Link></li>
              <li><Link to="/services/gst-filing" style={{ color: 'inherit', textDecoration: 'none' }}>GST Filing</Link></li>
            </ul>
            <ul className="foot-list">
              <li><Link to="/services/tax-audit" style={{ color: 'inherit', textDecoration: 'none' }}>Tax Audit</Link></li>
              <li><Link to="/services/income-tax-consulting" style={{ color: 'inherit', textDecoration: 'none' }}>Income Tax Consulting</Link></li>
              <li><Link to="/services/tax-efiling" style={{ color: 'inherit', textDecoration: 'none' }}>Tax Efiling</Link></li>
              <li><Link to="/services/limited-liability-partnership" style={{ color: 'inherit', textDecoration: 'none' }}>Limited Liability Partnership</Link></li>
            </ul>
            <ul className="foot-list">
              <li><Link to="/services/startup-registration" style={{ color: 'inherit', textDecoration: 'none' }}>Startup Registration</Link></li>
              <li><Link to="/services/llp-registration" style={{ color: 'inherit', textDecoration: 'none' }}>LLP Registration</Link></li>
              <li><Link to="/services/transfer-pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Transfer Pricing</Link></li>
              <li><Link to="/services/international-taxation" style={{ color: 'inherit', textDecoration: 'none' }}>International Taxation</Link></li>
            </ul>
            <ul className="foot-list">
              <li><Link to="/services/financial-accounting" style={{ color: 'inherit', textDecoration: 'none' }}>Financial Accounting</Link></li>
              <li><Link to="/services/startup-funding" style={{ color: 'inherit', textDecoration: 'none' }}>Startup Funding In India</Link></li>
              <li><Link to="/services/cfo-services" style={{ color: 'inherit', textDecoration: 'none' }}>CFO Services</Link></li>
              <li><Link to="/services/accounting-outsourcing" style={{ color: 'inherit', textDecoration: 'none' }}>Accounting Outsourcing</Link></li>
            </ul>
            <ul className="foot-list">
              <li><Link to="/services/bookkeeping-services" style={{ color: 'inherit', textDecoration: 'none' }}>Bookkeeping Services</Link></li>
              <li><Link to="/services/payroll-services" style={{ color: 'inherit', textDecoration: 'none' }}>Payroll Services</Link></li>
              <li><Link to="/services/incorporate-subsidiary" style={{ color: 'inherit', textDecoration: 'none' }}>Incorporate Subsidiary</Link></li>
              <li><Link to="/services/private-limited-company" style={{ color: 'inherit', textDecoration: 'none' }}>Private Limited Company</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-logos">
          <div className="footer-mgi-logo">
            <h1 style={{ color: 'var(--primary)', fontSize: '2rem', margin: 0 }}>MP Mohan & Co</h1>
          </div>
          <div className="footer-disclaimer">
            MP Mohan & Co is a network of independent accounting, legal and consulting firms. MGI Worldwide does not provide any services and its member firms are not an international partnership. Each member firm is a separate entity and none of MGI Worldwide, MGI Ltd., nor any member firm accepts responsibility for the activities, work, opinions or services of any other member firm. For more information visit www.mgiworld.com/legal
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} MP Mohan & Co. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="floating-enquire" onClick={() => setIsEnquiryModalOpen(true)}>
        ENQUIRE NOW
      </div>

      <Chatbot />

      {/* Enquiry Modal */}
      {isEnquiryModalOpen && (
        <div className="enquiry-modal-overlay">
          <div className="enquiry-modal-content">
            <button className="close-modal" onClick={() => setIsEnquiryModalOpen(false)}>×</button>
            <div className="modal-left" style={{ background: 'var(--primary)' }}>
              <h2>Feel free to reach out with any queries.</h2>
              <p style={{ color: 'var(--accent)' }}>I typically respond within a few hours!</p>
              <div className="modal-person">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" alt="CA Ankith C Shetty" />
                <h4 style={{ color: 'var(--accent)' }}>CA M P Mohan</h4>
                <span>Partner</span>
              </div>
            </div>
            <div className="modal-right">
              <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted!'); setIsEnquiryModalOpen(false); }}>
                <div className="form-group">
                  <label>First name<span className="req">*</span></label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email<span className="req">*</span></label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone number<span className="req">*</span></label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Service</label>
                  <select defaultValue="">
                    <option value="" disabled>Please Select</option>
                    <option value="tax">Taxation</option>
                    <option value="audit">Audit</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional information</label>
                  <textarea rows="3"></textarea>
                </div>
                <div className="recaptcha-placeholder">
                  <span>protected by <strong>reCAPTCHA</strong></span>
                  <i className="fas fa-sync" style={{ fontSize: '1.5rem', color: '#1a73e8' }}></i>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <button type="submit" className="submit-btn-orange" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>Submit</button>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>Create your own free forms to generate leads</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
