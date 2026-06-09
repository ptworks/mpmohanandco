import React, { useEffect } from 'react';
import './index.css';

function Career() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page-wrapper">
      <div className="job-application-card">
        {/* Logo Header */}
        <div className="job-app-logo">
          MP<span>Mohan</span> & Co
          <div className="job-app-subtitle">chartered accountants</div>
        </div>

        {/* Intro Text */}
        <div className="job-app-intro">
          <p>Hello,</p>
          <p>If you are looking to work for a new age CA firm to learn new skills and tools and hone your leadership skills and have fun in the process. Apply for career options with us by filling up this form.</p>
          <p>We are excited to meet you!!</p>
          <p>Team HR</p>
        </div>

        {/* Title */}
        <h2 className="job-app-title">Job Application</h2>

        {/* Form */}
        <form className="job-app-form" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted!'); }}>
          
          <div className="form-group">
            <label>Email <span className="req">*</span></label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>First name <span className="req">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Last name <span className="req">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Phone number <span className="req">*</span></label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Upload Photo <span className="req">*</span></label>
            <input type="file" required accept="image/*" className="file-input" />
          </div>

          <div className="form-group">
            <label>Experience <span className="req">*</span></label>
            <select required defaultValue="">
              <option value="" disabled>Please Select</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1 - 3 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Are you planning to write CA Final exams?</label>
            <select defaultValue="">
              <option value="" disabled>Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current CTC (salary)</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Expected CTC (Salary) <span className="req">*</span></label>
            <input type="text" required />
          </div>

          <p className="job-app-disclaimer">
            M P Mohan & Co needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
          </p>

          <button type="submit" className="job-submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default Career;
