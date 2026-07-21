import QuoteButton from './QuoteButton';

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrap intro-grid">
        <div>
          <p className="eyebrow">Trusted By Industrial &amp; Manufacturing Clients</p>
          <h2>One engineering team, every discipline, one point of accountability.</h2>
        </div>
        <div>
          <div className="intro-copy">
            <p>Adroit Design is an industrial architectural design and engineering firm built for plants, factories and process facilities where multiple disciplines have to work as one system, not eight separate contracts. We plan and design the building, engineer the civil and steel structure, and integrate MEP, HVAC and fire protection before a single foundation is poured.</p>
            <p>That integration is what prevents the usual industrial project failure mode — ducting clashing with steel, panels undersized for load, fire systems bolted on at the end. Our clients get one drawing set, one schedule, and one team accountable for how it all comes together on site.</p>
          </div>
          <div className="intro-figures">
            <div className="fig"><div className="num">12+</div><div className="lbl">Years in Practice</div></div>
            <div className="fig"><div className="num">45+</div><div className="lbl">Industrial Clients</div></div>
            <div className="fig"><div className="num">8</div><div className="lbl">Disciplines, One Team</div></div>
            <div className="fig"><div className="num">4-8</div><div className="lbl">Month Avg. Delivery</div></div>
          </div>
        </div>
      </div>
      <QuoteButton text="GET AN INDUSTRIAL QUOTE" />
    </section>
  );
}
