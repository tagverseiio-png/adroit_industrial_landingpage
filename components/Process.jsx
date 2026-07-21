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
        
        <div className="process-timeline-container">
          <div className="process-timeline-line"></div>
          <div className="process-timeline-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="process-steps">
          <div className="pstep">
            <div className="step-no">01</div>
            <h4>Understand</h4>
            <div className="step-subtitle">PROJECT BRIEF & SITE ASSESSMENT</div>
            <p>We listen first. Every project begins with a deep-dive into your vision, goals, and site conditions.</p>
          </div>
          <div className="pstep">
            <div className="step-no">02</div>
            <h4>Design</h4>
            <div className="step-subtitle">DESIGN DEVELOPMENT & COST PLANNING</div>
            <p>Our architects craft detailed designs, balancing aesthetics with budget precision.</p>
          </div>
          <div className="pstep">
            <div className="step-no">03</div>
            <h4>Engineer</h4>
            <div className="step-subtitle">DETAILED ENGINEERING & PROCUREMENT</div>
            <p>Structural and MEP engineers resolve every technical detail before ground breaks.</p>
          </div>
          <div className="pstep">
            <div className="step-no">04</div>
            <h4>Execute</h4>
            <div className="step-subtitle">PROJECT EXECUTION & MANAGEMENT</div>
            <p>On-site teams led by experienced project managers keep quality and timelines tight.</p>
          </div>
          <div className="pstep">
            <div className="step-no">05</div>
            <h4>Deliver</h4>
            <div className="step-subtitle">TESTING, SNAG CLOSURE & HANDOVER</div>
            <p>We don't leave until every snag is resolved and you're fully satisfied.</p>
          </div>
        </div>
      </div>
      <QuoteButton text="START YOUR PROJECT NOW" />
    </section>
  );
}
