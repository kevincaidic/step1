/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ProjectShowroom from './components/ProjectShowroom';
import InteractivePlayground from './components/InteractivePlayground';
import CredentialsAndProjects from './components/CredentialsAndProjects';
import ProcessRoadmap from './components/ProcessRoadmap';
import AboutAndSkills from './components/AboutAndSkills';
import ContactForm from './components/ContactForm';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#008195] text-white font-sans antialiased text-sm flex flex-col justify-between">
      {/* Dynamic Navigation glass elements */}
      <Navigation />

      {/* Main Container contents */}
      <main className="flex-1">
        {/* Leading Introduction Banner */}
        <Hero />

        {/* Selected Interactive Projects Cabinet */}
        <CaseStudies />

        {/* Project Showroom Catalog (All 8 Systems) */}
        <ProjectShowroom />

        {/* Dynamic Design Lab Token Simulator */}
        <InteractivePlayground />

        {/* Concepts and Credentials Section */}
        <CredentialsAndProjects />

        {/* Methodology Design Road-map */}
        <ProcessRoadmap />

        {/* Profile Biography & Education Experience Stack */}
        <AboutAndSkills />

        {/* Product Brief intake system inquiry */}
        <ContactForm />
      </main>

      {/* Elegant Architectural Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-mono text-[11px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 border-b border-slate-900 pb-12">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center font-sans font-black text-white text-xs">
                  SC
                </div>
                <h4 className="font-display font-medium text-slate-100 tracking-tight text-sm">
                  Steph Castro
                </h4>
              </div>
              <p className="max-w-xs text-slate-500 leading-relaxed font-sans text-xs">
                BSIT graduate specializing in Machine Learning records systems, system integrations, and modern high-fidelity interface layouts.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2.5">
              <h5 className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Workspace Navigation</h5>
              <div className="space-y-1.5 flex flex-col text-slate-300 font-sans text-xs">
                <button onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition cursor-pointer text-left w-fit">Selected Cases</button>
                <button onClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition cursor-pointer text-left w-fit">Design Labs</button>
                <button onClick={() => document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition cursor-pointer text-left w-fit">Side Labs & Certs</button>
                <button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition cursor-pointer text-left w-fit">Tactical Method</button>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition cursor-pointer text-left w-fit">Background Bio</button>
              </div>
            </div>


            <div className="md:col-span-4 space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded text-[10px]">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                Latest Token Release: v4.2.1
              </span>
              <p className="text-slate-500 leading-normal text-xs font-sans">
                Natively designed inside Figma, compiled into unified JSON layout bundles, and styled directly via custom Tailwind utilities.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-center sm:text-left text-[10px]">
              &copy; {new Date().getFullYear()} Steph Castro. All specifications, interactive cases, layouts, logos, and scripts compiled in good faith.
            </p>

            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 transition px-3.5 py-1.5 rounded-lg text-[10px] font-semibold text-slate-300 cursor-pointer"
            >
              Scroll to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

