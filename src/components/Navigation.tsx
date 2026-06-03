import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, AppWindow, GitCommit, FileText, ArrowUpRight, Compass, Award } from 'lucide-react';

export default function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Find which section is active
      const sections = ['home', 'works', 'playground', 'credentials', 'process', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'works', label: 'Selected Works', icon: LayoutGrid },
    { id: 'playground', label: 'Design Lab', icon: Compass },
    { id: 'credentials', label: 'Credentials', icon: Award },
    { id: 'process', label: 'Strategy', icon: GitCommit },
    { id: 'skills', label: 'Bio & Expertise', icon: FileText },
  ];


  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        scrollY > 20
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center transition group-hover:bg-indigo-600">
            <span className="text-white text-xs font-sans font-bold tracking-tight">SC</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-slate-900 tracking-tight leading-none">
              Steph Castro
            </h4>
            <span className="text-[10px] font-mono text-slate-500 tracking-wider">
              BSIT & UI/UX Designer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/60 border border-slate-200/30 p-1 rounded-full">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-200/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white border border-slate-200/60 shadow-xs rounded-full"
                    transition={{ type: 'spring', stiffness: 355, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Status Indicator & Core Inquiry Anchor */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 bg-emerald-50 border border-emerald-100/60 py-1.5 px-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10.5px] font-medium text-emerald-800 font-mono">
              Available Q3 2026
            </span>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1 text-xs font-mono font-medium text-white bg-slate-900 hover:bg-slate-800 transition py-2 px-4 shadow-sm active:scale-98 rounded-lg cursor-pointer"
          >
            Start Project
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>
      </div>
    </header>
  );
}
