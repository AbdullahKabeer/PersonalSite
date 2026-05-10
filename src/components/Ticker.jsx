import React, { useEffect, useRef, useState } from 'react';

const items = [
  '$1M+ Raised',
  '3 US Patents',
  'CTO · UVSET',
  'Cambridge Scholar',
  'Quantitative Builder',
  'Austin, TX',
  '60+ Students Mentored',
  '100+ Clients Onboarded',
  'Hardware → Software',
  'Grid-Aware AI Infrastructure',
  'McCombs BBA Finance',
  '5 Patents Filed',
  'SAFETouch · Patented',
  'Seed Stage → Growth',
];

const TickerTrack = () => (
  <div className="flex items-center gap-0 animate-ticker whitespace-nowrap">
    {[...items, ...items].map((item, i) => (
      <span key={i} className="inline-flex items-center gap-6 px-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground/50">
          {item}
        </span>
        <span className="text-foreground/20 text-xs">✦</span>
      </span>
    ))}
  </div>
);

const Ticker = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-foreground/8 py-3 bg-background">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <TickerTrack />
    </div>
  );
};

export default Ticker;
