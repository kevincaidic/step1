import { useState, CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Sparkles, Check, RefreshCw, Smartphone, Eye, Code } from 'lucide-react';
import { DesignTokenDemo } from '../types';

export default function InteractivePlayground() {
  const [tokens, setTokens] = useState<DesignTokenDemo>({
    radius: 'xl',
    primaryColor: '#3b82f6', // Cobalt
    fontFamily: 'sans',
    spacing: 'cozy',
  });

  const [simulatedState, setSimulatedState] = useState({
    premiumPlan: true,
    activityCount: 8,
    isMenuOpen: false,
    copiedText: false,
  });

  const handleReset = () => {
    setTokens({
      radius: 'xl',
      primaryColor: '#3b82f6',
      fontFamily: 'sans',
      spacing: 'cozy',
    });
  };

  const getRadiusClass = (r: typeof tokens.radius) => {
    switch (r) {
      case 'none': return 'rounded-none';
      case 'md': return 'rounded-md';
      case 'xl': return 'rounded-2xl';
      case 'full': return 'rounded-full';
    }
  };

  const getSpacingClass = (s: typeof tokens.spacing) => {
    switch (s) {
      case 'compact': return 'p-3 gap-2';
      case 'cozy': return 'p-5 gap-4';
      case 'loose': return 'p-8 gap-6';
    }
  };

  const getInnerSpacingClass = (s: typeof tokens.spacing) => {
    switch (s) {
      case 'compact': return 'p-2 space-y-1';
      case 'cozy': return 'p-4 space-y-3';
      case 'loose': return 'p-6 space-y-4';
    }
  };

  const getFontFamilyClass = (f: typeof tokens.fontFamily) => {
    switch (f) {
      case 'sans': return 'font-sans';
      case 'display': return 'font-display';
      case 'mono': return 'font-mono';
    }
  };

  const generateCodeSnippet = () => {
    return `// tailwind.config.ts / design-tokens.json
{
  "theme": {
    "extend": {
      "borderRadius": {
        "custom": "${tokens.radius === 'none' ? '0px' : tokens.radius === 'md' ? '0.375rem' : tokens.radius === 'xl' ? '1rem' : '9999px'}"
      },
      "colors": {
        "accent": "${tokens.primaryColor}"
      },
      "spacing": {
        "dynamic-padding": "${tokens.spacing === 'compact' ? '0.75rem' : tokens.spacing === 'cozy' ? '1.25rem' : '2rem'}"
      },
      "fontFamily": {
        "primary": ["${tokens.fontFamily === 'sans' ? 'Inter' : tokens.fontFamily === 'display' ? 'Space Grotesk' : 'JetBrains Mono'}"]
      }
    }
  }
}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCodeSnippet());
    setSimulatedState(prev => ({ ...prev, copiedText: true }));
    setTimeout(() => {
      setSimulatedState(prev => ({ ...prev, copiedText: false }));
    }, 2000);
  };

  return (
    <section id="process" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Interactive Lab
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mt-3">
              Design Tokens Simulator
            </h2>
            <p className="text-slate-600 max-w-xl mt-2 text-sm md:text-base">
              A UI/UX designer creates dynamic parameters, not just static layouts. Play with the theme inputs to see how an unified layout adapts instantaneously.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-800 transition bg-white border border-slate-200 shadow-xs px-3 py-1.5 rounded-lg w-fit"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Design Scale
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-500" />
              Token Parameters
            </h3>

            {/* Accent Color Token */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-600 uppercase mb-2">
                Brand Accent Color
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { value: '#3b82f6', name: 'Cobalt' },
                  { value: '#6366f1', name: 'Indigo' },
                  { value: '#10b981', name: 'Emerald' },
                  { value: '#ec4899', name: 'Coral' },
                  { value: '#0f172a', name: 'Slate' },
                ].map((col) => (
                  <button
                    key={col.value}
                    onClick={() => setTokens(prev => ({ ...prev, primaryColor: col.value }))}
                    className="flex flex-col items-center gap-1.5 p-1 px-1.5 rounded-lg border border-slate-100 hover:border-slate-300 transition cursor-pointer"
                  >
                    <div
                      className="w-full h-8 rounded-md relative flex items-center justify-center transition"
                      style={{ backgroundColor: col.value }}
                    >
                      {tokens.primaryColor === col.value && (
                        <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-500 truncate max-w-full">
                      {col.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Radius Token */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-600 uppercase mb-2">
                Corner Radius Scale (Border-Radius)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {([
                  { id: 'none', label: '0px', name: 'Sharp' },
                  { id: 'md', label: '6px', name: 'Soft' },
                  { id: 'xl', label: '16px', name: 'Curved' },
                  { id: 'full', label: 'Circle', name: 'Round' },
                ] as const).map((rad) => (
                  <button
                    key={rad.id}
                    onClick={() => setTokens(prev => ({ ...prev, radius: rad.id }))}
                    className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                      tokens.radius === rad.id
                        ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-2xs font-medium'
                        : 'border-slate-200 hover:border-slate-300 text-slate-500 bg-transparent'
                    }`}
                  >
                    <span className="text-xs">{rad.name}</span>
                    <span className="text-[9px] font-mono opacity-60">{rad.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Family Token */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-600 uppercase mb-2">
                Typography System (Header & Body)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { id: 'sans', name: 'Inter', sub: 'Sans-Serif' },
                  { id: 'display', name: 'Grotesk', sub: 'Display' },
                  { id: 'mono', name: 'JetBrains', sub: 'Monospace' },
                ] as const).map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setTokens(prev => ({ ...prev, fontFamily: f.id }))}
                    className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                      tokens.fontFamily === f.id
                        ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-2xs font-medium'
                        : 'border-slate-200 hover:border-slate-300 text-slate-500 bg-transparent'
                    }`}
                  >
                    <span className={`text-xs ${f.id === 'sans' ? 'font-sans' : f.id === 'display' ? 'font-display' : 'font-mono'}`}>{f.name}</span>
                    <span className="text-[9px] font-mono opacity-60">{f.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Spacing & Padding Token */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-600 uppercase mb-2">
                Layout Density (Spacing Framework)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { id: 'compact', name: 'Compact', sub: 'Grid Tight' },
                  { id: 'cozy', name: 'Cozy', sub: 'Balanced' },
                  { id: 'loose', name: 'Loose', sub: 'Breathable' },
                ] as const).map((space) => (
                  <button
                    key={space.id}
                    onClick={() => setTokens(prev => ({ ...prev, spacing: space.id }))}
                    className={`p-2.5 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                      tokens.spacing === space.id
                        ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-2xs font-medium'
                        : 'border-slate-200 hover:border-slate-300 text-slate-500 bg-transparent'
                    }`}
                  >
                    <span className="text-xs">{space.name}</span>
                    <span className="text-[9px] font-mono opacity-60">{space.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Simulated Mobile Mockup Rendering */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4 bg-slate-900 border border-slate-900 rounded-3xl p-6 shadow-xl relative min-h-[500px]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-950 rounded-full flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-800 rounded-full" />
              <div className="w-2 h-2 bg-slate-800 rounded-full ml-2" />
            </div>

            {/* Display Simulator Header */}
            <div className="w-full flex items-center justify-between px-3 text-slate-500 text-xs font-mono mb-2 mt-2">
              <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> preview.ios</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">60fps</span>
            </div>

            {/* Outer Container containing simulated app UI component */}
            <div
              className={`w-full bg-slate-800/40 border border-slate-700/60 ${getRadiusClass(tokens.radius)} flex flex-col transition-all duration-300 ${getSpacingClass(tokens.spacing)}`}
              style={{ '--primary': tokens.primaryColor } as CSSProperties}
            >
              {/* Profile Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 flex items-center justify-center text-white text-xs font-mono font-bold"
                    style={{ backgroundColor: tokens.primaryColor, borderRadius: tokens.radius === 'full' ? '9999px' : tokens.radius === 'xl' ? '12px' : tokens.radius === 'none' ? '0px' : '6px' }}
                  >
                    SC
                  </div>
                  <div>
                    <h5 className={`text-slate-100 text-xs font-bold ${getFontFamilyClass(tokens.fontFamily)}`}>
                      Steph Castro
                    </h5>
                    <p className="text-slate-400 text-[10px] font-mono">BSIT UI/UX</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-emerald-500" />
              </div>

              {/* Main Content Box */}
              <div
                className={`bg-slate-950/60 border border-slate-800 flex flex-col ${getRadiusClass(tokens.radius)} ${getInnerSpacingClass(tokens.spacing)} transition-all`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider font-semibold opacity-80 uppercase" style={{ color: tokens.primaryColor }}>
                      Interactive Card
                    </span>
                    <h4 className={`text-slate-200 text-sm font-semibold tracking-tight leading-tight mt-0.5 ${getFontFamilyClass(tokens.fontFamily)}`}>
                      Flexible Interface Tokens
                    </h4>
                  </div>
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                </div>

                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Notice how layout density interacts seamlessly beside color cues and rounded nodes.
                </p>

                {/* Sub-Card Content */}
                <div className="bg-slate-900 border border-slate-800/80 p-2.5 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-[9px] font-mono">Completed Projects</p>
                    <p className={`text-slate-100 text-xs font-bold mt-0.5`}>
                      {simulatedState.activityCount} Design Cases
                    </p>
                  </div>
                  <button
                    onClick={() => setSimulatedState(prev => ({ ...prev, activityCount: prev.activityCount + 1 }))}
                    className="text-[10px] font-mono px-2 py-1 rounded border border-slate-700 hover:bg-slate-800 text-slate-300 transition cursor-pointer"
                  >
                    + Add One
                  </button>
                </div>
              </div>

              {/* Bottom Action Button */}
              <button
                className={`w-full py-2.5 text-xs text-white tracking-wide font-medium flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer`}
                style={{
                  backgroundColor: tokens.primaryColor,
                  borderRadius: tokens.radius === 'full' ? '9999px' : tokens.radius === 'xl' ? '12px' : tokens.radius === 'none' ? '0px' : '6px'
                }}
              >
                <Eye className="w-3.5 h-3.5" />
                Inspect Tokens
              </button>
            </div>

            {/* Control stats */}
            <div className="w-full flex items-center justify-around text-slate-400 text-[10px] font-mono mt-2">
              <span>Radius: <b className="text-slate-200 uppercase">{tokens.radius}</b></span>
              <span>•</span>
              <span>Density: <b className="text-slate-200 uppercase">{tokens.spacing}</b></span>
            </div>
          </div>

          {/* Generated Code Output Screen */}
          <div className="lg:col-span-3 flex flex-col h-full justify-between gap-4">
            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 flex flex-col h-full min-h-[460px] max-h-[500px]">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-900">
                <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-indigo-400" />
                  Live Theme Config
                </span>
                <span className="text-[9px] font-mono text-emerald-400">JSON Token</span>
              </div>
              
              <pre className="text-[10.5px] font-mono text-slate-300 overflow-auto flex-1 leading-normal pr-1 max-h-[380px]">
                {generateCodeSnippet()}
              </pre>

              <button
                onClick={copyCode}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition font-mono text-[10.5px] rounded-lg mt-3 flex items-center justify-center gap-2 cursor-pointer"
              >
                {simulatedState.copiedText ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copied Tokens!
                  </>
                ) : (
                  <>
                    Copy Token Object
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
