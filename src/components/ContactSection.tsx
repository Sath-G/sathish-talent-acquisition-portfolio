import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Briefcase
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Executive Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready for the Next Challenge?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Open to conversations around Talent Acquisition leadership, recruitment transformation, talent intelligence, AI-enabled recruiting and building scalable hiring functions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Availability Status Card */}
          <div className="p-6 sm:p-7 glass-card border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Opportunity Status
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5 flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Exploring TA Leadership Opportunities</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to Talent Acquisition leadership roles where I can build, scale and transform hiring functions across TA Strategy, Talent Intelligence, Recruitment Transformation and Technology Hiring.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 text-[11px] font-mono text-emerald-400 font-bold">
              AVAILABLE FOR NEW VENTURES
            </div>
          </div>

          {/* Email Card with 1-Click Copy */}
          <div className="p-6 sm:p-7 glass-card border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
                Say Hello!
              </span>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Get in Touch</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Have an opportunity, idea, or simply want to connect?<br />
                I'd be happy to hear from you.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/80 border border-emerald-500/20">
                <a
                  href={`mailto:${HERO_DATA.email}`}
                  className="text-xs sm:text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300 truncate"
                >
                  {HERO_DATA.email}
                </a>
                <button
                  type="button"
                  id="btn-copy-email"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-[11px] font-mono text-emerald-400 mt-2 block animate-in fade-in font-bold">
                  Email copied to clipboard!
                </span>
              )}
            </div>
          </div>

          {/* Professional Network Link */}
          <div className="p-6 sm:p-7 glass-card border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
                Professional Network
              </span>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-[#0077b5] shrink-0" />
                <span>LinkedIn Profile</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect on LinkedIn to review recommendations, professional network connections, and ongoing industry engagement.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15">
              <a
                href={HERO_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-linkedin-profile"
                className="w-full py-3 px-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 hover:border-emerald-500/60 inline-flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/40 flex items-center justify-center text-[#0077b5]">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                  <span>Connect on LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
