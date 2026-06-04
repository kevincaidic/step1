import { Download, Compass, Sparkles, Heart } from 'lucide-react';
import { skillCategories, experienceTimeline } from '../data';

export default function AboutAndSkills() {
  const handleDownloadCV = () => {
    // Elegant mock PDF CV download feedback trigger and alerting
    alert("Inquiry received: Steph Castro's professional digital CV has been prepared. This showcases specialized guidelines, system token files, UX layout templates, and full platform case files.");
  };

  return (
    <section id="skills" className="py-24 bg-[#008195] border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Grid section: Career Resume Timeline */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                Career Core Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mt-3">
                Background & Impact
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                As an Information Technology and UI/UX specialist graduate from Davao del Norte State College, I design state systems, map disease outlines, and craft accessible user pathways.
              </p>
            </div>

            <div className="space-y-6 relative border-l border-slate-200 pl-6 ml-2.5 text-slate-800">
              {experienceTimeline.map((job, index) => (
                <div key={index} className="relative group">
                  {/* Timeline point indicator */}
                  <span className="absolute -left-9 top-1.5 w-5 h-5 rounded-full bg-white border-2 border-slate-900 group-hover:border-indigo-600 transition-all flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-slate-900 group-hover:bg-indigo-600 rounded-full" />
                  </span>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">
                      {job.period}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      {job.role}
                    </h3>
                    <p className="text-xs font-mono text-indigo-600 font-medium">
                      {job.company}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2.5 max-w-xl">
                      {job.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold py-3 px-5 shadow-xs transition rounded-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Prepare Resume Dossier
            </button>
          </div>

          {/* Grid section: Design Skills/Stack Taxonomy */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 p-6 md:p-8 rounded-2xl shadow-2xs space-y-8">
            <h3 className="text-md font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-500" />
              Specialized Stack
            </h3>

            <div className="space-y-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wide">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10.5px] font-sans text-slate-600 bg-slate-50 border border-slate-200/40 px-2.5 py-1.5 rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-start gap-3">
              <Heart className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-slate-500">
                <b>Accessibility First:</b> Every system generated satisfies standard WCAG AA guidelines natively, guaranteeing optimal dynamic typographic contrast levels, focus borders, and full tab-navigation controls on desktop or physical devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
