import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-pastel-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 space-y-6 text-lg text-slate-600 leading-relaxed"
          >
            <p>
              I am a Finance student at UT Austin with hands-on experience building and financing technology products.
            </p>
            <p>
              I’ve co-founded and led early-stage ventures across AI software and patented hardware, taking ownership of product strategy, pricing, financial modeling, and go-to-market execution. Alongside this, I’ve built quantitative models in trading, risk, and actuarial forecasting, and conducted venture capital valuation research through Cambridge’s CCIR program.
            </p>
            <p>
              Currently exploring product management, venture capital, investment banking, and risk-focused internships where analytical depth and execution matter.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4"
          >
            <div className="glass-panel p-8 bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-yellow/30 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-display">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">The University of Texas at Austin</h4>
                  <p className="text-sm text-slate-500">BBA, Finance, General</p>
                  <p className="text-sm text-slate-400 mt-1">Aug 2025 – May 2028</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-semibold text-primary">University of Cambridge</h4>
                  <p className="text-sm text-slate-500">Research Scholar (CCIR)</p>
                  <p className="text-sm text-slate-400 mt-1">Entrepreneurial Finance & Venture Capital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
