import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Briefcase, DollarSign, CheckCircle2, ArrowRight, CornerDownRight, Landmark } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: 'design-system',
    budget: '50k',
    message: '',
  });

  const [state, setState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter an email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please provide a valid email format.";
    }
    if (!formData.message.trim()) nextErrors.message = "Write a brief description of your product goals.";
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setState('submitting');
    
    // Simulate high-fidelity briefing compilation delay
    setTimeout(() => {
      setState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context / Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md">
                Recognitions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-100 mt-3">
                Academic Achievements
              </h2>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Recognition for outstanding academic performance and professional contributions in Information Technology, Machine Learning Systems, and Research Development.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wide text-slate-400">Inquiries</h4>
                  <p className="text-xs font-semibold text-slate-800">castro.stephanny@dnsc.edu.ph</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wide text-slate-400">Address</h4>
                  <p className="text-xs font-semibold text-slate-800">Little Panay, Panabo City</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50/50 border border-indigo-100/60 p-4 rounded-xl flex items-start gap-3">
              <CornerDownRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-indigo-950 font-medium">
                <b>Review Standard:</b> Project briefs are evaluated within one business day. Selected intakes receive a detailed architectural wireframe outline and pricing layout guide before kickoffs.
              </div>
            </div>
          </div>

          {/* Right Column: Achievements Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
              Recognitions
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* AY 2024-2025 */}
              <div className="flex gap-6">
                <div className="text-amber-500 font-display font-bold text-xl min-w-[100px]">
                  AY 2024-<br/>2025
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Academic Excellence
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    Dean's Lister
                  </h3>
                  <p className="text-xs text-slate-400 mb-2">
                    Bachelor of Science in Information Technology - DNSC
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Recognized for outstanding academic performance during the academic year.
                  </p>
                </div>
              </div>

              {/* AY 2025-2026 */}
              <div className="flex gap-6">
                <div className="text-amber-500 font-display font-bold text-xl min-w-[100px]">
                  AY 2025-<br/>2026
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Academic Excellence
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    Dean's Lister
                  </h3>
                  <p className="text-xs text-slate-400 mb-2">
                    Bachelor of Science in Information Technology - DNSC
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Recognized for outstanding academic performance during the academic year.
                  </p>
                </div>
              </div>

              {/* 2026 Capstone */}
              <div className="flex gap-6">
                <div className="text-amber-500 font-display font-bold text-xl min-w-[100px]">
                  2026
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Capstone
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    AniMed: A Machine Learning-Integrated System for Veterinary Records and Prescription Management
                  </h3>
                  <p className="text-xs text-slate-400 mb-2">
                    BSIT Capstone Project
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Developed a web-based veterinary management system with machine learning, GIS disease mapping, and electronic medical records.
                  </p>
                </div>
              </div>

              {/* 2026 OJT */}
              <div className="flex gap-6">
                <div className="text-amber-500 font-display font-bold text-xl min-w-[100px]">
                  2026
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Completed 486 Hours
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                    On-the-Job Training — Research Division
                  </h3>
                  <p className="text-xs text-slate-400 mb-2">
                    Davao del Norte State College
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Supported research monitoring, publication design, document management, and research database updates.
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
