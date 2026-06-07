import { CheckCircle2, CornerDownRight, Award, Sparkles } from 'lucide-react';

export default function ContactForm() {

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-md border border-amber-900">
                Recognitions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-100 mt-3">
                Academic Achievements
              </h2>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Recognition for outstanding academic performance and professional contributions in Information Technology, Machine Learning Systems, and Research Development.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wide text-slate-500">Academic Excellence</h4>
                  <p className="text-xs font-semibold text-slate-300">Dean's Lister (2 consecutive years)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-indigo-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wide text-slate-500">Capstone Achievement</h4>
                  <p className="text-xs font-semibold text-slate-300">ML-Integrated Veterinary System</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wide text-slate-500">Professional Training</h4>
                  <p className="text-xs font-semibold text-slate-300">486 Hours OJT Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-950/30 border border-amber-900/50 p-4 rounded-xl flex items-start gap-3">
              <CornerDownRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-amber-200/80 font-medium">
                <b className="text-amber-300">Academic Focus:</b> Specialized in UI/UX Design, Machine Learning Systems, Full-Stack Development, and Research Publication Management.
              </div>
            </div>
          </div>

          {/* Right Column: Achievements Timeline */}
          <div className="lg:col-span-7 bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Timeline
              </div>
              <div className="text-xs font-mono text-amber-400">
                2024 - 2026
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* AY 2024-2025 */}
              <div className="flex gap-6 group">
                <div className="text-amber-400 font-display font-bold text-lg min-w-[90px] text-right">
                  AY 2024-<br/>2025
                </div>
                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-amber-500/50 transition">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 block mb-2">
                    Academic Excellence
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    Dean's Lister
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    Bachelor of Science in Information Technology - DNSC
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Recognized for outstanding academic performance during the academic year.
                  </p>
                </div>
              </div>

              {/* AY 2025-2026 */}
              <div className="flex gap-6 group">
                <div className="text-amber-400 font-display font-bold text-lg min-w-[90px] text-right">
                  AY 2025-<br/>2026
                </div>
                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-amber-500/50 transition">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 block mb-2">
                    Academic Excellence
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    Dean's Lister
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    Bachelor of Science in Information Technology - DNSC
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Recognized for outstanding academic performance during the academic year.
                  </p>
                </div>
              </div>

              {/* 2026 Capstone */}
              <div className="flex gap-6 group">
                <div className="text-amber-400 font-display font-bold text-lg min-w-[90px] text-right">
                  2026
                </div>
                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/50 transition">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-indigo-400 block mb-2">
                    Capstone
                  </span>
                  <h3 className="text-sm font-display font-bold text-slate-100 mb-1 leading-tight">
                    AniMed: A Machine Learning-Integrated System for Veterinary Records and Prescription Management
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    BSIT Capstone Project
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Developed a web-based veterinary management system with machine learning, GIS disease mapping, and electronic medical records.
                  </p>
                </div>
              </div>

              {/* 2026 OJT */}
              <div className="flex gap-6 group">
                <div className="text-amber-400 font-display font-bold text-lg min-w-[90px] text-right">
                  2026
                </div>
                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/50 transition">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 block mb-2">
                    Completed 486 Hours
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    On-the-Job Training — CSS Laboratory
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    Holy Child College of Davao - Panabo Campus
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Maintains computer units, performs troubleshooting, and updates Windows systems to ensure smooth operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
