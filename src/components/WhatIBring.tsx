import React from 'react';
import { 
  Compass, 
  SearchCheck, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Target
} from 'lucide-react';
import { WHAT_I_BRING_DATA } from '../data/portfolioData';

export const WhatIBring: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-400" />;
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-teal-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      default: return <Target className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What I Bring to the Table.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Operating as an executive Talent Acquisition Leader who bridges business strategy, market intelligence, high-velocity execution, and modern AI enablement.
          </p>
        </div>

        {/* 6 Static Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHAT_I_BRING_DATA.map((item) => (
            <div
              key={item.id}
              id={`capability-card-${item.id}`}
              className="glass-card p-5 sm:p-7 flex flex-col justify-between"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900/80 border border-emerald-500/20 backdrop-blur-md flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-emerald-400/90 tracking-wide uppercase mb-2.5">
                  {item.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights & Capability Tags */}
              <div className="pt-3 sm:pt-4 border-t border-emerald-500/10">
                <div className="flex flex-wrap gap-1.5">
                  {item.toolkit.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900/60 text-slate-300 border border-emerald-500/15 backdrop-blur-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
