import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Search, 
  Layers, 
  CheckCircle2,
  Globe,
  Award,
  ChevronDown
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
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
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Ambient Gradient Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Executive Frosted Glass Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-black/40 animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">{HERO_DATA.name}</span>
            <span className="text-emerald-500/40">|</span>
            <span className="text-slate-300 font-normal">16+ Years Experience</span>
          </div>

          {/* Title & Positioning */}
          <div className="space-y-4">
            <p className="text-[11px] sm:text-sm md:text-base font-bold tracking-widest text-emerald-500 uppercase px-2">
              Talent Acquisition Leader &bull; Talent Intelligence &bull; AI-Enabled Recruiting
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto px-2">
              Building Talent Functions <br className="hidden sm:inline" />
              That <span className="text-emerald-500 text-shadow-sm">Scale Businesses.</span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            {HERO_DATA.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-cta-impact"
              onClick={() => scrollTo('impact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 group cursor-pointer"
            >
              <span>Explore Impact</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-connect"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/60 backdrop-blur-md hover:bg-slate-900 text-emerald-400 hover:text-emerald-300 font-bold text-sm uppercase tracking-wider border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Executive Pillars Visual Matrix */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="glass-card glass-card-hover p-4 text-left">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">TA Strategy</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">
                Operating models, scorecards & stakeholder advisory
              </p>
            </div>

            <div className="glass-card glass-card-hover p-4 text-left">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1.5">
                <Search className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Talent Intel</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">
                Market mapping, salary benchmarking & talent density
              </p>
            </div>

            <div className="glass-card glass-card-hover p-4 text-left">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1.5">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">AI Sourcing</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">
                Boolean generation & modern automation workflows
              </p>
            </div>

            <div className="glass-card glass-card-hover p-4 text-left">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1.5">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Scaled Growth</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">
                Offshore, onshore & high-volume hiring execution
              </p>
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="pt-6">
            <button 
              onClick={() => scrollTo('capabilities')}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-emerald-400 transition-colors animate-bounce"
              aria-label="Scroll to What I Bring"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
