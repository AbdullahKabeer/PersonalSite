import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box } from 'lucide-react';

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="works" className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <Box className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight">
            Step into my home
          </h2>
        </div>

        <div ref={containerRef} className="w-full max-w-4xl mx-auto space-y-32 relative">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 w-full h-[500px] bg-[#EBEBE6] rounded-[40px] p-8 shadow-xl border border-foreground/5 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transform origin-top"
          >
            <div className="md:w-1/2">
               <h3 className="text-3xl font-display font-bold mb-4">SPUS Hedging Tool</h3>
               <p className="text-foreground/70 font-sans leading-relaxed">
                 A quantitative web application for constructing options-based hedges on SPUS using listed options on its underlying components.
               </p>
            </div>
            <div className="md:w-1/2 h-full rounded-2xl overflow-hidden bg-white/50 backdrop-blur shadow-inner p-4">
               <img src="/glass_cubes.png" alt="3D Glass Cubes" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-40 w-full h-[500px] bg-accent-dark rounded-[40px] p-8 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transform origin-top border border-foreground/10"
          >
            <div className="md:w-1/2 text-white">
               <h3 className="text-3xl font-display font-bold mb-4">Mentiva</h3>
               <p className="text-white/70 font-sans leading-relaxed">
                 Directed the end-to-end development of an AI research platform at Altruato, prioritizing features based on user churn data.
               </p>
            </div>
            <div className="md:w-1/2 h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur shadow-inner p-4 border border-white/10">
               <img src="/dark_ui.png" alt="Dark UI" className="w-full h-full object-contain drop-shadow-2xl rounded-xl" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-48 w-full h-[500px] bg-primary rounded-[40px] p-8 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transform origin-top border border-foreground/10"
          >
            <div className="md:w-1/2 text-white">
               <h3 className="text-3xl font-display font-bold mb-4">Hardware Innovation</h3>
               <p className="text-white/80 font-sans leading-relaxed">
                 Led cross-functional teams in hardware prototyping and secured seed funding for global logistics and manufacturing at UVSET.
               </p>
            </div>
            <div className="md:w-1/2 h-full rounded-2xl overflow-hidden bg-white/20 backdrop-blur shadow-inner p-4 border border-white/20">
               <img src="/vintage_hand.png" alt="Vintage Hand" className="w-full h-full object-cover rounded-xl mix-blend-multiply opacity-90" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
