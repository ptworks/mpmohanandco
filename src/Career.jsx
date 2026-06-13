import React, { useEffect, useState } from 'react';
import './index.css';
import calogo from '../src/assets/calogo.png'

function Career() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    experience: '',
    exams: '',
    current: '',
    expected: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      console.log('API Response:', result);
      if (result.success) {
        alert('Submitted Successfully');
  
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          experience: '',
          exams: '',
          current: '',
          expected: ''
        });
  
        setIsEnquiryModalOpen(false);
      } else {
        alert(result.message || result.error || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit enquiry');
    }
  };
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page-wrapper">
      <div className="job-application-card">
        {/* Logo Header */}
             <div style={{ textAlign: 'center'}}> <img src={calogo} alt="CA M P Mohan"  className="logo1"/>
                    
                      
                      </div>
        <div className="job-app-logo">
          M.P.<span> Mohan</span> & Co
          <div className="job-app-subtitle">Chartered Accountants</div>
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
        <form className="job-app-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Email <span className="req">*</span></label>
            <input type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>First name <span className="req">*</span></label>
            <input type="text" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label>Last name <span className="req">*</span></label>
            <input type="text" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label>Phone number <span className="req">*</span></label>
            <input type="tel" 
                 name="phone" 
                 value={formData.phone}
                 onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label>Experience <span className="req">*</span></label>
            <select name="experience" 
                    value={formData.experience}
                    onChange={handleChange} required>
              <option value="" disabled>Please Select</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1 - 3 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Are you planning to write CA Final exams?</label>
            <select name="exams" 
                    value={formData.exams}
                    onChange={handleChange}>
              <option value="" disabled>Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current CTC (salary)</label>
            <input type="text" 
                   name="current" 
                   value={formData.current}
                   onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>Expected CTC (Salary) <span className="req">*</span></label>
            <input type="text" 
                   name="expected" 
                   value={formData.expected}
                   onChange={handleChange}required />
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
