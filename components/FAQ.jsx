"use client";
import { useState } from 'react';
import QuoteButton from './QuoteButton';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      q: "What is PEB and why is it used for industrial sheds?",
      a: "PEB stands for Pre-Engineered Building, a steel structure designed and fabricated off-site to standard specifications, then erected on site. It is faster to build, more cost-predictable and easier to expand than conventional steel construction, which is why it is the default choice for factories, warehouses and industrial sheds."
    },
    {
      q: "What does MEP cover in an industrial project?",
      a: "MEP covers Mechanical, Electrical and Plumbing systems — power distribution, panels and DG backup, process piping, compressed air, plumbing and drainage — engineered to match production load and statutory requirements."
    },
    {
      q: "Does Adroit Design handle statutory and fire safety approvals?",
      a: "Yes. Fire Protection System (FPS) design, statutory fire NOC coordination and life-safety compliance are handled in-house as part of PMC, alongside other regulatory approvals required before occupancy."
    },
    {
      q: "What is PMC and when does a project need it?",
      a: "PMC, or Project Management Consultancy, is independent oversight of cost, schedule and quality across all contractors on a project. It is recommended for large or multi-agency industrial projects where a single point of coordination reduces delays and cost overruns."
    },
    {
      q: "What is the typical timeline for an industrial plant or shed?",
      a: "A PEB shed with civil, MEP, HVAC and FPS typically takes 4 to 8 months depending on built-up area and process complexity, with a detailed engineering and execution schedule shared before work begins."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Industrial projects, explained</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'open' : ''}`} key={idx}>
              <button className="faq-q" onClick={() => toggle(idx)}>
                {faq.q}
                <span className="plus">+</span>
              </button>
              <div className="faq-a" style={{ maxHeight: openIndex === idx ? '500px' : '0' }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteButton text="STILL HAVE QUESTIONS? GET A QUOTE" />
    </section>
  );
}
