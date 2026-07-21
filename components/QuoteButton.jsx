"use client";
import React from 'react';

export default function QuoteButton({ className = "btn solid", style = {} }) {
  const openModal = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openQuoteModal'));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', ...style }}>
      <button className={className} onClick={openModal}>GET A QUOTE</button>
    </div>
  );
}
