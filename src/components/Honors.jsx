import React from 'react';
import { motion } from 'framer-motion';

const TexasCapitolSVG = () => (
  <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" stroke="currentColor">

    {/* ── STAR & LANTERN ── */}
    <polygon points="300,28 303,38 313,38 305,44 308,54 300,48 292,54 295,44 287,38 297,38"
      strokeWidth="1.4" strokeOpacity="0.8" />
    <line x1="300" y1="54" x2="300" y2="68" strokeWidth="1.6" strokeOpacity="0.8" />
    <rect x="290" y="68" width="20" height="22" strokeWidth="1.6" strokeOpacity="0.8" />

    {/* ── DOME ── */}
    <path d="M235,200 C235,120 265,90 300,90 C335,90 365,120 365,200"
      strokeWidth="2" strokeOpacity="0.85" />
    <line x1="262" y1="196" x2="300" y2="90" strokeWidth="0.7" strokeOpacity="0.5" />
    <line x1="281" y1="200" x2="300" y2="90" strokeWidth="0.7" strokeOpacity="0.5" />
    <line x1="319" y1="200" x2="300" y2="90" strokeWidth="0.7" strokeOpacity="0.5" />
    <line x1="338" y1="196" x2="300" y2="90" strokeWidth="0.7" strokeOpacity="0.5" />
    <path d="M247,148 C265,138 335,138 353,148" strokeWidth="0.7" strokeOpacity="0.4" fill="none"/>
    <path d="M239,174 C258,163 342,163 361,174" strokeWidth="0.7" strokeOpacity="0.4" fill="none"/>

    {/* ── DRUM ── */}
    <rect x="235" y="200" width="130" height="28" strokeWidth="1.8" strokeOpacity="0.8" />
    {Array.from({ length: 10 }).map((_, i) => (
      <line key={i}
        x1={235 + i * (130 / 9)} y1="200"
        x2={235 + i * (130 / 9)} y2="228"
        strokeWidth="0.9" strokeOpacity="0.55" />
    ))}

    {/* ── ROTUNDA WALLS ── */}
    <rect x="235" y="228" width="130" height="40" strokeWidth="1.6" strokeOpacity="0.75" />

    {/* ── PEDIMENT ── */}
    <polygon points="188,268 300,228 412,268" strokeWidth="1.8" strokeOpacity="0.85" />
    <rect x="188" y="268" width="224" height="14" strokeWidth="1.8" strokeOpacity="0.8" />

    {/* ── PORTICO COLUMNS ── */}
    {[210, 236, 262, 338, 364, 390].map(x => (
      <rect key={x} x={x - 6} y="282" width="12" height="88" strokeWidth="1.5" strokeOpacity="0.75" />
    ))}
    {[210, 236, 262, 338, 364, 390].map(x => (
      <rect key={x} x={x - 8} y="370" width="16" height="5" strokeWidth="1" strokeOpacity="0.65" />
    ))}

    {/* ── WING PEDIMENTS ── */}
    <polygon points="88,330 168,295 248,330" strokeWidth="1.5" strokeOpacity="0.7" />
    <polygon points="352,330 432,295 512,330" strokeWidth="1.5" strokeOpacity="0.7" />

    {/* ── WING ENTABLATURE ── */}
    <rect x="88" y="330" width="160" height="10" strokeWidth="1.2" strokeOpacity="0.65" />
    <rect x="352" y="330" width="160" height="10" strokeWidth="1.2" strokeOpacity="0.65" />

    {/* ── WING PILASTERS ── */}
    {[108, 135, 162, 189].map(x => (
      <line key={x} x1={x} y1="340" x2={x} y2="375" strokeWidth="1" strokeOpacity="0.55" />
    ))}
    {[411, 438, 465, 492].map(x => (
      <line key={x} x1={x} y1="340" x2={x} y2="375" strokeWidth="1" strokeOpacity="0.55" />
    ))}

    {/* ── WING WALLS ── */}
    <rect x="88" y="340" width="160" height="75" strokeWidth="1.8" strokeOpacity="0.8" />
    <rect x="352" y="340" width="160" height="75" strokeWidth="1.8" strokeOpacity="0.8" />
    <rect x="188" y="375" width="224" height="40" strokeWidth="1.8" strokeOpacity="0.8" />

    {/* ── WING WINDOWS ── */}
    {[104, 132, 160, 188].map(x => (
      <g key={x}>
        <rect x={x} y="355" width="20" height="28" strokeWidth="1" strokeOpacity="0.6" />
        <rect x={x} y="393" width="20" height="22" strokeWidth="1" strokeOpacity="0.6" />
      </g>
    ))}
    {[368, 396, 424, 452].map(x => (
      <g key={x}>
        <rect x={x} y="355" width="20" height="28" strokeWidth="1" strokeOpacity="0.6" />
        <rect x={x} y="393" width="20" height="22" strokeWidth="1" strokeOpacity="0.6" />
      </g>
    ))}

    {/* ── MAIN ENTRANCE ARCH ── */}
    <path d="M270,415 L270,382 Q300,362 330,382 L330,415" strokeWidth="2" strokeOpacity="0.9" />
    <rect x="276" y="388" width="18" height="27" strokeWidth="1" strokeOpacity="0.65" />
    <rect x="306" y="388" width="18" height="27" strokeWidth="1" strokeOpacity="0.65" />

    {/* ── STEPS ── */}
    <rect x="175" y="415" width="250" height="8" strokeWidth="1.4" strokeOpacity="0.7" />
    <rect x="158" y="423" width="284" height="8" strokeWidth="1.2" strokeOpacity="0.55" />
    <rect x="140" y="431" width="320" height="8" strokeWidth="1" strokeOpacity="0.4" />

    {/* ── GROUND LINE ── */}
    <line x1="60" y1="439" x2="540" y2="439" strokeWidth="1" strokeOpacity="0.25" />

    {/* Trees */}
    <ellipse cx="100" cy="408" rx="28" ry="22" strokeWidth="0.9" strokeOpacity="0.25" />
    <line x1="100" y1="430" x2="100" y2="439" strokeWidth="1" strokeOpacity="0.3" />
    <ellipse cx="500" cy="408" rx="28" ry="22" strokeWidth="0.9" strokeOpacity="0.25" />
    <line x1="500" y1="430" x2="500" y2="439" strokeWidth="1" strokeOpacity="0.3" />
  </svg>
);

const Honors = () => {
  return (
    <section className="bg-background relative z-20">
      <div className="w-full mx-auto">

        {/* Texas House Resolution — Watermark Layout */}
        <div className="relative w-full flex flex-col items-center justify-center py-32 md:py-48 overflow-hidden">
            
            {/* Foreground Content centered with graphic behind it */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
              
              {/* Text + Background Graphic Container */}
              <div className="relative flex items-center justify-center mb-10 w-full">
                {/* Background Capitol Graphic — Watermark Focus */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute inset-x-0 top-1/2 -translate-y-[40%] w-full h-[550px] md:h-[650px] text-foreground/20 pointer-events-none -z-10 flex justify-center overflow-hidden"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                  }}
                >
                  <div className="w-auto h-full">
                    <TexasCapitolSVG />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight text-foreground relative z-10"
                >
                  Texas House Resolution.
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-foreground/80 font-sans text-lg md:text-xl leading-relaxed max-w-xl font-medium"
              >
                Honored on the floor of the Texas House of Representatives by{' '}
                <span className="font-semibold text-foreground">Rep. Salman Bhojani (HD-92)</span>{' '}
                at the Texas State Capitol.
              </motion.p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Honors;
