import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  FileText,
  Mail,
  ChevronDown
} from 'lucide-react';

interface NavGroup {
  label: string;
  items: { name: string; href: string; tag?: string }[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navGroups: NavGroup[] = [
    {
      label: "Core Competencies",
      items: [
        { name: "What I Bring", href: "#capabilities" },
        { name: "Hiring Spectrum", href: "#spectrum" },
      ]
    },
    {
      label: "Impact & Intelligence",
      items: [
        { name: "Impact Delivered", href: "#impact" },
        { name: "Talent Intelligence", href: "#intelligence" },
      ]
    },
    {
      label: "Strategy & Journey",
      items: [
        { name: "My Approach", href: "#approach" },
        { name: "Career Journey", href: "#journey" },
      ]
    }
  ];

  const quickLinks = [
    { name: "Core Competencies", href: "#capabilities" },
    { name: "Impact", href: "#impact" },
    { name: "Hiring Capabilities", href: "#spectrum" },
    { name: "Talent Intel", href: "#intelligence" },
    { name: "My Approach", href: "#approach" },
    { name: "Career Evolution", href: "#journey" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Determine active section
      const sections = [
        'home',
        'capabilities',
        'impact',
        'spectrum',
        'intelligence',
        'approach',
        'journey',
        'contact'
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
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
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-black/40' 
          : 'bg-[#0A0E1A]/40 backdrop-blur-md border-b border-emerald-500/10 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Signature */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="group flex items-center space-x-3 text-left focus:outline-none shrink-0"
            id="nav-brand-signature"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md flex items-center justify-center font-bold text-emerald-400 text-lg group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all shadow-inner shrink-0">
              SG
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-1.5 leading-none">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Sathish Ganesh
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-emerald-500 font-semibold tracking-wider uppercase mt-1 leading-tight whitespace-nowrap">
                TALENT ACQUISITION LEADER
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[11px] xl:text-xs font-bold uppercase tracking-wider" aria-label="Main Navigation">
            {quickLinks.map((link) => {
              const targetSection = link.href.replace('#', '');
              const isActive = activeSection === targetSection;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${targetSection}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                    isActive 
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Header Action */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <a
              href="#contact"
              id="nav-cta-connect"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-[0.98]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Reading Progress Line */}
      <div 
        className="h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1A]/95 border-b border-emerald-500/20 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="border-b border-emerald-500/20 pb-3 mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Navigation Menu
            </span>
            <span className="text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
              16+ Years Experience
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => {
              const targetSection = link.href.replace('#', '');
              const isActive = activeSection === targetSection;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40' 
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white border border-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] opacity-40">→</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-emerald-500/20 flex flex-col space-y-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="w-full py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-center text-xs tracking-wider uppercase shadow-md shadow-emerald-500/20 flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Sathish Ganesh</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
