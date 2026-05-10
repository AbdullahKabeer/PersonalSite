import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Activity, Search, Users, CheckCircle, GraduationCap, Building2, TrendingUp, Briefcase, MapPin, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const QuirkyChart = ({ className }) => (
  <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Wobbly price line */}
    <path d="M10,90 Q30,40 50,70 T90,30 T130,80 T170,40 T190,60" 
          strokeDasharray="4 2" 
          className="animate-pulse"
          style={{ filter: 'url(#wobble)' }} />
    
    {/* Sketchy Candlesticks */}
    <rect x="25" y="45" width="4" height="25" rx="1" />
    <line x1="27" y1="40" x2="27" y2="75" />
    
    <rect x="65" y="35" width="4" height="40" rx="1" />
    <line x1="67" y1="30" x2="67" y2="80" />
    
    <rect x="105" y="60" width="4" height="20" rx="1" />
    <line x1="107" y1="55" x2="107" y2="85" />

    {/* Hand-drawn axis */}
    <path d="M5,110 L195,110" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M10,5 L10,115" strokeWidth="1" strokeOpacity="0.3" />

    {/* Small annotations */}
    <text x="140" y="25" className="fill-current font-mono text-[8px] italic opacity-50">EXEC_SIG</text>
    <circle cx="130" cy="80" r="3" fill="currentColor" className="animate-ping" />
    
    <defs>
      <filter id="wobble">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
    </defs>
  </svg>
);

