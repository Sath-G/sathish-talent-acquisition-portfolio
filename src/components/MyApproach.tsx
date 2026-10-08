import React from 'react';
import { 
  Search, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Workflow
} from 'lucide-react';

export const MyApproach: React.FC = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Market Intelligence",
      tagline: "Understand the market first.",
      description: "Research talent availability, skills, compensation, hiring trends and market dynamics before defining the hiring strategy.",
      icon: Search
    },
    {
      number: "02",
      title: "Deep Sourcing + AI",
      tagline: "Find the right talent efficiently.",
      description: "Combine research-driven sourcing, AI-assisted discovery, Boolean search and targeted talent identification.",
      icon: Sparkles
    },
    {
      number: "03",
      title: "Engagement",
      tagline: "Create meaningful conversations.",
      description: "Use personalized, value-driven outreach designed to build candidate interest and engagement.",
      icon: MessageSquare
    },
    {
      number: "04",
      title: "Trust & Credibility",
      tagline: "Build confidence through transparency.",
      description: "Create trust through clear communication, stakeholder alignment and consistent candidate experience.",
      icon: ShieldCheck
    },
    {
      number: "05",
      title: "Execution",
      tagline: "Turn strategy into hiring outcomes.",
      description: "Structured pipelines, stakeholder alignment, consistent follow-up and disciplined execution.",
      icon: Workflow
    }
  ];

  const visualFlow = [
    { step: "01", label: "Research" },
    { step: "02", label: "Discover" },
    { step: "03", label: "Engage" },
    { step: "04", label: "Build Trust" },
    { step: "05", label: "Execute" }
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 relative bg-slate-950/70 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodology & Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Approach: From Research to Execution.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A disciplined five-phase Talent Acquisition architecture that balances market intelligence, AI-augmented outbound discovery, executive advisory, and disciplined delivery.
          </p>
        </div>

        {/* Five Self-Contained Informational Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {approachSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                id={`approach-card-${step.number}`}
                className="p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-md bg-slate-900/80 border border-emerald-500/10">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400 block mb-1">
                    {step.tagline}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Non-Interactive Visual Flow */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-slate-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-slate-300">Execution Framework:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono w-full sm:w-auto">
              {visualFlow.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-slate-200 font-semibold flex items-center space-x-1.5 shadow-sm text-[11px] sm:text-xs">
                    <span className="text-emerald-400 font-bold">{item.step}</span>
                    <span>{item.label}</span>
                  </div>
                  {idx < visualFlow.length - 1 && (
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
