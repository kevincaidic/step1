import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitCommit, Sparkles, MoveRight, Layers, FileSignature, Landmark, UserCheck } from 'lucide-react';
import { processSteps } from '../data';

export default function ProcessRoadmap() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = processSteps[activeStepIdx];

  const getStepIcon = (phase: string) => {
    switch (phase) {
      case '01': return Landmark;
      case '02': return Layers;
      case '03': return FileSignature;
      case '04': return Sparkles;
      default: return UserCheck;
    }
  };

  const IconComponent = getStepIcon(activeStep.phase);

  return (
    <section id="process" className="py-24 bg-[#008195] border-t border-slate-1/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
            Visual Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mt-3">
            The Design Architecture
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Systematic design requires clear steps. Here is how I move a concept from ambiguous research briefs to predictable, high-performance UI components.
          </p>
        </div>

        {/* Phase Selector nodes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-10">
          {processSteps.map((step, idx) => (
            <button
              key={step.phase}
              onClick={() => setActiveStepIdx(idx)}
              className={`p-4 rounded-xl text-left border transition relative cursor-pointer flex flex-col justify-between h-28 ${
                activeStepIdx === idx
                  ? 'border-indigo-600 bg-indigo-50/20 text-indigo-950 shadow-xs'
                  : 'border-slate-200/70 hover:border-slate-300 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">{step.phase}</span>
                {activeStepIdx === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping" />
                )}
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Phase</h4>
                <p className="text-sm font-display font-bold truncate mt-0.5">{step.name}</p>
              </div>

              {activeStepIdx === idx && (
                <motion.div
                  layoutId="activeProcessBorder"
                  className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Phase Details Card */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.phase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Title Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 border border-indigo-200/30 rounded-lg flex items-center justify-center text-indigo-600">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PHASE {activeStep.phase} • {activeStep.name}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  {activeStep.title}
                </h3>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>

              {/* Right Deliverables List Column */}
              <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 md:p-8 rounded-2xl">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                  Primary Shipped Artifacts
                </h4>
                <div className="divide-y divide-slate-100 space-y-3.5">
                  {activeStep.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 pt-3.5 first:pt-0 border-slate-100">
                      <div className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold font-mono">
                        ✓
                      </div>
                      <span className="text-xs md:text-sm font-medium text-slate-800">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
