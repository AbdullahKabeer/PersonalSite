import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const entries = [
  {
    type: 'work',
    logo: '/altruatologo.png',
    role: 'Co-Founder & Product Owner',
    company: 'Altruato',
    sub: 'Self-employed',
    tenure: 'May 2023 – Present · 3 yrs 1 mo',
    points: [
      'Product Vision & Launch: Directed the end-to-end development of an AI research platform ("Mentiva"), prioritizing features based on user churn data and acquisition cost (CAC) analysis.',
      'Strategic Finance (P&L): Managed corporate financial planning, including P&L forecasting, cloud infrastructure (AWS) budgeting, and pricing strategy optimization to maximize unit economics.',
    ],
  },
  {
    type: 'work',
    logo: '/UVSet_logo-with-quote.webp',
    logoContain: true,
    role: 'Co-Founder & CTO',
    company: 'UVSET Inc',
    sub: 'Full-time · Hybrid',
    tenure: 'Oct 2020 – Present · 5 yrs 8 mos',
    points: [
      'Product Strategy & Execution: Led cross-functional teams to design and prototype "SAFETouch" (patented), managing 5 iterative cycles to optimize user experience and manufacturing feasibility.',
      'Capital & Commercial Strategy: Secured $1M+ in seed funding and a $750K Letter of Intent (LOI) by pitching the product\'s financial value proposition to institutional investors and federal agencies.',
      'Operations & Supply Chain: Orchestrated global supply chain logistics, negotiating contracts with 8+ vendors to reduce production costs by 35% and mitigate supplier risk by 25%.',
    ],
  },
  {
    type: 'work',
    initials: 'SP',
    color: '#1A6B3A',
    role: 'Sales Development Representative',
    company: 'SalikPay',
    sub: 'Internship',
    tenure: 'May 2025 – Aug 2025 · 4 mos',
    points: [
      'Go-to-Market Execution: Executed a direct sales strategy that sourced and onboarded 100+ corporate clients, conducting market research to identify key user pain points.',
      'Financial Structuring: Analyzed merchant transaction volumes to structure custom cash discount programs, directly improving client retention and margins.',
      'Risk Compliance: Conducted financial due diligence (KYC/AML) on merchant accounts to mitigate regulatory risk.',
    ],
  },
  {
    type: 'work',
    initials: 'CM',
    color: '#2563EB',
    role: 'Technology Intern',
    company: 'CardMachineOutlet.com',
    sub: 'Internship · On-site · Plano, TX',
    tenure: 'May 2024 – Aug 2024 · 4 mos',
    points: [
      'Process Automation: Developed Python/Selenium scripts to automate vendor inventory validation, reducing manual data entry time by 94% (from 2 days to 1 hour).',
      'Operational Efficiency: Consolidated inventory listings to optimize stock levels for payment processing equipment, directly supporting the sales operations team.',
    ],
  },
  {
    type: 'work',
    logo: '/ccir.svg',
    logoContain: true,
    role: 'Research Scholar (CCIR)',
    company: 'University of Cambridge',
    sub: 'Entrepreneurial Finance & Venture Capital',
    tenure: '2023 – 2024 · 1 yr',
    points: [
      'Selected for the Cambridge Centre for International Research (CCIR) Future Scholar program.',
      'Research Focus: Conducted independent research on startup valuation and Venture Capital financing strategies under the mentorship of Dr. Keivan Aghasi (Faculty at Cambridge Judge Business School).',
    ],
  },
  {
    type: 'work',
    initials: 'DS',
    color: '#7C3AED',
    role: 'Innovation Facilitator',
    company: 'DiscoverSTEM',
    sub: 'Science and Technology',
    tenure: 'Jan 2020 – Aug 2025 · 5 yrs 8 mos',
    points: [
      'Innovation Strategy: Mentored 60+ students in design thinking and Root Cause Analysis (RCA), directly contributing to 5 successfully filed student patents.',
      'Leadership: Guided student teams through the full invention lifecycle—from ideation to patent filing—fostering a culture of technical problem-solving.',
    ],
  },
  {
    type: 'cert',
    initials: 'TX',
    color: '#B91C1C',
    role: 'Texas State Life Insurance License',
    company: 'National Association of Insurance Commissioners (NAIC)',
    tenure: 'Issued May 2025',
    points: [],
  },
  {
    type: 'cert',
    initials: 'AML',
    color: '#0369A1',
    role: 'Anti-Money Laundering (AML) Certification',
    company: 'SuranceBay',
    tenure: 'Issued Jun 2025',
    points: [],
  },
];

const LogoBlock = ({ entry }) => {
  if (entry.logo) {
    return (
      <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-foreground/5 overflow-hidden p-1">
        <img
          src={entry.logo}
          alt={entry.company}
          className={`max-w-full max-h-full ${entry.logoContain ? 'object-contain' : 'object-cover'}`}
        />
      </div>
    );
  }
  return (
    <div
      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-mono font-bold text-xs"
      style={{ backgroundColor: entry.color }}
    >
      {entry.initials}
    </div>
  );
};

const EntryRow = ({ entry, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="flex gap-5 py-6 border-b border-foreground/8 last:border-0"
  >
    <LogoBlock entry={entry} />

    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <div>
          <span className="font-display font-semibold text-foreground text-base leading-tight">
            {entry.role}
          </span>
          <span className="text-foreground/50 font-sans text-sm"> · {entry.company}</span>
          {entry.sub && (
            <span className="text-foreground/35 font-sans text-xs"> · {entry.sub}</span>
          )}
        </div>
        <span className="text-[11px] font-mono text-foreground/40 uppercase tracking-wider whitespace-nowrap flex-shrink-0">
          {entry.tenure}
        </span>
      </div>

      {entry.points.length > 0 && (
        <ul className="mt-2 space-y-1">
          {entry.points.map((pt, i) => (
            <li key={i} className="text-sm font-sans text-foreground/60 leading-relaxed flex gap-2">
              <span className="text-foreground/25 flex-shrink-0 mt-[2px]">–</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const preview = entries.slice(0, 2);
  const rest = entries.slice(2);

  return (
    <section className="py-12 md:py-16 bg-background relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans text-foreground/60 max-w-sm text-right uppercase tracking-widest font-semibold"
          >
            Work history & credentials
          </motion.p>
        </div>

        {/* Always-visible entries */}
        <div>
          {preview.map((entry, i) => (
            <EntryRow key={i} entry={entry} index={i} />
          ))}
        </div>

        {/* Expandable section */}
        <div
          className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
          style={{ maxHeight: expanded ? `${rest.length * 260}px` : '0px' }}
        >
          <AnimatePresence>
            {expanded && (
              <div>
                {rest.map((entry, i) => (
                  <EntryRow key={i} entry={entry} index={i} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand/collapse button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(v => !v)}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/15 hover:border-foreground/40 text-foreground/60 hover:text-foreground font-sans text-sm font-medium transition-all duration-200"
          >
            <span>{expanded ? 'Show less' : 'View full work history'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;
