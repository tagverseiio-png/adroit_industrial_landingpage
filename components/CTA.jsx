"use client";
import { useState } from 'react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX' });
    }
  };

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <h2>Tell us about your facility. We'll send an engineering plan, not a sales pitch.</h2>
        <p>Share your requirement and our engineering team will respond within one business day with next steps.</p>
        
        {!submitted ? (
          <form className="cta-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Work Email" className="full" required />
            <select className="full">
              <option value="">Project Type</option>
              <option>Industrial Architectural Design</option>
              <option>PEB Shed / Warehouse</option>
              <option>Civil &amp; Structural</option>
              <option>MEP / HVAC / FPS</option>
              <option>PMC / Specialized Project</option>
            </select>
            <textarea placeholder="Tell us about your facility — location, area in sq.ft., timeline"></textarea>
            <button type="submit" className="btn on-paper full" style={{ justifyContent: "center" }}>Request a Callback</button>
            <p className="full" style={{ fontFamily: "var(--mono)", fontSize: "11.5px", color: "#4a3410", marginTop: "2px" }}>
              We reply within 1 business day. Your details are used only to contact you about this enquiry — no spam, no sharing with third parties.
            </p>
          </form>
        ) : (
          <div id="form-success" style={{ maxWidth: "640px", margin: "0 auto", padding: "20px", background: "rgba(18,22,26,0.07)", border: "1px solid rgba(18,22,26,0.3)" }}>
            <strong>Thanks — your enquiry is in.</strong> Our team will call you within 1 business day.
          </div>
        )}
      </div>
    </section>
  );
}
