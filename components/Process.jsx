import QuoteButton from './QuoteButton';

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">From Concept to Completion</p>
          <h2>Our Work Process</h2>
          <p>This is the actual sequence every Adroit Design industrial project follows, from feasibility to commissioning.</p>
        </div>
        
        <div className="process-steps">
          {[
            { num: '01', title: 'Feasibility & Site Study', desc: 'Site survey, soil investigation, statutory checks and process brief before any design work begins.' },
            { num: '02', title: 'Multidisciplinary Design', desc: 'Architecture, civil, PEB, MEP, HVAC and FPS designed together and clash-checked before approval.' },
            { num: '03', title: 'Approvals & PMC', desc: 'Statutory and fire approvals coordinated in parallel with PMC oversight of cost and schedule.' },
            { num: '04', title: 'Execution & Commissioning', desc: 'Civil, PEB erection, MEP, HVAC and FPS installation, testing and handover of a commissioned facility.' }
          ].map((step, i) => (
            <div className="pstep-wrapper" key={i}>
              <div className="timeline-node">
                <div className="dot"></div>
                {i < 3 && <div className="line-segment"></div>}
              </div>
              <div className="pstep">
                <div className="step-no">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteButton text="START YOUR PROJECT NOW" />
    </section>
  );
}
