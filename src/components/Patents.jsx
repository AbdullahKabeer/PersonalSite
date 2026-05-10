import React from 'react';
import { motion } from 'framer-motion';

const patents = [
  {
    name: "Drowsy Driver Detection",
    patent: "US11433916B1 · Granted 2022",
    title: "System to generate an alert to wake a driver of a vehicle and a method thereof",
    abstract: "A system to generate an alert to wake a driver of a vehicle comprises at least one camera configured to sense EEG signals from the driver and a processing module, connected to the at least one camera, to process the EEG signals and to generate alarms.",
    image: "/wireframe_car_v2.png"
  },
  {
    name: "Color-Blind Disambiguation",
    patent: "US20240074653A1 · Published 2024",
    title: "System and a method for color-blind person to distinguish colors in a surrounding",
    abstract: "The present disclosure envisages a system for facilitating a color-blind person to accurately distinguish between certain shades of color in a surrounding. The system comprises an eye frame configured to obtain a plurality of information corresponding to each object present in the surrounding and a handheld device configured to cooperate with said eye frame through a communication network to receive the plurality of information corresponding to each object. The handheld device is configured to process the plurality of information for facilitating a color-blind person to accurately distinguish between certain shades of color in the surrounding.",
    image: "/wireframe_glasses_v2.png"
  },
  {
    name: "Mold Prevention Apparatus",
    patent: "US20250264894A1 · Published 2025",
    title: "Apparatus and method for preventing mold growth",
    abstract: "An apparatus, a method, and an insulated module to control mold growth is provided. The apparatus includes an enclosing structure defining a chamber therewithin to receive an insulation layer, a projection array comprising projections extending within the insulation layer, a heating element mechanically coupled with the enclosing structure to generate heat to cause the enclosing structure to conduct heat to the insulation layer, and a controller communicatively coupled with humidity sensor and the heating element. The enclosing structure is made of a heat conductive element. At least some of the projections are configured to host the humidity sensor to measure humidity data of the insulation layer. The controller is configured to generate a control signal to trigger the heating element based on a comparison between the humidity data and a humidity threshold.",
    image: "/wireframe_house_v2.png"
  }
];

const Patents = () => {
  return (
    <section id="patents" className="py-12 md:py-16 bg-background relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-8 md:mb-12 flex flex-col justify-center items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-4"
          >
            Intellectual Property
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-sans text-foreground/60 max-w-2xl font-medium"
          >
            Three US patents. Filed first at age 14 with technical
            mentor Mirza Faizan. Span driver safety, accessibility, and
            environmental control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-[400px] lg:h-[550px] bg-[#EBEBE6] rounded-[40px] overflow-hidden shadow-sm border border-foreground/5 group hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
            >
              {/* Background Image Wrapper */}
              <div className={`absolute inset-0 z-0 ${index === 2 ? 'p-6 lg:p-8 pt-10 lg:pt-12' : ''}`}>
                <img
                  src={patent.image}
                  alt={patent.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out mix-blend-multiply ${index === 2 ? 'shadow-sm group-hover:scale-105 origin-center' : 'group-hover:scale-105'
                    }`}
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 transition-opacity duration-500 z-0"></div>

              {/* Hover Darken Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 border border-white/5"></div>

              {/* Text Overlay (No Box, Transparent) */}
              <div className="relative z-10 w-full p-8 lg:p-10 flex flex-col justify-end h-full">
                <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-1 leading-tight drop-shadow-md">
                    {patent.name}
                  </h3>
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">
                    {patent.patent}
                  </p>

                  {/* Abstract Content - slides up on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="pt-4">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-white rounded-sm border border-white/10">
                          Abstract
                        </div>
                        <p className="font-sans text-white/90 leading-relaxed text-xs lg:text-sm drop-shadow-sm">
                          {patent.abstract}
                        </p>
                      </div>
                    </div>
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

export default Patents;
