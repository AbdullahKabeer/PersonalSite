import React from 'react';
import { motion } from 'framer-motion';

const UTTowerSVG = () => (
  <svg viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">

    {/* ── FLAGPOLE ── */}
    <line x1="150" y1="10" x2="150" y2="35" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M150,12 L172,20 L150,28" strokeWidth="0.8" strokeOpacity="0.5" />

    {/* ── TOP LANTERN (Centered) ── */}
    <rect x="135" y="35" width="30" height="35" strokeWidth="1.2" strokeOpacity="0.8" />
    <line x1="135" y1="52" x2="165" y2="52" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="150" y1="35" x2="150" y2="70" strokeWidth="0.5" strokeOpacity="0.3" />

    {/* ── CORNICE / CROWN ── */}
    <rect x="125" y="70" width="50" height="8" strokeWidth="1.4" strokeOpacity="0.85" />
    <rect x="130" y="78" width="40" height="6" strokeWidth="1" strokeOpacity="0.6" />

    {/* ── BELFRY / CLOCK SECTION (Centered) ── */}
    <rect x="120" y="84" width="60" height="70" strokeWidth="1.5" strokeOpacity="0.85" />
    {/* Arched openings on belfry (Symmetrical) */}
    <path d="M128,95 L128,140 Q128,146 134,146 L136,146 Q142,146 142,140 L142,95" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M158,95 L158,140 Q158,146 164,146 L166,146 Q172,146 172,140 L172,95" strokeWidth="1" strokeOpacity="0.7" />
    <line x1="120" y1="115" x2="180" y2="115" strokeWidth="0.7" strokeOpacity="0.4" />

    {/* ── CLOCK FACE (Centered) ── */}
    <circle cx="150" cy="105" r="9" strokeWidth="0.9" strokeOpacity="0.7" />
    {/* Tick marks */}
    {[0, 90, 180, 270].map(deg => {
      const rad = (deg * Math.PI) / 180;
      return (
        <line key={deg}
          x1={150 + Math.sin(rad) * 6} y1={105 - Math.cos(rad) * 6}
          x2={150 + Math.sin(rad) * 9} y2={105 - Math.cos(rad) * 9}
          strokeWidth="0.8" strokeOpacity="0.6" />
      );
    })}
    {/* Hands */}
    <line x1="150" y1="105" x2="150" y2="98" strokeWidth="1" strokeOpacity="0.8" />
    <line x1="150" y1="105" x2="156" y2="107" strokeWidth="0.8" strokeOpacity="0.7" />

    {/* ── CORNICE BELOW BELFRY ── */}
    <rect x="115" y="154" width="70" height="7" strokeWidth="1.4" strokeOpacity="0.85" />
    <rect x="120" y="161" width="60" height="4" strokeWidth="0.8" strokeOpacity="0.5" />

    {/* ── UPPER SHAFT (Centered, w=74) ── */}
    <rect x="113" y="165" width="74" height="130" strokeWidth="1.5" strokeOpacity="0.85" />
    {/* Symmetrical window rows */}
    {[175, 210, 245, 275].map(y => (
      <g key={y}>
        <rect x="121" y={y} width="12" height="18" strokeWidth="0.8" strokeOpacity="0.5" />
        <rect x="144" y={y} width="12" height="18" strokeWidth="0.8" strokeOpacity="0.5" />
        <rect x="167" y={y} width="12" height="18" strokeWidth="0.8" strokeOpacity="0.5" />
      </g>
    ))}

    {/* ── MID CORNICE ── */}
    <rect x="105" y="295" width="90" height="8" strokeWidth="1.4" strokeOpacity="0.85" />
    <rect x="110" y="303" width="80" height="4" strokeWidth="0.8" strokeOpacity="0.5" />

  </svg>
);

const educationData = [
  {
    logo: '/University_of_Texas_at_Austin_logo.svg.png',
    institution: 'The University of Texas at Austin',
    school: 'McCombs School of Business',
    degree: 'BBA Finance',
    tag: 'Undergraduate',
    hoverColor: 'hover:text-[#BF5700]',
  },
  {
    logo: '/ccir.svg',
    institution: 'University of Cambridge',
    school: 'Cambridge Centre for Innovation & Research',
    degree: 'Venture Capital Research',
    tag: 'Research Scholar · CCIR',
    hoverColor: 'hover:text-[#003D6B]',
  },
];

const Education = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative z-20 overflow-hidden">
      
      {/* Background Graphic — Larger & More Present on Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[-40px] md:left-[-150px] top-[25%] w-[600px] md:w-[850px] text-foreground/5 md:text-foreground/10 pointer-events-none -z-10 flex flex-col justify-start overflow-hidden"
      >
        <div className="h-full w-full">
          <UTTowerSVG />
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Block — Restored to Left Alignment */}
        <div className="mb-24 flex flex-col items-start text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium text-foreground tracking-tight mb-4"
          >
            Education.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="h-[1px] w-24 bg-foreground/20 origin-left mb-6"
          />
        </div>

        {/* Education Entries — Pushed Right */}
        <div className="flex flex-col gap-16 max-w-none ml-0 md:ml-[150px]">
          {educationData.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* Visual Anchor (Logo + Tag) */}
                <div className="lg:col-span-4 flex flex-col gap-3 pt-2">
                  <div className="h-20 md:h-32 w-auto flex items-center">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-[1px] bg-foreground/20"></div>
                    <span className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-bold">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="lg:col-span-8">
                  <h3 className={`text-4xl md:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6 transition-all duration-500 md:whitespace-nowrap ${item.hoverColor}`}>
                    {item.degree}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-display text-foreground/70 tracking-tight md:whitespace-nowrap">
                      {item.institution}
                    </p>
                    <p className="text-sm font-sans text-foreground/40 uppercase tracking-widest font-semibold md:whitespace-nowrap">
                      {item.school}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
