export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">Industrial Architectural Design &amp; Engineering</p>
          <h1>Design, engineer, and <em>build</em> the plant — under one roof.</h1>
          <p className="lead">Adroit Design delivers industrial architectural design, interiors, civil, PEB, MEP, HVAC, FPS, PMC and specialized projects as one integrated engineering and execution team — from feasibility to commissioning.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn solid">Start Your Project</a>
            <a href="#projects" className="btn">View Our Work</a>
          </div>
          <div className="hero-stats">
            <div><span className="num">80+</span><span className="lbl">Industrial Projects</span></div>
            <div><span className="num">18 Lakh+</span><span className="lbl">Sq. Ft. Executed</span></div>
            <div><span className="num">8</span><span className="lbl">Disciplines In-House</span></div>
            <div><span className="num">4-8 Mo</span><span className="lbl">Avg. Shed Delivery</span></div>
          </div>
        </div>
        <div className="truss-box">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <line className="tr-line" x1="20" y1="440" x2="380" y2="440"/>
            <line className="tr-line" x1="40" y1="440" x2="40" y2="80"/>
            <line className="tr-line" x1="360" y1="440" x2="360" y2="80"/>
            <line className="tr-line" x1="40" y1="80" x2="200" y2="20"/>
            <line className="tr-line" x1="360" y1="80" x2="200" y2="20"/>
            <line className="tr-line" x1="40" y1="80" x2="120" y2="140"/>
            <line className="tr-line" x1="120" y1="140" x2="200" y2="20"/>
            <line className="tr-line" x1="200" y1="20" x2="280" y2="140"/>
            <line className="tr-line" x1="280" y1="140" x2="360" y2="80"/>
            <line className="tr-line" x1="120" y1="140" x2="120" y2="440"/>
            <line className="tr-line" x1="280" y1="140" x2="280" y2="440"/>
            <line className="tr-line" x1="200" y1="20" x2="200" y2="440"/>
            <rect className="tr-fill" x="150" y="360" width="100" height="80" opacity="0"/>
          </svg>
          <span className="tag">Structural Frame → PEB Erection</span>
        </div>
      </div>
    </section>
  );
}
