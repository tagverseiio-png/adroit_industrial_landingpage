"use client";
import React from 'react';

export default function QuoteButton({ className = "btn solid", style = {}, text = "GET A QUOTE" }) {
  const openModal = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openQuoteModal'));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', ...style }}>
      <button className={className} onClick={openModal}>{text}</button>
    </div>
  );
}
