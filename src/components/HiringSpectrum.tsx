import React from 'react';
import { 
  Users2, 
  GraduationCap, 
  Code2, 
  Bot, 
  Target, 
  UserPlus, 
  Briefcase, 
  Crown,
  Layers
} from 'lucide-react';

export const HiringSpectrum: React.FC = () => {
  const capabilityCards = [
    {
      number: "01",
      title: "Volume Hiring",
      tagline: "Scale with structure, consistency and speed.",
      description: "High-volume recruitment programs designed around recruiter capacity, structured processes, hiring governance and consistent execution.",
      icon: Users2
    },
    {
      number: "02",
      title: "Campus Hiring",
      tagline: "Build early-career talent at scale.",
      description: "Structured campus and graduate hiring programs focused on talent identification, assessment, engagement and onboarding.",
      icon: GraduationCap
    },
    {
      number: "03",
      title: "Technology & Digital Hiring",
      tagline: "Build the talent behind technology transformation.",
      description: "Technology hiring across engineering, infrastructure, cloud, product and emerging digital capabilities.",
      icon: Code2
    },
    {
      number: "04",
      title: "AI Hiring",
      tagline: "Build talent for the AI economy.",
      description: "Hiring across AI, automation, data and emerging technology capabilities, supported by targeted talent intelligence and modern sourcing approaches.",
      icon: Bot
    },
    {
      number: "05",
      title: "Specialist & Niche Hiring",
      tagline: "Find talent where the market is tight.",
      description: "Targeted hiring strategies for scarce skills and specialized technical or functional capabilities.",
      icon: Target
    },
    {
      number: "06",
      title: "Lateral Hiring",
      tagline: "Bring experienced talent into the business.",
      description: "End-to-end hiring strategies for experienced professionals across technology, business and functional roles.",
      icon: UserPlus
    },
    {
      number: "07",
      title: "Business & Functional Hiring",
      tagline: "Align talent with business priorities.",
      description: "Hiring across sales, operations, corporate and other business-critical functions based on organizational needs.",
      icon: Briefcase
    },
    {
      number: "08",
      title: "Leadership Hiring",
      tagline: "Build talent that shapes business outcomes.",
      description: "Targeted hiring for leadership and critical roles where talent scarcity, stakeholder alignment and market intelligence require a focused approach.",
      icon: Crown
    }
  ];

  return (
    <section id="spectrum" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Spectrum Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hiring Strategy That Matches the Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From high-volume hiring programs to specialist and critical talent, I build hiring strategies based on business priorities, talent availability, skill requirements and market realities.
          </p>
        </div>

        {/* 8 Static Capability Cards (Desktop: 4 × 2 grid, Mobile: Vertically stacked) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                id={`hiring-card-${card.number}`}
                className="p-6 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-md bg-slate-900/80 border border-emerald-500/10">
                      {card.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400 block mb-1">
                    {card.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
