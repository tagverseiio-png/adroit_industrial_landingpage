import React from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">QUICK ENQUIRY</h2>
        <p className="modal-subtext">
          If you are interested in any of our services, please submit your basic details below and we will get back to you as soon as possible!
        </p>
        
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="form-grid">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Official Mail ID" required />
            <input type="tel" placeholder="Phone Number" required />
            <select required defaultValue="">
              <option value="" disabled>Select Category</option>
              <option value="architectural">Architectural Design</option>
              <option value="engineering">Engineering</option>
              <option value="consulting">Consulting</option>
            </select>
            <input type="text" placeholder="Location" required />
            <input type="text" placeholder="Area (sq. ft.)" />
            <textarea className="full-width" placeholder="Message / Specifications" rows="1"></textarea>
          </div>
          <button type="submit" className="modal-submit-btn">SEND INQUIRY &rarr;</button>
        </form>
      </div>
    </div>
  );
}
