import QuoteButton from './QuoteButton';

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow" style={{ color: 'var(--safety)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--safety)', display: 'inline-block' }}></span>
            FROM CONCEPT TO COMPLETION.
          </p>
          <h2>Our Work Process</h2>
          <p>A disciplined five-phase methodology — refined across hundreds of projects — ensures every build is delivered with precision, on time, and on budget.</p>
        </div>
        
        <div className="process-steps">
          {[
            { num: '01', title: 'Understand', sub: 'PROJECT BRIEF & SITE ASSESSMENT', desc: 'We listen first. Every project begins with a deep-dive into your vision, goals, and site conditions.' },
            { num: '02', title: 'Design', sub: 'DESIGN DEVELOPMENT & COST PLANNING', desc: 'Our architects craft detailed designs, balancing aesthetics with budget precision.' },
            { num: '03', title: 'Engineer', sub: 'DETAILED ENGINEERING & PROCUREMENT', desc: 'Structural and MEP engineers resolve every technical detail before ground breaks.' },
            { num: '04', title: 'Execute', sub: 'PROJECT EXECUTION & MANAGEMENT', desc: 'On-site teams led by experienced project managers keep quality and timelines tight.' },
            { num: '05', title: 'Deliver', sub: 'TESTING, SNAG CLOSURE & HANDOVER', desc: "We don't leave until every snag is resolved and you're fully satisfied." }
          ].map((step, i) => (
            <div className="pstep-wrapper" key={i}>
              <div className="timeline-node">
                <div className="dot"></div>
                {i < 4 && <div className="line-segment"></div>}
              </div>
              <div className="pstep">
                <div className="step-no">{step.num}</div>
                <h4>{step.title}</h4>
                <div className="step-subtitle">{step.sub}</div>
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
