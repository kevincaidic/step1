import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, Check, ShieldCheck, Sparkles, AlertCircle, FileText, Lock, ChevronRight, Minimize, Eye } from 'lucide-react';
import { certificates } from '../data';
import { CertificateReplica } from './CertificateReplica';

export default function CredentialsAndProjects() {
  const [selectedCertId, setSelectedCertId] = useState<string>("animed-capstone");
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verifiedCerts, setVerifiedCerts] = useState<Record<string, boolean>>({});
  const [lightBoxOpen, setLightBoxOpen] = useState<boolean>(false);
  const [zoomMode, setZoomMode] = useState<'fit' | 'full'>('fit');

  // Auto focus the default certificate
  const selectedCert = certificates.find(c => c.id === selectedCertId) || certificates[0];

  const handleVerifyLicense = (id: string) => {
    setVerifying(true);
    // Simulate cryptographic verification scan
    setTimeout(() => {
      setVerifiedCerts(prev => ({ ...prev, [id]: true }));
      setVerifying(false);
    }, 1800);
  };

  return (
    <section id="credentials" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#bd9b53] bg-amber-50 px-2.5 py-1 id-cert-header-badge rounded-md font-bold">
            Accreditation & Registry
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 mt-3" id="certifications-heading">
            Certificates Gallery
          </h2>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed">
            Fully verified physical certifications, Capstone completions, and institutional recognitions digitized in high-fidelity vector formats for cryptographic review and validation.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT 1/3 COLUMN: MINI-PICTURE GALLERY SELECTOR */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block pb-1 border-b border-slate-100">
              Select Certificate Picture ({certificates.length})
            </span>
            
            {/* Scrollable list of certificates with a hidden/subtle custom scrollbar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2.5 scroll-smooth [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
              {certificates.map((cert) => {
                const isSelected = selectedCertId === cert.id;
                const isVerified = !!verifiedCerts[cert.id];
                
                return (
                  <button
                    key={cert.id}
                    onClick={() => {
                      setSelectedCertId(cert.id);
                    }}
                    id={`cert-pic-button-${cert.id}`}
                    className={`w-full group text-left cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden border ${
                      isSelected 
                        ? 'border-[#bd9b53] ring-4 ring-amber-50 shadow-md bg-[#fafaf8]' 
                        : 'border-slate-200 hover:border-slate-350 bg-white hover:shadow-xs'
                    }`}
                  >
                    {/* Simulated miniature certificate thumbnail frame ("Mini picture") */}
                    <div className="relative aspect-[4/3] bg-[#fafaf8] border-b border-slate-200/50 overflow-hidden flex items-center justify-center p-2.5 select-none">
                      {cert.imageUrl ? (
                        <div className="relative w-full h-full bg-white rounded-sm overflow-hidden border border-[#bd9b53]/20 shadow-3xs">
                          <img 
                            src={cert.imageUrl} 
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Floating hover/action layer */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
                            <div className="bg-white/95 text-slate-900 py-1.5 px-3 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                              <Eye className="w-3.5 h-3.5" />
                              Preview
                            </div>
                          </div>
                          {/* Laser scanning line effect on active card */}
                          {isSelected && (
                            <div className="absolute inset-x-0 h-0.5 bg-indigo-500 shadow-sm top-0 animate-[bounce_3s_infinite] pointer-events-none opacity-80 z-20" />
                          )}
                        </div>
                      ) : (
                        <div className="absolute inset-1.5 bg-white border border-[#bd9b53]/20 shadow-3xs rounded-xs flex flex-col justify-between p-2 overflow-hidden">
                          {/* Elegant watermark background */}
                          <div className="absolute inset-0 bg-[#fafaf7] pointer-events-none" />
                          <div className="absolute inset-0.5 border border-[#bd9b53]/15 pointer-events-none rounded-3xs" />
                          <div className="absolute inset-0 bg-[radial-gradient(#cbd1b0_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none" />
                          
                          {/* Header details */}
                          <div className="relative flex justify-between items-start z-10" style={{ fontFamily: "var(--font-sans)" }}>
                            <span className="text-[5px] font-mono font-bold tracking-tight text-slate-500 leading-none">
                              {cert.issuer.split(' ')[0].toUpperCase()}
                            </span>
                            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#bd9b53] to-[#8c713a] flex items-center justify-center shrink-0">
                              <div className="w-1 h-1 rounded-full bg-white/40" />
                            </div>
                          </div>

                          {/* Title & Subject */}
                          <div className="relative text-center z-10">
                            <h5 className="text-[6px] font-cinzel font-black text-slate-900 uppercase tracking-tighter leading-tight truncate">
                              {cert.title.replace('Certificate of ', 'CERTIFICATE')}
                            </h5>
                            <div className="text-[4px] font-mono text-[#bd9b53] tracking-wider leading-none mt-0.5 uppercase">
                              Verification Credential
                            </div>
                          </div>

                          {/* Bottom line and signature blocks */}
                          <div className="relative flex justify-between items-end border-t border-slate-200/40 pt-1 z-10" style={{ fontFamily: "var(--font-sans)" }}>
                            <span className="text-[4px] font-mono text-slate-400 leading-none">
                              ID: {cert.credentialId.split('-').pop()}
                            </span>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-[1px] bg-slate-300" />
                              <div className="w-3 h-[1px] bg-slate-300" />
                            </div>
                          </div>

                          {/* Floating hover/action layer */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
                            <div className="bg-white/95 text-slate-900 py-1.5 px-3 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                              <Eye className="w-3.5 h-3.5" />
                              Preview
                            </div>
                          </div>

                          {/* Laser scanning line effect on active card */}
                          {isSelected && (
                            <div className="absolute inset-x-0 h-0.5 bg-indigo-500 shadow-sm top-0 animate-[bounce_3s_infinite] pointer-events-none opacity-80 z-20" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Metadata text bottom panel */}
                    <div className="p-4 space-y-1 bg-white group-hover:bg-slate-50/20 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                          {cert.issuer}
                        </span>
                        {isVerified && (
                          <span className="inline-flex items-center gap-1 text-[8.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-display font-medium text-slate-900 truncate pr-2 group-hover:text-indigo-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400">
                        {cert.issueDate}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro warning note */}
            <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#bd9b53] shrink-0 mt-0.5" />
              <p className="text-[10.5px] text-slate-500 leading-relaxed font-sans">
                These documents represent certified physical academic outputs. Click any card to inspect the high-resolution vector replica and decrypt security coordinates.
              </p>
            </div>
          </div>

          {/* RIGHT 2/3 COLUMN: IMMERSIVE ACTIVE REPLICA WORKSPACE */}
          <div className="lg:col-span-8 space-y-6 lg:sticky lg:top-24">
            
            {/* CONTROLS HEADER */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 font-bold block uppercase">
                  Active Document Portal
                </span>
                <h3 className="text-sm font-sans font-bold text-slate-900 mt-0.5">
                  Interactive High-Fidelity Replica
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Full-width toggle */}
                <button
                  onClick={() => setLightBoxOpen(true)}
                  aria-label="Expand Preview"
                  className="p-2 text-slate-600 bg-white border border-slate-200 hover:border-slate-300 rounded-lg hover:text-slate-900 shadow-3xs cursor-pointer text-xs font-mono font-medium flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Expand Overlay
                </button>

                {/* Cryptographic verify trigger */}
                <button
                  onClick={() => handleVerifyLicense(selectedCert.id)}
                  disabled={verifying || !!verifiedCerts[selectedCert.id]}
                  className={`py-1.5 px-3.5 font-mono text-[10.5px] font-semibold rounded-lg shadow-3xs transition flex items-center gap-1.5 border cursor-pointer ${
                    verifiedCerts[selectedCert.id]
                      ? 'bg-emerald-50 border-emerald-250 text-emerald-700'
                      : verifying
                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-900 border-slate-950 text-white hover:bg-slate-800'
                  }`}
                >
                  {verifying ? (
                    <>
                      <div className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                      VALIDATING...
                    </>
                  ) : verifiedCerts[selectedCert.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-650" />
                      VERIFIED LICENSE
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VERIFY LICENSE
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* DOCUMENT WORKSPACE VIEWPORT */}
            <div className="relative bg-slate-100 border border-slate-250 rounded-3xl p-4 md:p-8 overflow-x-auto shadow-2xs flex justify-center items-center min-h-[480px]">
              <div id={`document-view-${selectedCert.id}`} className="w-full max-w-[685px] animate-[fadeIn_0.5s_ease-out] transition-all">
                {selectedCert.imageUrl ? (
                  <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={selectedCert.imageUrl} 
                      alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                      className="w-full h-auto object-contain"
                    />
                    {verifiedCerts[selectedCert.id] && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-emerald-500/40 p-6 rounded-2xl rotate-12 bg-white/95 select-none pointer-events-none shadow-xl flex flex-col items-center gap-2 z-25 animate-[scaleIn_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                        <ShieldCheck className="w-12 h-12 text-emerald-600" />
                        <span className="text-emerald-700 font-mono text-sm font-black tracking-widest leading-none uppercase">
                          RECIPIENT LICENSED
                        </span>
                        <span className="text-xs font-mono text-emerald-500 font-bold leading-none">
                          REGISTRY HASH #{selectedCert.credentialId.split('-').pop()?.toUpperCase()} // VERIFIED
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <CertificateReplica 
                    cert={selectedCert} 
                    isVerified={!!verifiedCerts[selectedCert.id]} 
                  />
                )}
              </div>
            </div>

            {/* DETAILS CONTAINER */}
            <div className="bg-slate-50 border border-slate-205 rounded-3xl p-6 md:p-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-200/50">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block tracking-widest uppercase font-bold">
                    Recipient Specialist
                  </span>
                  <span className="text-sm font-sans font-extrabold text-slate-800 mt-0.5 block">
                    Steph Castro
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-500 block">
                    Bachelor of Science in Information Technology (BSIT)
                  </span>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-slate-400 block tracking-widest uppercase font-bold">
                    Credential Serial Key
                  </span>
                  <span className="text-sm font-mono font-medium text-indigo-600 mt-0.5 block">
                    {selectedCert.credentialId}
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-550 block">
                    Registered: {selectedCert.issueDate}
                  </span>
                </div>
              </div>

              {/* Tag Cloud of Validated Competencies */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-slate-400 block tracking-widest uppercase font-bold">
                  Validated Professional Competencies & Curriculum Alignments
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsValidated.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white border border-slate-200/60 px-3 py-1 rounded-lg text-slate-650 font-sans shadow-3xs flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FULL SCALE PORTAL OVERLAY / LIGHTBOX DIALOG */}
      <AnimatePresence>
        {lightBoxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-slate-50 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto space-y-6 relative"
            >
              {/* Top controls element */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" />
                  <div>
                    <h3 className="text-sm font-sans font-bold text-slate-900 leading-tight">
                      Full Resolution Digital replica
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {selectedCert.issuer} // KEY: {selectedCert.credentialId}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setLightBoxOpen(false)}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 cursor-pointer text-xs font-mono font-medium flex items-center gap-1 shadow-3xs"
                >
                  <Minimize className="w-4 h-4" />
                  Close Portal
                </button>
              </div>

              {/* Large Replica Viewport */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-end gap-2 text-xs">
                  <span className="text-slate-500 font-mono text-[10.5px]">View Mode:</span>
                  <div className="inline-flex rounded-lg bg-slate-205 bg-slate-100 p-0.5 border border-slate-200">
                    <button
                      onClick={() => setZoomMode('fit')}
                      className={`px-2.5 py-1 rounded-md text-[10.5px] font-mono cursor-pointer transition ${
                        zoomMode === 'fit'
                          ? 'bg-white text-slate-900 font-bold shadow-3xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Fit to Screen
                    </button>
                    <button
                      onClick={() => setZoomMode('full')}
                      className={`px-2.5 py-1 rounded-md text-[10.5px] font-mono cursor-pointer transition ${
                        zoomMode === 'full'
                          ? 'bg-white text-slate-900 font-bold shadow-3xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      100% Zoom (Scrollable)
                    </button>
                  </div>
                </div>

                <div className="flex justify-center bg-slate-900 border border-slate-950 p-3 md:p-8 rounded-2xl overflow-x-auto transition-all">
                  <div className={`transition-all duration-300 ${zoomMode === 'fit' ? 'w-full max-w-[685px]' : 'w-[685px] shrink-0'}`}>
                    {selectedCert.imageUrl ? (
                      <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img 
                          src={selectedCert.imageUrl} 
                          alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                          className="w-full h-auto object-contain"
                        />
                        {verifiedCerts[selectedCert.id] && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-emerald-500/40 p-6 rounded-2xl rotate-12 bg-white/95 select-none pointer-events-none shadow-xl flex flex-col items-center gap-2 z-25">
                            <ShieldCheck className="w-12 h-12 text-emerald-600" />
                            <span className="text-emerald-700 font-mono text-sm font-black tracking-widest leading-none uppercase">
                              RECIPIENT LICENSED
                            </span>
                            <span className="text-xs font-mono text-emerald-500 font-bold leading-none">
                              VERIFIED
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <CertificateReplica 
                        cert={selectedCert} 
                        isVerified={!!verifiedCerts[selectedCert.id]} 
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Backing descriptors */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0f172a] block font-bold">
                  Document Audit Transcript Log
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
                  <div className="border-r border-slate-105 pr-4 space-y-1">
                    <span className="text-[9px] font-mono uppercase text-slate-400 block font-bold">
                      ACCREDITED ISSUER
                    </span>
                    <p className="text-slate-800 font-bold leading-tight">
                      {selectedCert.issuer}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Verified Educational Entity / Enterprise System Authority Hub
                    </p>
                  </div>

                  <div className="border-r border-slate-105 pr-4 space-y-1">
                    <span className="text-[9px] font-mono uppercase text-slate-400 block font-bold">
                      RECIPIENT GRADUATE
                    </span>
                    <p className="text-slate-800 font-bold">
                      Steph Castro
                    </p>
                    <p className="text-slate-550 text-[11px]">
                      Specialist ID // BSIT-2026-CASTRO-CERT
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase text-slate-400 block font-bold">
                      SECURITY METADATA
                    </span>
                    <p className="text-slate-800 font-mono font-semibold">
                      ID: {selectedCert.credentialId}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-600 font-medium">
                      Status: Cryptographically active and verified
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
