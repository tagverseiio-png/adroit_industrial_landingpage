import QuoteButton from './QuoteButton';

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrap">
        <div style={{ marginBottom: '40px' }}>
          <p className="eyebrow">Trusted By Industrial &amp; Manufacturing Clients</p>
          <h2 style={{ maxWidth: '100%', fontSize: 'clamp(20px, 2.8vw, 34px)', letterSpacing: '-0.02em' }}>One engineering team, every discipline, one point of accountability.</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-visual" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <img 
              src="/auto_plant_new.jpg" 
              alt="Industrial Plant" 
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(18,22,26,0.1)' }} 
            />
            <div className="intro-figures">
              <div className="fig" style={{ padding: '20px 14px' }}><div className="num" style={{ fontSize: '24px' }}>12+</div><div className="lbl" style={{ fontSize: '9px' }}>Years in Practice</div></div>
              <div className="fig" style={{ padding: '20px 14px' }}><div className="num" style={{ fontSize: '24px' }}>45+</div><div className="lbl" style={{ fontSize: '9px' }}>Industrial Clients</div></div>
              <div className="fig" style={{ padding: '20px 14px' }}><div className="num" style={{ fontSize: '24px' }}>8</div><div className="lbl" style={{ fontSize: '9px' }}>Disciplines, One Team</div></div>
              <div className="fig" style={{ padding: '20px 14px' }}><div className="num" style={{ fontSize: '24px' }}>4-8</div><div className="lbl" style={{ fontSize: '9px' }}>Month Avg. Delivery</div></div>
            </div>
          </div>
          <div className="intro-copy">
            <p>Adroit Design is an industrial architectural design and engineering firm built for plants, factories and process facilities where multiple disciplines have to work as one system, not eight separate contracts. We plan and design the building, engineer the civil and steel structure, and integrate MEP, HVAC and fire protection before a single foundation is poured.</p>
            <p>That integration is what prevents the usual industrial project failure mode — ducting clashing with steel, panels undersized for load, fire systems bolted on at the end. Our clients get one drawing set, one schedule, and one team accountable for how it all comes together on site.</p>
          </div>
        </div>
      </div>
      <QuoteButton text="GET AN INDUSTRIAL QUOTE" />
    </section>
  );
}
