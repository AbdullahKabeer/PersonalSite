import React from 'react';
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

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-24 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <a href="#" className="text-3xl font-display font-bold tracking-tighter text-foreground">
            Abdullah Kabeer.
          </a>
          <p className="font-sans text-foreground/50 mt-4 font-medium uppercase tracking-[0.2em] text-xs">
            Finance & Product @ UT Austin
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-10">
          <a href="mailto:abdullahkabeer2007@gmail.com" className="text-foreground/40 hover:text-foreground transition-all duration-300">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/abdullahkabeer/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-all duration-300">
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/AbdullahKabeer/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-all duration-300">
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-foreground/5 text-center text-[10px] text-foreground/30 font-mono uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Abdullah Kabeer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
