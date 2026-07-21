import QuoteButton from './QuoteButton';

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div>
          <p className="eyebrow">Why Industrial Clients Choose Adroit</p>
          <h2 style={{fontSize: "clamp(25px,2.8vw,34px)", marginBottom: "34px", textTransform: "uppercase"}}>One engineering firm, not eight subcontractors to coordinate.</h2>
          <div className="why-list">
            <div className="why-item">
              <span className="mark">→</span>
              <div><h4>All eight disciplines in-house</h4><p>Architecture, civil, PEB, MEP, HVAC and FPS engineered together, not outsourced piecemeal.</p></div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div><h4>Clash-checked before construction</h4><p>Structure, ducting, piping and electrical are coordinated on drawing before site work starts.</p></div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div><h4>Statutory &amp; fire compliance built in</h4><p>FPS design and approval coordination are part of every project, not an afterthought.</p></div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div><h4>PMC oversight on every project</h4><p>Independent tracking of cost, schedule and quality, reported on a fixed weekly cadence.</p></div>
            </div>
          </div>
        </div>
        <div className="why-visual">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Industrial pre-engineered steel building structure by Adroit Design" loading="lazy" />
        </div>
      </div>
      <QuoteButton />
    </section>
  );
}
