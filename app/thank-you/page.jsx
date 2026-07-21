import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Adroit Design',
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="ty-container">
        <p className="eyebrow" style={{ marginBottom: '30px' }}>ADROIT DESIGN</p>
        
        <div className="ty-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="ty-title">THANK<br/>YOU!</h1>
        <p className="ty-desc">
          Your request has been received. Our team will<br/>
          contact you within <strong>24 hours</strong> to discuss your project.
        </p>

        <div className="ty-actions">
          <Link href="/" className="btn gold">BACK TO HOME</Link>
          <Link href="/#projects" className="btn on-paper" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>VIEW OUR PROJECTS</Link>
        </div>

        <div className="ty-stats-divider"></div>
        <div className="ty-stats">
          <div className="ty-stat">
            <span className="num">24 Hrs</span>
            <span className="lbl">RESPONSE TIME</span>
          </div>
          <div className="ty-stat">
            <span className="num">250<span>+</span></span>
            <span className="lbl">CLIENTS</span>
          </div>
          <div className="ty-stat">
            <span className="num">12 Yrs</span>
            <span className="lbl">EXPERIENCE</span>
          </div>
        </div>
      </div>
    </main>
  );
}
