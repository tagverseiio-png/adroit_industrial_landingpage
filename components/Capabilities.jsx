import QuoteButton from './QuoteButton';

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What We Deliver</p>
          <h2>Eight disciplines, one integrated project</h2>
          <p>Every capability below is engineered together, not stitched across separate vendors — the way an industrial project actually has to be built.</p>
        </div>
        <div className="cap-grid">
          <div className="cap-card">
            <span className="tag">01 · Architecture</span>
            <h3>Industrial Architectural Design</h3>
            <p>Master planning and architectural design for factories, plants and industrial campuses.</p>
          </div>
          <div className="cap-card">
            <span className="tag">02 · Interiors</span>
            <h3>Interiors</h3>
            <p>Functional interiors for control rooms, admin blocks and industrial office spaces.</p>
          </div>
          <div className="cap-card">
            <span className="tag">03 · Civil</span>
            <h3>Civil</h3>
            <p>Foundation, structural civil works, plinth protection and site infrastructure engineering.</p>
          </div>
          <div className="cap-card">
            <span className="tag">04 · PEB</span>
            <h3>Pre-Engineered Buildings</h3>
            <p>Design and erection of pre-engineered steel structures for fast-track industrial sheds.</p>
          </div>
          <div className="cap-card">
            <span className="tag">05 · MEP</span>
            <h3>Mechanical, Electrical &amp; Plumbing</h3>
            <p>Integrated MEP engineering for power distribution, process piping and plumbing systems.</p>
          </div>
          <div className="cap-card">
            <span className="tag">06 · HVAC</span>
            <h3>HVAC</h3>
            <p>Ventilation, climate control and process cooling systems engineered for industrial environments.</p>
          </div>
          <div className="cap-card">
            <span className="tag">07 · FPS</span>
            <h3>Fire Protection Systems</h3>
            <p>Detection, suppression and life-safety systems compliant with statutory fire codes.</p>
          </div>
          <div className="cap-card">
            <span className="tag">08 · PMC</span>
            <h3>PMC &amp; Specialized Projects</h3>
            <p>Project management consultancy and delivery of complex, specialized industrial projects.</p>
          </div>
        </div>
      </div>
      <QuoteButton />
    </section>
  );
}
