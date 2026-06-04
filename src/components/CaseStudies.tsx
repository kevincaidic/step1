import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Palette, Calendar, User, Building, Heart, ShieldCheck, TrendingUp, Sparkles, Check } from 'lucide-react';
import { caseStudies } from '../data';
import { CaseStudy, WireframeElement } from '../types';

export default function CaseStudies() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(caseStudies[0].id);
  const [viewMode, setViewMode] = useState<'wireframe' | 'hifi'>('hifi');

  const selectedProject = caseStudies.find(p => p.id === selectedProjectId) || caseStudies[0];

  // Colors based on project theme
  const getThemeColors = (id: string, mode: 'wireframe' | 'hifi') => {
    if (mode === 'wireframe') {
      return {
        bg: 'bg-slate-100/40 border-slate-300',
        cardBg: 'bg-white border-dashed border-slate-300',
        text: 'text-slate-600',
        accent: 'bg-slate-200 border-slate-300 text-slate-500',
        primary: '#64748b'
      };
    }
    switch (id) {
      case 'mangro-vision':
        return {
          bg: 'bg-emerald-50/10 border-emerald-100',
          cardBg: 'bg-white/95 border-emerald-150 shadow-sm',
          text: 'text-slate-800',
          accent: 'bg-emerald-50 border-emerald-100 text-emerald-700',
          primary: '#10b981'
        };
      case 'lms':
        return {
          bg: 'bg-teal-50/10 border-teal-100',
          cardBg: 'bg-white/95 border-teal-150 shadow-sm',
          text: 'text-slate-800',
          accent: 'bg-teal-50 border-teal-100 text-teal-700',
          primary: '#0e6f77'
        };
      case 'animed':
        return {
          bg: 'bg-purple-950/5 border-purple-200/50',
          cardBg: 'bg-white border-purple-200/60 shadow-md',
          text: 'text-slate-800',
          accent: 'bg-purple-50 border-purple-100 text-purple-700',
          primary: '#8b5cf6'
        };
      default:
        return {
          bg: 'bg-white',
          cardBg: 'bg-slate-50 border-slate-200',
          text: 'text-slate-800',
          accent: 'bg-indigo-50 border-indigo-100 text-indigo-600',
          primary: '#3b82f6'
        };
    }
  };

  const colors = getThemeColors(selectedProject.id, viewMode);

  return (
    <section id="works" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Selected Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-950 mt-3">
              Crafting Digital Products
            </h2>
            <p className="text-slate-600 max-w-lg mt-2 text-sm md:text-base">
              A detailed cross-section of challenges solved, featuring research, concrete validation metrics, and structured interactive UI layouts.
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/40 w-fit">
            {caseStudies.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  // Default reset view
                  setViewMode('hifi');
                }}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedProjectId === project.id
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Main Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Project Case Details Column */}
            <div className="lg:col-span-7 space-y-10 pr-0 lg:pr-4">
              {/* Category, Status & Metadata info */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                  {selectedProject.subtitle}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Roles, Timeline bento list */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 border border-slate-100 p-4.5 rounded-2xl">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Role</span>
                  <p className="text-xs font-semibold text-slate-800 mt-1">{selectedProject.role}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Duration</span>
                  <p className="text-xs font-semibold text-slate-800 mt-1">{selectedProject.duration}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Client</span>
                  <p className="text-xs font-semibold text-slate-800 mt-1">{selectedProject.client}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Timeline</span>
                  <p className="text-xs font-semibold text-slate-800 mt-1">Q4 Delivered</p>
                </div>
              </div>

              {/* Challenge & Process Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-500" />
                    The Challenge
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                    <Palette className="w-4 h-4 text-indigo-500" />
                    UX Solution Strategy
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>
              </div>

              {/* Research metrics section */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                  <TrendingUp className="w-4 h-4 text-indigo-500" />
                  Primary Research Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.researchPoints.map((point, index) => (
                    <div key={index} className="border border-slate-200/60 p-4.5 rounded-xl hover:bg-slate-50 transition-all flex flex-col justify-between min-h-[148px]">
                      <span className="text-2xl font-display font-black text-indigo-600 opacity-90 block">
                        {point.metric}
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800 mt-2 mb-1">{point.title}</h5>
                        <p className="text-[11px] text-slate-500 leading-normal">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables Panel */}
              <div className="flex flex-wrap gap-2 pt-2 items-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase mr-2">Project Tags:</span>
                {selectedProject.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[10px] font-mono bg-slate-100 border border-slate-200/40 text-slate-600 px-3 py-1 rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Desktop Preview Screen with Wireframe vs Hi-Fi Toggle */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {/* Toggle controls */}
              <div className="flex items-center justify-between bg-slate-900 border border-slate-950 p-2 rounded-xl text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                  </span>
                  <span className="text-[10px] font-mono uppercase font-semibold text-slate-400">
                    Live Demo State Selector
                  </span>
                </div>
                <div className="flex bg-slate-850 p-0.5 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setViewMode('wireframe')}
                    className={`px-3 py-1 rounded text-[10.5px] font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'wireframe'
                        ? 'bg-slate-750 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layout className="w-3.5 h-3.5" />
                    Lo-Fi Draft
                  </button>
                  <button
                    onClick={() => setViewMode('hifi')}
                    className={`px-3 py-1 rounded text-[10.5px] font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'hifi'
                        ? 'bg-slate-750 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5 text-indigo-400" />
                    Hi-Fi Render
                  </button>
                </div>
              </div>

              {/* Live Preview Container representing interactive Canvas */}
              <div className={`w-full ${colors.bg} border rounded-3xl p-6 transition-all duration-300 shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between`}>
                {selectedProject.imageUrl && viewMode === 'hifi' ? (
                  /* Display actual project image in hi-fi mode */
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-dashed pb-3 border-slate-300/60 text-xs font-mono">
                      <span className={colors.text}>• ACTUAL PROJECT SCREENSHOT</span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        {selectedProject.title} app
                      </span>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                      <img 
                        src={selectedProject.imageUrl} 
                        alt={`${selectedProject.title} - ${selectedProject.subtitle}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="pt-4 border-t border-dashed border-slate-300/60">
                      <p className={`text-[11.5px] leading-relaxed italic ${colors.text}`}>
                        {selectedProject.hiFiHighlight}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 flex-1">
                    {/* Internal preview display */}
                    <div className="flex justify-between items-center border-b border-dashed pb-3 border-slate-300/60 text-xs font-mono">
                      <span className={viewMode === 'wireframe' ? 'text-slate-500' : colors.text}>
                        {viewMode === 'wireframe' ? '[W_04] WIRE_FRAME_DRAFT' : '• PREVIEW_MODE'}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        {selectedProject.title} app
                      </span>
                    </div>

                  {/* Wireframe vs Hi-Fi Components rendering */}
                  <div className={`relative w-full h-[320px] rounded-2xl flex flex-col justify-between p-4.5 ${viewMode === 'wireframe' ? 'bg-slate-50 border-2 border-dashed border-slate-300' : 'bg-slate-900 border border-slate-800 shadow-lg'}`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={viewMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full flex flex-col justify-between space-y-4"
                      >
                        {viewMode === 'wireframe' ? (
                          /* Lo-Fi structural schematic */
                          <div className="w-full h-full flex flex-col justify-between font-mono text-[10px] text-slate-500 select-none">
                            {/* Device top */}
                            <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-2">
                              <span>09:41 AM</span>
                              <span>[BAT: 98%] [WIFI]</span>
                            </div>

                            {/* Center schematic node */}
                            <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-slate-200 rounded p-4 relative bg-white/40 my-3">
                              <span className="text-[9px] bg-slate-100 text-slate-400 px-1 py-0.5 rounded absolute top-2 left-2">
                                [CANVAS_CONTAINER]
                              </span>
                              
                              {selectedProject.id === 'mangro-vision' && (
                                <div className="text-center space-y-2">
                                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-300 animate-pulse mx-auto flex items-center justify-center text-emerald-600 font-mono">
                                    [UAV_GRID]
                                  </div>
                                  <p className="text-[10px] font-mono italic">Canopy classification tracking overlay</p>
                                </div>
                              )}

                              {selectedProject.id === 'lms' && (
                                <div className="w-full text-center space-y-2">
                                  <div className="w-full h-14 border border-dashed border-teal-200 flex items-center justify-center bg-teal-50/10 font-mono">
                                    [CATALOG_LEDGER]
                                  </div>
                                  <div className="flex gap-2 justify-center">
                                    <div className="w-8 h-8 rounded border border-dashed border-teal-200 flex items-center justify-center font-mono">[ADD_BK]</div>
                                    <div className="w-8 h-8 rounded border border-dashed border-teal-200 flex items-center justify-center font-mono">[RESERVE]</div>
                                    <div className="w-8 h-8 rounded border border-dashed border-teal-200 flex items-center justify-center font-mono">[STATUS]</div>
                                  </div>
                                </div>
                              )}

                              {selectedProject.id === 'nova' && (
                                <div className="w-full space-y-2">
                                  <div className="flex justify-between text-[9px] border-b border-dashed pb-1">
                                    <span>[GOAL: TRAVEL]</span>
                                    <span>$420 / $500</span>
                                  </div>
                                  <div className="w-full h-8 bg-slate-50 border border-slate-200 flex items-center justify-center">
                                    [INTER_SLIDER]
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Bottom CTA block placeholder */}
                            <div className="border border-dashed border-indigo-400/40 bg-indigo-50/20 text-indigo-500 text-center py-2 relative rounded">
                              [ACTION_TRIGGER_NODE]
                            </div>
                          </div>
                        ) : (
                          /* High-fidelity custom beautifully styled components */
                          <div className="w-full h-full flex flex-col justify-between font-sans text-xs select-none">
                            {/* App Header */}
                            <div className="flex justify-between items-center text-slate-400 font-mono text-[9px]">
                              <span>SIMULATION COMPONENT</span>
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                <span>LIVE</span>
                              </div>
                            </div>

                            {/* Selected Projects HI-FI screen options */}
                            {selectedProject.id === 'mangro-vision' && (
                              <div className="flex-1 flex flex-col justify-between my-3">
                                <div className="text-center space-y-3">
                                  <p className="text-emerald-600 text-[11px] font-mono tracking-wide uppercase">Active Canopy Diagnostics</p>
                                  {/* Pulsing tree/canopy bubble widget */}
                                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/10 to-emerald-500/20 mx-auto flex items-center justify-center relative shadow-inner">
                                    <motion.div
                                      animate={{ scale: [1, 1.15, 1] }}
                                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                      className="absolute w-14 h-14 rounded-full bg-emerald-500/30 filter blur-xs"
                                    />
                                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold font-mono">
                                      🌳
                                    </div>
                                  </div>
                                  <p className="text-slate-800 text-sm font-semibold tracking-tight">Leaf Classification Active</p>
                                  <p className="text-slate-500 text-[10px] font-mono">Sensor accuracy score: 96.4%</p>
                                </div>
                                <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 transition text-white font-mono text-[10.5px] rounded-lg shadow-md font-medium uppercase tracking-wide">
                                  Scan Selected Canopy Region
                                </button>
                              </div>
                            )}

                            {selectedProject.id === 'lms' && (
                              <div className="flex-1 flex flex-col justify-between my-2 text-slate-850">
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center bg-teal-50 border border-teal-100 p-2 rounded-lg">
                                    <span className="text-[10px] text-teal-800 font-mono font-bold uppercase">LOBBY STATUS: BORROWER</span>
                                    <span className="text-[10px] font-mono text-teal-700 font-semibold bg-teal-500/10 px-1 rounded">ACTIVE</span>
                                  </div>
                                  
                                  {/* Simulated light sliders in dark interface */}
                                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl space-y-2">
                                    <div className="flex justify-between text-[10px] font-mono text-slate-600">
                                      <span>Catalog Synchronization</span>
                                      <span className="font-bold">100% Locked</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400" style={{ width: '100%' }} />
                                    </div>
                                  </div>
                                </div>
                                
                                <button className="w-full py-2.5 bg-teal-700 text-white font-mono text-[10px] hover:bg-teal-600 transition rounded-lg font-bold mt-2 uppercase">
                                  Initialize Borrower Search
                                </button>
                              </div>
                            )}

                            {selectedProject.id === 'nova' && (
                              <div className="flex-1 flex flex-col justify-between my-1">
                                <div className="bg-amber-100 ring-2 ring-stone-900 text-stone-950 p-3 rounded-xl shadow-xs">
                                  <div className="flex justify-between items-center text-[9px] font-mono opacity-80 mb-1">
                                    <span>VAULT: EUROPE TRIP</span>
                                    <span>84% FILLED</span>
                                  </div>
                                  <div className="flex justify-between items-end">
                                    <h4 className="text-base font-display font-bold text-stone-900">$420.00</h4>
                                    <span className="text-[10px] font-mono bg-amber-300 text-stone-900 border border-stone-900 px-1.5 py-0.5 rounded">Goal: $500</span>
                                  </div>
                                </div>

                                <div className="space-y-1 mt-3">
                                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                                    <span>Slide to save instantly</span>
                                    <span>$10 / tap</span>
                                  </div>
                                  <button className="w-full py-2 bg-stone-900 text-amber-300 font-mono text-[10px] hover:bg-stone-800 transition rounded-lg border-2 border-amber-400/30">
                                    Deposit Micro-Sum +$10
                                  </button>
                                </div>
                              </div>
                            )}

                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                {/* Annotation caption box */}
                <div className="mt-4 pt-4 border-t border-dashed border-slate-300/60">
                  <p className={`text-[11.5px] leading-relaxed italic ${viewMode === 'wireframe' ? 'text-slate-500' : colors.text}`}>
                    {viewMode === 'wireframe' ? selectedProject.wireframeHighlight : selectedProject.hiFiHighlight}
                  </p>
                </div>
                </div>
              )}
              </div>

              {/* Impact / Metric Results Panel */}
              <div className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Shipped Outcomes & Validation
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((met, index) => (
                    <div key={index} className="bg-white border border-slate-200/40 p-2.5 rounded-lg text-center">
                      <p className="text-xs font-mono font-medium text-slate-400">{met.label}</p>
                      <h5 className="text-base font-display font-bold text-slate-900 mt-1">{met.value}</h5>
                      <span className="text-[9px] text-indigo-600 block leading-tight font-medium mt-0.5">
                        {met.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
