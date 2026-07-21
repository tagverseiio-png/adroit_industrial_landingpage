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
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/auto_plant_new.jpg" alt="Auto Component Plant" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>PEB</span>
            </div>
            <div className="proj-info"><h4>Auto Component Plant, 65,000 sq.ft.</h4><p>PEB Shed · Civil · MEP</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/warehouse.png" alt="Logistics Warehouse" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>Warehouse</span>
            </div>
            <div className="proj-info"><h4>Logistics &amp; Distribution Warehouse</h4><p>Civil · PEB · Fire Protection</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/pharma_facility.png" alt="Pharma Process Facility" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>Process Plant</span>
            </div>
            <div className="proj-info"><h4>Pharma Process Facility</h4><p>MEP · HVAC · PMC</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/auto_plant.png" alt="FMCG Manufacturing Unit" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>Manufacturing</span>
            </div>
            <div className="proj-info"><h4>FMCG Manufacturing Unit</h4><p>Architecture · Civil · MEP</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/utility_substation.png" alt="Utility & Substation Building" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>Utility Block</span>
            </div>
            <div className="proj-info"><h4>Utility &amp; Substation Building</h4><p>Civil · Electrical · HVAC</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/cold_storage.png" alt="Cold Storage & Specialized Facility" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag" style={{ position: 'relative', zIndex: 1 }}>Specialized</span>
            </div>
            <div className="proj-info"><h4>Cold Storage &amp; Specialized Facility</h4><p>PEB · HVAC · FPS · PMC</p></div>
          </div>
        </div>
      </div>
      <QuoteButton text="GET A PROJECT QUOTE" />
    </section>
  );
}
