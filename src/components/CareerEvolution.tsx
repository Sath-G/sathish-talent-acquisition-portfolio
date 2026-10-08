import React from 'react';
import { 
  Code2, 
  Search, 
  Layers, 
  Crown, 
  TrendingUp
} from 'lucide-react';
import { CAREER_EVOLUTION_DATA } from '../data/portfolioData';

export const CareerEvolution: React.FC = () => {
  const getStageIcon = (stageNumber: string) => {
    switch (stageNumber) {
      case '01': return <Code2 className="w-5 h-5" />;
      case '02': return <Search className="w-5 h-5" />;
      case '03': return <Layers className="w-5 h-5" />;
      case '04': return <Crown className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Career Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Technology to Talent Acquisition Leadership.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A 16+ year evolution grounding executive recruiting in technical fluency, global search precision, multi-segment program execution, and scalable function architecture.
          </p>
        </div>

        {/* Progression Metric Anchors (Scope, Complexity, Leadership, Business Impact) */}
        <div className="mb-8 sm:mb-10 p-4 glass-card border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">GROWTH VECTORS:</span>
            <span className="text-emerald-400 font-bold">Scope</span>
            <span className="text-emerald-500/40">→</span>
            <span className="text-teal-400 font-bold">Complexity</span>
            <span className="text-emerald-500/40">→</span>
            <span className="text-emerald-400 font-bold">Leadership</span>
            <span className="text-emerald-500/40">→</span>
            <span className="text-emerald-300 font-bold">Business Impact</span>
          </div>
          <span className="text-slate-300 text-[11px]">
            16+ Years Experience Across Global Markets
          </span>
        </div>

        {/* Career Progression Pathway Grid (4 Stages - Static & Concise) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAREER_EVOLUTION_DATA.map((stage) => (
            <div
              key={stage.stageNumber}
              id={`career-stage-${stage.stageNumber}`}
              className="p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs bg-slate-900/80 text-emerald-400 border border-emerald-500/30">
                    {getStageIcon(stage.stageNumber)}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    STAGE {stage.stageNumber}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-emerald-400 block mb-1">
                  {stage.timeframe}
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {stage.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">Core Focus</span>
                <span className="text-emerald-400/90 font-mono font-semibold text-right">
                  {stage.focusArea}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
