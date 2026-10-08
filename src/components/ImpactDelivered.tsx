import React from 'react';
import { 
  DollarSign, 
  Users, 
  UserCheck, 
  TrendingDown, 
  Sparkles, 
  Award, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactDelivered: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 relative bg-slate-950/60 border-y border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Measurable Impact Delivered.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Evidence-based outcomes across function building, global scaling, cost optimization, diversity expansion, and funnel efficiency.
          </p>
        </div>

        {/* Highlight Banner / Built TA Function Anchor Card */}
        <div className="mb-8 p-6 sm:p-8 glass-card border border-emerald-500/30 shadow-xl shadow-black/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                Zero-to-One Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Built TA Function
              </h3>
              <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-1">
                End-to-End Recruitment Infrastructure
              </p>
            </div>
            <div className="lg:col-span-8 text-slate-300 text-sm sm:text-base leading-relaxed border-t lg:border-t-0 lg:border-l border-emerald-500/20 pt-4 lg:pt-0 lg:pl-6">
              Established hiring strategies, operating models, interview scorecards, SLA tracking and onboarding frameworks from the ground up, creating a scalable talent engine to support rapid business growth.
            </div>
          </div>
        </div>

        {/* Primary 6 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* $18M Cost Saving */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Financial Impact
                </span>
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                $18M
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Recruitment Cost Savings
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Delivered $18M in recruitment cost savings through a strategic offshore hiring model and in-house sourcing capability.
              </p>
            </div>
          </div>

          {/* 700–800 Hires */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  High-Volume Scale
                </span>
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                700–800
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Annual Hires Managed
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Annual hiring programs managed across multiple business functions, specialist technical segments, and operational units.
              </p>
            </div>
          </div>

          {/* 50% → 10% */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Candidate Conversion
                </span>
                <TrendingDown className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                50% → 10%
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Offer Drop-Off Reduction
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reduction in candidate offer reneges through disciplined engagement, structured debriefs, and transparent expectation alignment.
              </p>
            </div>
          </div>

          {/* 30% Diversity */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Inclusive Hiring
                </span>
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                30%
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Diversity Hiring Improvement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Improvement in diversity hiring outcomes through targeted sourcing channels and inclusive interview panel governance.
              </p>
            </div>
          </div>

          {/* Early Careers - 3 Months */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Early Careers
                </span>
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                3 Months
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Structured Graduate Hiring
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Built and executed a structured early-career hiring program, delivering 10+ graduate hires within three months.
              </p>
            </div>
          </div>

          {/* 5 → 20 Recruiter Scale */}
          <div className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Team Leadership
                </span>
                <UserCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-4xl sm:text-5xl stat-value tracking-tight mb-2">
                5 → 20
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Recruiter Team Scaled
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Scaled the US & Canada recruitment team from 5 to 20 recruiters, significantly expanding recruitment capacity to support business growth.
              </p>
            </div>
          </div>

        </div>

        {/* Required Bottom Strategic Flow Indicator */}
        <div className="mt-14 pt-8 border-t border-emerald-500/20">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
              Strategy
            </span>
            <span className="text-emerald-500/40 font-normal">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
              Scale
            </span>
            <span className="text-emerald-500/40 font-normal">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
              Efficiency
            </span>
            <span className="text-emerald-500/40 font-normal">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
              Experience
            </span>
            <span className="text-emerald-500/40 font-normal">→</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400">
              Innovation
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