const Projects = () => {
  return (
    <section id="garden" className="py-12 md:py-16 bg-background relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight"
          >
            Fraction of my work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans text-foreground/60 max-w-sm text-right uppercase tracking-widest font-semibold"
          >
            Quantitative models, agentic systems & early-stage startups
          </motion.p>
        </div>

        {/* ALTRUATO CARD (NOW FIRST) */}
        <div className="w-full bg-[#FAFAFA] rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-foreground/5">
          {/* Subtle Background Effects */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-green/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            
            {/* Content Side */}
            <div className="flex flex-col justify-center text-foreground order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-foreground/5 p-1">
                  <img src="/altruatologo.png" alt="Altruato" className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">Altruato</span>
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-medium mb-6 leading-tight"
              >
                The intelligence layer for research.
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-foreground/70 font-sans text-lg mb-8 leading-relaxed"
              >
                Turn discovery into relationships. Designed and built a comprehensive research CRM that allows teams to use natural language to filter, explore, and contact researchers, track grant productivity, and visualize institutional impact.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {['React', 'Node.js', 'LLMs', 'Vector DB', 'PostgreSQL', 'CRM'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white border border-foreground/10 text-foreground/80 text-xs font-mono uppercase tracking-wider shadow-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="https://altruato.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-sans font-semibold text-sm hover:bg-foreground/90 hover:scale-105 transition-all duration-300 group shadow-md"
                >
                  Visit Altruato
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* UI Mockup Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#F8FAFB] border border-slate-200/60 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col min-h-[400px] order-1 lg:order-2 font-sans"
            >
              {/* Search Header */}
              <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 flex items-center gap-3 mb-4">
                <Search className="w-4 h-4 text-slate-400" />
                <div className="text-sm text-slate-700 w-full truncate">
                  "AI researchers at Stanford working on computer vision with recent NSF funding"
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6 ml-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-xs text-slate-500">Processing natural language query... Found 23 researchers</span>
              </div>

              {/* Main Profile Card */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-4 relative">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-sans font-medium text-lg shadow-sm">
                      SC
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-lg text-slate-800">Dr. Sarah Chen</h4>
                      <div className="text-slate-500 text-xs mt-1">
                        Professor of Computer Science
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                        <MapPin className="w-3 h-3" /> Stanford University
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-slate-800">2,847</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Citations</div>
                  </div>
                </div>

                <div className="flex gap-3 mb-6">
                  <div className="bg-[#F8FAFB] rounded-lg p-3 flex-1 text-center">
                    <div className="text-slate-800 font-semibold text-sm">127</div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-wide mt-1">Papers</div>
                  </div>
                  <div className="bg-[#F8FAFB] rounded-lg p-3 flex-1 text-center">
                    <div className="text-slate-800 font-semibold text-sm">$2.4M</div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-wide mt-1">Grants</div>
                  </div>
                  <div className="bg-[#F8FAFB] rounded-lg p-3 flex-1 text-center">
                    <div className="text-slate-800 font-semibold text-sm">42</div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-wide mt-1">H-Index</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-slate-500 mb-2">Research Areas</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F0F5F9] text-[#5C89B5] border border-[#E1EAF2] text-xs rounded-full">Computer Vision</span>
                    <span className="px-3 py-1 bg-[#F0F5F9] text-[#5C89B5] border border-[#E1EAF2] text-xs rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-[#F0F5F9] text-[#5C89B5] border border-[#E1EAF2] text-xs rounded-full">AI Ethics</span>
                  </div>
                </div>
              </div>

              {/* Grant Tracker Card */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-semibold text-slate-800">Active Grants</div>
                  <div className="text-xs text-slate-500">$12.4M Total</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <div>
                        <div className="text-xs font-semibold text-slate-800">AI for Climate Research</div>
                        <div className="text-[10px] text-slate-400">NSF • 2023-2026</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-slate-800">$2.4M</div>
                        <div className="text-[10px] text-teal-500 bg-teal-50 px-2 py-0.5 rounded-full inline-block mt-1">Active</div>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-teal-400 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">65% utilized</div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

        {/* TWO-COLUMN ROW: UVSET + TRADING INFRASTRUCTURE (NOW SECOND) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 md:mt-8">

          {/* UVSET CARD — Left */}
          <div className="w-full bg-[#FAFAFA] rounded-[40px] p-8 md:p-10 relative overflow-hidden shadow-2xl border border-foreground/5 flex flex-col justify-between">
            {/* Subtle purple glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-300/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-violet-400/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img src="/UVSet_logo-with-quote.webp" alt="UVSET" className="h-7 object-contain" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-display font-medium mb-5 leading-tight"
              >
                Intelligent UVC door handle disinfection.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-foreground/70 font-sans text-base mb-8 leading-relaxed flex-grow"
              >
                Co-founded UVSET and engineered SAFETouch — a proximity-triggered device that automatically disinfects door handles after every touch. Recognized among the <span className="font-semibold text-[#7B4FE5]">Top 80 Most Innovative Products</span> at Oslo Innovation Week 2022, supporting United Nations' Sustainable Development Goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {['Hardware', 'UVC Tech', 'IoT', 'Embedded Systems'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white border border-foreground/10 text-foreground/80 text-xs font-mono uppercase tracking-wider shadow-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://uvsetinc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-sans font-semibold text-sm hover:bg-foreground/90 hover:scale-105 transition-all duration-300 group shadow-md"
                >
                  Visit UVSET
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* TRADING INFRASTRUCTURE CARD — Right */}
          <div className="w-full bg-accent-dark rounded-[40px] p-8 md:p-10 relative overflow-hidden shadow-2xl border border-white/5 flex flex-col justify-between">
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                 style={{backgroundImage: 'linear-gradient(#CC5500 0.5px, transparent 0.5px), linear-gradient(90deg, #CC5500 0.5px, transparent 0.5px)', backgroundSize: '32px 32px'}}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Spacer to align titles with UVSET */}
              <div className="h-10 mb-6"></div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-[1.1]"
              >
                Quantitative Tick Execution & Backtesting.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 font-sans text-sm mb-8 leading-relaxed flex-grow"
              >
                High-performance futures trading infrastructure for sub-second tick execution via the TopStepX API. 
                Built a deterministic backtesting engine with NumPy to simulate slippage and latency across historical market regimes. 
                Features an automated risk engine that enforces consistency rules and drawdown limits in real-time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {['Python', 'WebSockets', 'AsyncIO', 'NumPy', 'Execution Logic'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <a 
                  href="https://github.com/AbdullahKabeer/trading-infra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 group border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Source
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            </div>

            {/* Absolute Positioned Quirky Graphic */}
            <div className="absolute bottom-[-20px] right-[-40px] w-64 h-48 pointer-events-none opacity-20">
              <QuirkyChart className="w-full h-full text-primary" />
            </div>
          </div>

        </div>

        {/* ELIMINATING BASIS RISK CARD (NOW THIRD) */}
        <div className="w-full bg-accent-dark rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl mt-6 md:mt-8 border border-white/5">
          {/* Glassmorphic Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-green/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Dark UI Glass Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Terminal className="text-primary w-5 h-5" />
                  <span className="text-white font-mono text-sm">SPUS_HEDGE_V1</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
              </div>

              <div className="space-y-6 flex-grow flex flex-col justify-center">
                <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-green-400 border border-white/5">
                  &gt; Computing American put pricing...<br/>
                  &gt; Model: Barone-Adesi-Whaley (1987)<br/>
                  &gt; Delta Hedge: Active<br/>
                  &gt; Status: OK
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-white/5 rounded-xl p-4 flex-1 border border-white/5">
                    <Database className="w-5 h-5 text-accent-green mb-2" />
                    <div className="text-white/60 text-xs">Components</div>
                    <div className="text-white font-display text-xl">Top 30</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex-1 border border-white/5">
                    <Activity className="w-5 h-5 text-primary mb-2" />
                    <div className="text-white/60 text-xs">Coverage</div>
                    <div className="text-white font-display text-xl">100%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="flex flex-col justify-center text-white">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-display font-medium mb-6 leading-tight"
              >
                Eliminating basis risk for SPUS holders.
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/70 font-sans text-lg mb-8 leading-relaxed"
              >
                Designed and built a quantitative hedging tool that decomposes SPUS into its underlying equity holdings, computing optimal put strategies to offset delta exposure while avoiding Sharia-non-compliant sectors.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {['Python', 'Streamlit', 'yfinance', 'Black-Scholes', 'BAW Model'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs font-mono uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="https://github.com/AbdullahKabeer/spus-options-hedging" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 group border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Source
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Projects;
