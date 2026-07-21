import QuoteButton from './QuoteButton';

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How An Industrial Project Runs</p>
          <h2>Four stages, one integrated team</h2>
          <p>This is the actual sequence every Adroit Design industrial project follows, from feasibility to commissioning.</p>
        </div>
      </div>
      <div className="process-steps">
        <div className="pstep">
          <div className="step-no">01</div>
          <h4>Feasibility &amp; Site Study</h4>
          <p>Site survey, soil investigation, statutory checks and process brief before any design work begins.</p>
        </div>
        <div className="pstep">
          <div className="step-no">02</div>
          <h4>Multidisciplinary Design</h4>
          <p>Architecture, civil, PEB, MEP, HVAC and FPS designed together and clash-checked before approval.</p>
        </div>
        <div className="pstep">
          <div className="step-no">03</div>
          <h4>Approvals &amp; PMC</h4>
          <p>Statutory and fire approvals coordinated in parallel with PMC oversight of cost and schedule.</p>
        </div>
        <div className="pstep">
          <div className="step-no">04</div>
          <h4>Execution &amp; Commissioning</h4>
          <p>Civil, PEB erection, MEP, HVAC and FPS installation, testing and handover of a commissioned facility.</p>
        </div>
      </div>
      <QuoteButton text="START YOUR PROJECT NOW" />
    </section>
  );
}
