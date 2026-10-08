import React from 'react';
import { ArrowUp, ShieldCheck, Linkedin, Mail } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-emerald-500/20 bg-[#0A0E1A]/90 backdrop-blur-xl py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-emerald-500/15">
          
          {/* Brand */}
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-emerald-500/40 backdrop-blur-md flex items-center justify-center font-black text-emerald-400 text-sm shadow-inner">
              SG
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">Sathish Ganesh</span>
              <p className="text-xs text-slate-300">
                Talent Acquisition Leader &bull; Talent Intelligence &bull; AI-Enabled Recruiting
              </p>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button 
              onClick={() => scrollTo('capabilities')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollTo('impact')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollTo('spectrum')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Hiring Spectrum
            </button>
            <button 
              onClick={() => scrollTo('intelligence')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Talent Intelligence
            </button>
            <button 
              onClick={() => scrollTo('approach')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              My Approach
            </button>
            <button 
              onClick={() => scrollTo('journey')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Career Evolution
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            id="btn-footer-back-to-top"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs font-bold text-slate-200 hover:text-white hover:border-emerald-500/60 backdrop-blur-md transition-all cursor-pointer shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Footer Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Sathish Ganesh. All rights reserved. Executive Leadership Portfolio.
          </p>
          <div className="flex items-center space-x-5">
            <a 
              href={`mailto:${HERO_DATA.email}`} 
              className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email</span>
            </a>
            <a 
              href={HERO_DATA.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
