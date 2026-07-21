import AdroitIcon from './AdroitIcon';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <AdroitIcon width={64} height={64} />
                <span style={{ textTransform: 'uppercase', color: 'white', letterSpacing: '3px', fontWeight: '600', fontSize: '1.1rem' }}>ADROIT DESIGN</span>
              </a>
              <p>Industrial architectural design, civil, PEB, MEP, HVAC, FPS, PMC and specialized project execution — engineered and delivered by one accountable team.</p>
            </div>
            <div className="footer-col">
              <h5>Capabilities</h5>
              <a href="#capabilities">Industrial Architecture</a>
              <a href="#capabilities">Civil &amp; PEB</a>
              <a href="#capabilities">MEP &amp; HVAC</a>
              <a href="#capabilities">FPS &amp; PMC</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#intro">About Adroit Design</a>
              <a href="#projects">Our Projects</a>
              <a href="#why">Why Choose Us</a>
              <a href="#faq">FAQs</a>
            </div>
            <div className="footer-col">
              <h5>Get in Touch</h5>
              <p>+91 90000 00000</p>
              <p>projects@adroitdesign.example</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Adroit Design. All rights reserved.</span>
            <span>Industrial Architectural Design · Civil · PEB · MEP · HVAC · FPS · PMC</span>
          </div>
          <div className="footer-seo">
            Adroit Design is a Chennai-based industrial architectural design and engineering firm offering interiors, civil, PEB (pre-engineered buildings), MEP (mechanical, electrical and plumbing), HVAC, FPS (fire protection systems), PMC (project management consultancy) and specialized industrial projects. We design and execute factories, warehouses, process plants and industrial campuses end-to-end, from feasibility study through statutory approvals, structural engineering, MEP integration and commissioning — delivered by one in-house team accountable for the full project lifecycle.
          </div>
        </div>
      </footer>

      <div className="mobile-cta-bar">
        <a href="tel:+919000000000" className="call">📞 Call Now</a>
        <a href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20your%20industrial%20project%20services" className="whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
      </div>
    </>
  );
}
