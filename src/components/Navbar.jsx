import React, { useState, useEffect, useRef } from 'react';
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

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show when scrolling up or at top; hide when scrolling down
      if (currentY < 10 || currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm mix-blend-difference transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        
        <div className="flex items-center gap-10">
          <a href="#" className="font-display font-bold text-xl text-white tracking-tight">AK</a>
          
          <div className="hidden md:flex gap-8">
            <a href="#garden" className="text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white uppercase transition-colors">
              Works
            </a>
            <a href="#patents" className="text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white uppercase transition-colors">
              Patents
            </a>
          </div>
        </div>

        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="mailto:abdullahkabeer2007@gmail.com" className="text-white/60 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/abdullahkabeer/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="https://github.com/AbdullahKabeer/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

