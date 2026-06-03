import { motion } from 'motion/react';
import { ArrowDownRight, Compass, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle grid background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Intro Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/50 py-1 px-3 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-600 uppercase">
                Steph Castro • BSIT & UI/UX Designer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-950 tracking-tight leading-[1.05]">
              Systems that feel <br className="hidden sm:inline" />
              <span className="text-indigo-600">predictable</span> and exceptionally <span className="underline decoration-indigo-200 decoration-4 underline-offset-4">robust</span>.
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
              I sculpt machine learning-integrated systems, full-stack database architectures, and intuitive web forms. Integrating core computing science with human interaction standards.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleScrollToWorks}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold py-3.5 px-6 shadow-md transition-all rounded-lg cursor-pointer"
              >
                View Selected Cases
                <ArrowDownRight className="w-4 h-4 opacity-70" />
              </button>

              <a
                href="#playground"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200/85 text-slate-800 text-xs font-mono font-semibold py-3.5 px-6 border border-slate-200/40 transition-all rounded-lg cursor-pointer"
              >
                Launch Design Lab
                <Compass className="w-4 h-4 text-indigo-500" />
              </a>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-4 pt-6 text-slate-400">
              <span className="text-[11px] font-mono uppercase tracking-wider">Connect:</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition flex items-center gap-1 text-xs font-medium">
                <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition flex items-center gap-1 text-xs font-medium">
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Profile Column */}
          <div className="lg:col-span-5 w-full">
            {/* Elegant Portrait Frame */}
            <div id="hero-profile-picture" className="border border-slate-200/60 rounded-3xl overflow-hidden relative group shadow-sm bg-slate-50 flex flex-col justify-end aspect-[4/5] min-h-[380px] w-full">
              <img
                src="/images/profile/141754af-531c-41a3-bad0-d74c28f0faa1.jpeg"
                alt="Steph Castro - BSIT & UI/UX Specialist"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent pointer-events-none" />
              
              {/* Pulse status indicator */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-xs py-1 px-3 rounded-full border border-slate-200 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Lab Online
                </span>
              </div>

              {/* Float specs details */}
              <div className="absolute top-4 right-4 inline-flex items-center bg-slate-950/70 backdrop-blur-xs py-1 px-2.5 rounded-md border border-white/10">
                <span className="text-[8px] font-mono text-slate-300 font-bold tracking-widest leading-none">
                  V.2026
                </span>
              </div>

              {/* Portrait metadata glass card */}
              <div className="absolute inset-x-4 bottom-4 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white hover:bg-slate-950/90 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400 font-bold block">
                      Architect Full Body Profile
                    </span>
                    <h4 className="text-sm font-sans font-bold text-white tracking-tight mt-0.5">
                      Steph Castro
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[8.5px] font-mono text-slate-400 block">
                      LOC // PORTFOLIO
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-250 block mt-0.5">
                      DNSC-IC // PORTRAIT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
