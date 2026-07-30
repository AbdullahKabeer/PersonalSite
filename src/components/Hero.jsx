import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


const FloatingNodes = () => {
  const nodes = [
    { cx: '15%', cy: '20%', r: 2, delay: 0, dur: 4 },
    { cx: '25%', cy: '65%', r: 1.5, delay: 1.2, dur: 4.7 },
    { cx: '8%',  cy: '45%', r: 1, delay: 2.1, dur: 5.4 },
    { cx: '32%', cy: '30%', r: 1.5, delay: 0.7, dur: 3.8 },
    { cx: '20%', cy: '80%', r: 1, delay: 1.8, dur: 5.1 },
    { cx: '5%',  cy: '72%', r: 2, delay: 0.4, dur: 4.3 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill="currentColor" className="text-foreground opacity-20">
          <animate attributeName="opacity" values="0.15;0.45;0.15"
            dur={`${n.dur}s`} begin={`${n.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
};

const statsData = [
  { value: 3,   prefix: '',  suffix: '',   label: 'US Patents' },
  { value: 1,   prefix: '$', suffix: 'M+', label: 'Seed Funding' },
  { value: 5,   prefix: '',  suffix: '+',  label: 'Years Building' },
];

const Counter = ({ value, prefix, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(value);
    };
    const timer = setTimeout(() => requestAnimationFrame(frame), delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-0.5">
      <span className="font-display font-medium text-foreground text-2xl md:text-3xl tracking-tight tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-foreground/40">
        {label}
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-background">

      {/* Left: Full-height vintage hand image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="hidden lg:block relative w-[38%] flex-shrink-0 min-h-screen"
      >
        <img
          src="/vintage_hand.png"
          alt="Vintage pointing hand"
          className="absolute inset-0 w-full h-full object-cover object-right mix-blend-multiply opacity-75"
        />
        <FloatingNodes />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background pointer-events-none" />
      </motion.div>

      {/* Right: Name + description */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 pt-24 pb-16 relative z-10 max-w-[900px]">


        {/* Name */}
        <div className="flex flex-col mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-display font-medium text-foreground leading-[0.9] tracking-tight"
          >
            Abdullah
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-display font-medium text-primary leading-[0.9] tracking-tight ml-4 md:ml-8 italic mt-2"
          >
            Kabeer.
          </motion.h1>
        </div>

        {/* Bold description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border-l-2 border-foreground/25 pl-6 max-w-xl mb-12"
        >
          <p className="font-display text-xl md:text-2xl text-foreground leading-snug font-medium">
            Hardware patent inventor turned quantitative builder.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground/60 leading-snug font-medium mt-2">
            Named on three US patents.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground/40 leading-snug font-medium mt-2">
            Currently scoping next hardware venture in consumer product space.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex gap-6 mb-8 items-center"
        >
          <a 
            href="mailto:abdullahkabeer2007@gmail.com" 
            className="text-foreground/40 hover:text-foreground transition-all duration-300 flex items-center gap-2 group"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/abdullahkabeer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-all duration-300 flex items-center gap-2 group"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/AbdullahKabeer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-all duration-300 flex items-center gap-2 group"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
        </motion.div>

        {/* Stats — above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-8 md:gap-12 border-t border-foreground/10 pt-8"
        >
          {statsData.map((s, i) => (
            <Counter key={i} {...s} delay={1 + i * 0.08} />
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
