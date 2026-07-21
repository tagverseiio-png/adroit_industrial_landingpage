import QuoteButton from './QuoteButton';

export default function Projects() {
  return (
    <section className="portfolio" id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Industrial &amp; specialized projects</h2>
          <p>A cross-section of plants, sheds and process facilities engineered and delivered by Adroit Design.</p>
        </div>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">PEB</span></div>
            <div className="proj-info"><h4>Auto Component Plant, 65,000 sq.ft.</h4><p>PEB Shed · Civil · MEP</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Warehouse</span></div>
            <div className="proj-info"><h4>Logistics &amp; Distribution Warehouse</h4><p>Civil · PEB · Fire Protection</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Process Plant</span></div>
            <div className="proj-info"><h4>Pharma Process Facility</h4><p>MEP · HVAC · PMC</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Manufacturing</span></div>
            <div className="proj-info"><h4>FMCG Manufacturing Unit</h4><p>Architecture · Civil · MEP</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Utility Block</span></div>
            <div className="proj-info"><h4>Utility &amp; Substation Building</h4><p>Civil · Electrical · HVAC</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Specialized</span></div>
            <div className="proj-info"><h4>Cold Storage &amp; Specialized Facility</h4><p>PEB · HVAC · FPS · PMC</p></div>
          </div>
        </div>
      </div>
      <QuoteButton />
    </section>
  );
}
