import React from 'react';
import { 
  Globe2, 
  Network, 
  Target,
  Activity
} from 'lucide-react';

export const TalentIntelligence: React.FC = () => {
  const capabilities = [
    {
      number: "01",
      title: "Market Intelligence",
      tagline: "Understand the market.",
      description: "Assess talent availability, skill supply, geographic talent pools and market competitiveness to inform hiring strategy.",
      icon: Globe2
    },
    {
      number: "02",
      title: "Talent Mapping",
      tagline: "Find where the talent is.",
      description: "Map organizations, skills, talent pools and adjacent capabilities to build a clearer view of the market.",
      icon: Network
    },
    {
      number: "03",
      title: "Sourcing Strategy",
      tagline: "Turn intelligence into action.",
      description: "Translate market insights into targeted sourcing channels, search strategies and candidate engagement.",
      icon: Target
    }
  ];

  const flowSteps = [
    { number: "01", label: "Research" },
    { number: "02", label: "Map" },
    { number: "03", label: "Strategize" },
    { number: "04", label: "Engage" }
  ];

  return (
    <section id="intelligence" className="py-20 lg:py-28 relative bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Talent Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Understand the Talent Market Before You Hire.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every effective search begins with understanding the market. Talent intelligence helps determine where the talent exists, what skills are available, which markets are competitive and which sourcing strategies are most likely to work.
          </p>
        </div>

        {/* Three-Part Capability Cards Grid (Desktop: 3 Columns, Mobile: Vertically Stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                id={`intel-card-${item.number}`}
                className="p-6 sm:p-7 lg:p-8 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-md bg-slate-900/80 border border-emerald-500/10">
                      {item.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400 block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Flow Framework */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-slate-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-slate-300">Strategic Progression:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono w-full sm:w-auto">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-slate-200 font-semibold flex items-center space-x-1.5 shadow-sm">
                    <span className="text-emerald-400 font-bold">{step.number}</span>
                    <span>{step.label}</span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-emerald-500/40 font-bold select-none">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
