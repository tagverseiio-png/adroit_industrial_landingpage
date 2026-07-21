import QuoteButton from './QuoteButton';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Client Feedback</p>
          <h2>What our clients say</h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <p className="quote">"One team handled architecture, steel, MEP and fire safety. We never had to referee between contractors."</p>
            <p className="who">Plant Head, Auto Components Manufacturer</p>
          </div>
          <div className="testi-card">
            <p className="quote">"PEB erection to commissioning ran exactly on the published schedule, floor by floor."</p>
            <p className="who">Operations Director, Logistics Company</p>
          </div>
          <div className="testi-card">
            <p className="quote">"Fire NOC and statutory approvals were handled without a single delay on our side."</p>
            <p className="who">Project Lead, Pharma Manufacturer</p>
          </div>
        </div>
      </div>
      <QuoteButton text="REQUEST YOUR QUOTE TODAY" />
    </section>
  );
}
