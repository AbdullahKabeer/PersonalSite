import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, prefix: '', suffix: '', label: 'US Patents Granted' },
  { value: 1, prefix: '$', suffix: 'M+', label: 'Raised in Seed Funding' },
  { value: 5, prefix: '', suffix: '+', label: 'Years Building' },
  { value: 100, prefix: '', suffix: '+', label: 'Clients Onboarded' },
];

const Counter = ({ value, prefix, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(value);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-1">
      <span className="font-display font-medium text-foreground text-5xl md:text-6xl tracking-tight">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/45 font-semibold">
        {label}
      </span>
    </div>
  );
};

const Stats = () => (
  <section className="py-12 md:py-16 border-b border-foreground/8 bg-background">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Counter {...s} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
