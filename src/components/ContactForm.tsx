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
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                Project Intake
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mt-3">
                Let&rsquo;s craft cohesive visual platforms.
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                Looking to elevate your layout standards, structure a scalable Figma design system, or optimize conversion hierarchies? Fill out the brief below to coordinate directly.
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

          {/* Right Column: High Fidelity Brief Form Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 md:p-10 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {state === 'idle' || state === 'submitting' ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-slate-800"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Richard Hendricks"
                        className={`w-full px-3.5 py-2.5 bg-white border text-xs rounded-lg outline-hidden placeholder:text-slate-400 font-sans transition-all ${
                          errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 block font-mono">{errors.name}</span>}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                        Work Email
                      </label>
                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="richard@piedpiper.com"
                        className={`w-full px-3.5 py-2.5 bg-white border text-xs rounded-lg outline-hidden placeholder:text-slate-400 font-sans transition-all ${
                          errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 block font-mono">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Pied Piper Inc"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 text-xs rounded-lg outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 placeholder:text-slate-400 transition"
                      />
                    </div>

                    {/* Need Select Input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                        Core Service Needed
                      </label>
                      <select
                        value={formData.need}
                        onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 text-xs rounded-lg outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100 text-slate-700 transition"
                      >
                        <option value="design-system">Figma Design Token Scaling</option>
                        <option value="ui-ux-design">Full-Scope Product Designing</option>
                        <option value="mobile-proto">Interactive App Mockups</option>
                        <option value="consultation">Conversion & UX Audit</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Choice Grid */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                      Budget Context Range ($)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: '10k', val: '$10k - $20k', label: 'Pilot Project' },
                        { id: '50k', val: '$20k - $50k', label: 'Balanced Scope' },
                        { id: '90k', val: '$50k+ plus', label: 'Full System Upgrade' },
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier.id })}
                          className={`p-3 rounded-xl border text-center transition cursor-pointer flex flex-col justify-center gap-0.5 ${
                            formData.budget === tier.id
                              ? 'border-indigo-600 bg-indigo-50 text-slate-900 font-semibold shadow-2xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-500 bg-white'
                          }`}
                        >
                          <span className="text-xs font-semibold">{tier.val}</span>
                          <span className="text-[9px] font-mono opacity-60 font-medium">{tier.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono font-semibold text-slate-500 uppercase">
                      Product Brief Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your product goals, targeted users, and friction gaps..."
                      rows={4}
                      className={`w-full px-3.5 py-2.5 bg-white border text-xs rounded-lg outline-hidden placeholder:text-slate-400 font-sans transition-all resize-none ${
                        errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-100'
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 block font-mono">{errors.message}</span>}
                  </div>

                  {/* Send Action Trigger of Submit */}
                  <button
                    disabled={state === 'submitting'}
                    className={`w-full py-3 text-xs font-mono font-semibold text-white tracking-widest uppercase flex items-center justify-center gap-2 rounded-lg shadow-md hover:bg-slate-800 transition ${
                      state === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 cursor-pointer'
                    }`}
                  >
                    {state === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Allocating Server Thread...
                      </>
                    ) : (
                      <>
                        Confirm Project Brief Info
                        <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 stroke-[2px]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-slate-900">
                      Briefing Transmitted Successfully
                    </h3>
                    <p className="text-slate-500 text-xs max-w-sm mt-1 leading-relaxed">
                      Steph Castro has received your brief. You will receive a compiled outline and system coordinate layout via your inbox <b className="text-slate-700 font-medium">{formData.email}</b> within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        need: 'design-system',
                        budget: '50k',
                        message: '',
                      });
                      setState('idle');
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-mono text-xs rounded-lg transition border border-slate-200 cursor-pointer"
                  >
                    Add Another Intake
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
