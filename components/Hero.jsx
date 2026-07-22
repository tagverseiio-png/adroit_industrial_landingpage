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
        <div className="hero-image-wrapper">
          <img
            src="/hero image.png"
            alt="Adroit Industrial Building"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
