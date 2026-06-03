import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateReplicaProps {
  cert: Certificate;
  isVerified: boolean;
  scale?: 'small' | 'normal' | 'large';
}

// Uniform certificate theme styling configurations
const uniformThemes: Record<string, {
  sealColors: string;
  badgeBg: string;
  sealLabel: string;
  italicIntro: string;
  accentColor: string; // The primary color for highlights
  recipientLabel: string;
  bgTexture: string;
}> = {
  "animed-capstone": {
    sealColors: "from-[#0f172a] via-[#1e293b] to-[#455a64]",
    badgeBg: "bg-slate-50 text-[#bd9b53] border-slate-200",
    sealLabel: "CAPSTONE",
    italicIntro: "This is to officially certify that the Capstone team of",
    accentColor: "#3b82f6",
    recipientLabel: "GRADUATE RESEARCH TEAM",
    bgTexture: "bg-[#FAFAF6]"
  },
  "ojt-completion": {
    sealColors: "from-[#7f1d1d] via-[#991b1b] to-[#991b1b]",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-100",
    sealLabel: "OJT COMP",
    italicIntro: "This certificate is proudly awarded to",
    accentColor: "#be123c",
    recipientLabel: "HONORARY INDUSTRY TRAINEE",
    bgTexture: "bg-[#FAFAF5]"
  },
  "dnsc-seminar": {
    sealColors: "from-[#4c1d95] via-[#5b21b6] to-[#7c3aed]",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
    sealLabel: "SEMINAR",
    italicIntro: "This credential is formally conferred upon",
    accentColor: "#7e22ce",
    recipientLabel: "REGISTERED SYMPOSIUM PARTICIPANT",
    bgTexture: "bg-[#F9FAF4]"
  },
  "cisco-packet-tracer": {
    sealColors: "from-[#115e59] via-[#0f766e] to-[#0d9488]",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-100",
    sealLabel: "CISCO",
    italicIntro: "Cisco Networking Academy hereby officially certifies that",
    accentColor: "#0d9488",
    recipientLabel: "CERTIFIED INDEPENDENT ACADEMY ALUMNI",
    bgTexture: "bg-[#FAFAF7]"
  }
};

const uniformSignatories: Record<string, { name: string; role: string; signatureId: number }[]> = {
  "animed-capstone": [
    { name: "John Ray A. Bautista, DVM", role: "Veterinarian III - Industry Partner", signatureId: 1 }
  ],
  "ojt-completion": [
    { name: "Christine S. Rabanes", role: "OJT Coordinator", signatureId: 2 },
    { name: "Jeffrey C. Alolo", role: "School Administrator", signatureId: 3 }
  ],
  "dnsc-seminar": [
    { name: "Reban Cliff A. Fajardo, MIT", role: "BSIT Program Chairperson", signatureId: 4 },
    { name: "Mark Van M. Buladaco, DBMIS", role: "Dean, Institute of Computing", signatureId: 5 }
  ],
  "cisco-packet-tracer": [
    { name: "Lynn Bloomer", role: "Director, Cisco Networking Academy", signatureId: 6 }
  ]
};

// Returns descriptive content using relative container queries
const renderDescription = (certId: string) => {
  switch (certId) {
    case "animed-capstone":
      return (
        <span className="block">
          fourth-year students of the Bachelor of Science in Information Technology (BSIT) at the Institute of Computing, Davao del Norte State College, have successfully presented, deployed, and implemented their capstone project entitled:
          <span className="block text-slate-900 font-sans font-bold my-[1.5cqw] text-[1.7cqw] leading-[1.4] tracking-tight bg-slate-50 border-l-[0.3cqw] border-[#cfb37c] px-[2cqw] py-[1.2cqw] rounded-r shadow-3xs text-left">
            &ldquo;AniMed: A Machine Learning-Integrated System for Veterinary Records and Prescription Management&rdquo;
          </span>
          spanning February 26, 2026 to April 09, 2026, conforming to high standards of advanced academic execution.
        </span>
      );
    case "ojt-completion":
      return (
        <span className="block">
          has successfully completed the mandatory <span className="text-slate-900 font-extrabold px-[0.5cqw]">486 hours</span> of On-the-Job training at the Holy Child College of Davao del Norte from February 2, 2026 to May 8, 2026, demonstrating exceptional professionalism, system troubleshooting competence, and dedication.
        </span>
      );
    case "dnsc-seminar":
      return (
        <span className="block">
          for successfully completing Day 1 of the Advanced Seminar Series for BSIT 4th Year Students centered on the topic:
          <span className="block text-slate-900 font-sans font-bold my-[1.5cqw] text-[1.7cqw] leading-[1.4] tracking-tight bg-slate-50 border-l-[0.3cqw] border-[#cfb37c] px-[2cqw] py-[1cqw] rounded-r shadow-3xs text-left">
            &ldquo;Journey from Science Practitioner to Information Technology Specialist&rdquo;
          </span>
          conferred via Microsoft Teams interactive platform on October 8, 2025.
        </span>
      );
    case "cisco-packet-tracer":
      return (
        <span className="block">
          has successfully completed the comprehensive self-paced exam and practical laboratory challenges for <span className="text-slate-900 font-bold">Introduction to Packet Tracer</span> through the authorized Cisco Networking Academy program.
        </span>
      );
    default:
      return null;
  }
};

const uniformJurisdiction: Record<string, string> = {
  "animed-capstone": "Panabo City Veterinary Section Office, Panabo City, Davao del Norte, PH.",
  "ojt-completion": "Holy Child College, Brgy New Visayas, Panabo City, Davao del Norte, PH.",
  "dnsc-seminar": "Davao del Norte State College, Panabo City, Davao del Norte, PH.",
  "cisco-packet-tracer": "Issued online via authorized Network Academy portal systems (Cisco NetAcad)."
};

const uniformRecipients: Record<string, string> = {
  "animed-capstone": "Methushiela Alexa Cagaanan, Nash Khent Cajetas, Steph Castro & Jessrell Montalba",
  "ojt-completion": "Steph Castro",
  "dnsc-seminar": "Steph Castro",
  "cisco-packet-tracer": "Steph Castro"
};

// Elegant Signature Ink Matrices
const SVG_SIGNATURES: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-indigo-700/80 fill-none stroke-current stroke-[2.2] stroke-linecap-round opacity-90">
      <path d="M 10,24 C 20,8 28,6 40,21 C 50,32 28,34 38,16 C 50,12 60,6 74,24 C 78,28 82,20 88,23" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-blue-800/85 fill-none stroke-current stroke-[2.2] stroke-linecap-round opacity-90">
      <path d="M 12,18 C 24,25 34,5 44,22 C 34,32 54,12 64,18 C 74,24 84,10 90,20 C 94,22 88,14 92,15" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-violet-850 fill-none stroke-current stroke-[2.4] stroke-linecap-round opacity-85">
      <path d="M 15,22 C 28,12 35,2 45,18 C 55,30 25,32 35,15 C 45,5 65,12 75,18 C 82,22 88,24 92,12" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-emerald-800/90 fill-none stroke-current stroke-[2.2] stroke-linecap-round opacity-90">
      <path d="M 10,20 Q 25,5 35,22 T 55,15 T 75,25 T 90,12" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-indigo-900/85 fill-none stroke-current stroke-[2] stroke-linecap-round opacity-90">
      <path d="M 14,25 C 22,12 32,8 48,12 C 60,15 32,32 42,25 C 55,15 72,12 85,18 Q 90,20 92,15" />
    </svg>
  ),
  6: (
    <svg viewBox="0 0 100 40" className="w-[14cqw] h-[5.5cqw] text-teal-800/85 fill-none stroke-current stroke-[2.2] stroke-linecap-round opacity-90">
      <path d="M 12,15 C 25,30 35,5 48,15 C 58,22 50,32 62,12 C 74,2 80,18 90,21" />
    </svg>
  )
};

export const CertificateReplica: React.FC<CertificateReplicaProps> = ({
  cert,
  isVerified,
  scale = 'normal'
}) => {
  const theme = uniformThemes[cert.id] || uniformThemes["animed-capstone"];
  const signatories = uniformSignatories[cert.id] || [];
  const locationText = uniformJurisdiction[cert.id] || '';
  const recipientName = uniformRecipients[cert.id] || 'Steph Castro';

  return (
    <div className="w-full @container" style={{ contentVisibility: 'auto' }}>
      <div 
        className={`w-full relative shadow-[0_4cqw_8cqw_-2cqw_rgba(182,163,115,0.25),0_0_0_0.1cqw_rgba(189,155,83,0.18)] overflow-hidden flex flex-col justify-between select-none p-[5cqw] sm:p-[6cqw] border border-slate-350/80 rounded-[3cqw] ${theme.bgTexture} text-slate-800 aspect-[1.414/1] transition-all`}
        style={{
          fontFamily: "var(--font-serif)"
        }}
      >
        {/* 1. LUXURY PAPYRUS BACKDROP EFFECTS */}
        <div className="absolute inset-0 bg-radial-gradient from-white/60 to-transparent pointer-events-none" />
        
        {/* 2. SECURITY GUILLOCHE SIMULATION LINE LAYERS */}
        <div className="absolute inset-[2.2cqw] border-[0.2cqw] border-[#bd9b53]/45 pointer-events-none rounded-[2cqw]" />
        <div className="absolute inset-[2.8cqw] border-[0.1cqw] border-[#bd9b53]/25 pointer-events-none rounded-[1.6cqw]" />
        
        {/* Double Gold Guilloche Inner Border Accent */}
        <div className="absolute inset-[1.4cqw] border-[0.1cqw] border-dashed border-[#bd9b53]/30 pointer-events-none rounded-[2.2cqw]" />

        {/* Elegant Classical Corner Ornaments */}
        <div className="absolute top-[2.2cqw] left-[2.2cqw] w-[4cqw] h-[4cqw] pointer-events-none">
          <div className="absolute top-0 left-0 w-[4cqw] h-[0.15cqw] bg-[#bd9b53]/80" />
          <div className="absolute top-0 left-0 w-[0.15cqw] h-[4cqw] bg-[#bd9b53]/80" />
          <div className="absolute top-[0.4cqw] left-[0.4cqw] w-[2.5cqw] h-[2.5cqw] border-l-[0.1cqw] border-t-[0.1cqw] border-[#bd9b53]/40" />
        </div>

        <div className="absolute top-[2.2cqw] right-[2.2cqw] w-[4cqw] h-[4cqw] pointer-events-none">
          <div className="absolute top-0 right-0 w-[4cqw] h-[0.15cqw] bg-[#bd9b53]/80" />
          <div className="absolute top-0 right-0 w-[0.15cqw] h-[4cqw] bg-[#bd9b53]/80" />
          <div className="absolute top-[0.4cqw] right-[0.4cqw] w-[2.5cqw] h-[2.5cqw] border-r-[0.1cqw] border-t-[0.1cqw] border-[#bd9b53]/40" />
        </div>

        <div className="absolute bottom-[2.2cqw] left-[2.2cqw] w-[4cqw] h-[4cqw] pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[4cqw] h-[0.15cqw] bg-[#bd9b53]/80" />
          <div className="absolute bottom-0 left-0 w-[0.15cqw] h-[4cqw] bg-[#bd9b53]/80" />
          <div className="absolute bottom-[0.4cqw] left-[0.4cqw] w-[2.5cqw] h-[2.5cqw] border-l-[0.1cqw] border-b-[0.1cqw] border-[#bd9b53]/40" />
        </div>

        <div className="absolute bottom-[2.2cqw] right-[2.2cqw] w-[4cqw] h-[4cqw] pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[4cqw] h-[0.15cqw] bg-[#bd9b53]/80" />
          <div className="absolute bottom-0 right-0 w-[0.15cqw] h-[4cqw] bg-[#bd9b53]/80" />
          <div className="absolute bottom-[0.4cqw] right-[0.4cqw] w-[2.5cqw] h-[2.5cqw] border-r-[0.1cqw] border-b-[0.1cqw] border-[#bd9b53]/40" />
        </div>

        {/* 3. DOCUMENT METADATA & INSTITUTION HEADER */}
        <div className="relative z-10 flex justify-between items-center gap-[1.5cqw] border-b border-slate-200/40 pb-[1.5cqw]">
          <div className="flex items-center gap-[1.5cqw]">
            {/* Authentic Round Imprimatur Seal & Dynamic Ring Ribbon */}
            <div className="relative w-[8cqw] h-[8cqw] rounded-full border-[0.15cqw] border-[#bd9b53] bg-white flex items-center justify-center shadow-xs shrink-0">
              <div className={`w-[6.4cqw] h-[6.4cqw] rounded-full bg-gradient-to-br ${theme.sealColors} flex items-center justify-center p-[0.3cqw] shadow-inner`}>
                <div className="w-[5.2cqw] h-[5.2cqw] rounded-full border border-dashed border-white/50 flex items-center justify-center">
                  <span className="text-[0.7cqw] text-white font-mono tracking-tighter leading-none font-black block text-center uppercase">
                    {theme.sealLabel}
                  </span>
                </div>
              </div>
              {/* Hanging Ribbon tails style for elegant seal realism */}
              <div className="absolute -bottom-[1cqw] left-1/2 -translate-x-1/2 flex gap-[0.2cqw] justify-center z-[-1]">
                <div className="w-[1.4cqw] h-[2.2cqw] bg-red-800/80 rounded-b shadow-[0_0.2cqw_0.3cqw_rgba(0,0,0,0.15)] rotate-12" />
                <div className="w-[1.4cqw] h-[2.2cqw] bg-red-900/95 rounded-b shadow-[0_0.2cqw_0.3cqw_rgba(0,0,0,0.15)] -rotate-12" />
              </div>
            </div>
            <div>
              <h5 className="text-[1.5cqw] font-cinzel leading-none tracking-[0.2cqw] font-black text-slate-900 uppercase">
                {cert.issuer}
              </h5>
              <span className="text-[1cqw] font-mono tracking-wider text-[#bd9b53] font-bold uppercase block mt-[0.4cqw]">
                Verified Registrar Service Node
              </span>
            </div>
          </div>

          {/* Cryptographic Registry Coordinates */}
          <div className="text-right font-mono text-[1.10cqw] text-slate-550 leading-relaxed max-w-[32cqw] truncate">
            <div>HASH: <span className="text-slate-900 font-bold tracking-tight">{cert.credentialId.split('-').pop()?.toUpperCase()}</span></div>
            <div>DATE: <span className="text-slate-900 font-bold">{cert.issueDate}</span></div>
            <div>SERIAL: <span className="text-slate-900 font-semibold">{cert.credentialId.toUpperCase()}</span></div>
          </div>
        </div>

        {/* 4. UNIFIED CORE HEADER SECTION */}
        <div className="text-center relative z-10 my-[1.5cqw]">
          <span className="inline-flex items-center gap-[0.5cqw] text-[1.20cqw] font-mono tracking-[0.3cqw] text-[#bd9b53] font-extrabold uppercase">
            <Award className="w-[1.8cqw] h-[1.8cqw] text-[#bd9b53]" />
            Official Academic Record & Credit Registry
          </span>
          <h1 
            className="text-[3.3cqw] font-cinzel text-slate-900 leading-tight tracking-tight font-black mt-[0.5cqw]"
            style={{ letterSpacing: "-0.015em" }}
          >
            {cert.title.includes('Introduction') ? 'Certificate of Course Completion' : 'Certificate of Achievement'}
          </h1>
          <div className="w-[18cqw] h-[1px] bg-gradient-to-r from-transparent via-[#bd9b53] to-transparent mx-auto mt-[0.8cqw]" />
        </div>

        {/* 5. COHORT RECIPIENT BLOCK (BEAUTIFULLY SPACED) */}
        <div className="text-center relative z-10 my-[1cqw] space-y-[0.8cqw]">
          <p className="text-[1.6cqw] italic text-slate-500 font-serif leading-none">
            {theme.italicIntro}
          </p>
          
          {/* Customized Nameplate styled consistently with elegant contrast */}
          <div className="py-[1cqw] max-w-[80%] mx-auto border-y border-[#bd9b53]/15">
            <h2 
              className="text-[3.2cqw] text-slate-900 font-black tracking-tight inline-block px-[1cqw]"
              style={{ 
                fontFamily: "var(--font-serif)",
                textShadow: "1px 1px 0px rgba(255,255,255,0.8)",
                lineHeight: "1.2"
              }}
            >
              {recipientName}
            </h2>
            <span className="block text-[1.10cqw] font-mono text-[#b3954f] mt-[0.4cqw] uppercase tracking-[0.2cqw] font-black">
              {theme.recipientLabel} &bull; COHORT SEC-01
            </span>
          </div>

          {/* Dynamic Descriptive Frame */}
          <p className="text-[1.55cqw] text-slate-650 leading-relaxed font-sans max-w-[92%] mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            {renderDescription(cert.id)}
          </p>
        </div>

        {/* 6. IMMACULATE LAYOUT FOOTER */}
        <div className="relative z-10 pt-[1.5cqw] border-t border-slate-200/50" style={{ fontFamily: "var(--font-sans)" }}>
          <div className="flex justify-between items-end gap-[2cqw]">
            
            {/* Institutional Jurisdiction */}
            <div className="space-y-[0.4cqw] text-left max-w-[40%]">
              <span className="text-[1cqw] font-mono text-[#bd9b53] uppercase font-black tracking-widest flex items-center gap-[0.3cqw]">
                <MapPin className="w-[1.4cqw] h-[1.4cqw]" />
                AFFILIATED JURISDICTION
              </span>
              <p className="text-[1.15cqw] font-sans text-slate-600 leading-normal font-medium">
                {locationText}
              </p>
            </div>

            {/* Unified Signatories Alignments */}
            <div className="flex gap-[4cqw] items-end shrink-0 justify-end">
              {signatories.map((sig, sIdx) => (
                <div key={sIdx} className="text-center relative min-w-[18cqw] max-w-[25cqw]">
                  {/* Genuine Cursive overlay positioning */}
                  <div className="absolute -top-[3cqw] left-1/2 -translate-x-1/2 z-15 pointer-events-none select-none">
                    {SVG_SIGNATURES[sig.signatureId] || SVG_SIGNATURES[1]}
                  </div>

                  <div className="w-full h-[1px] bg-slate-300 rounded mx-auto" />
                  <h6 className="text-[1.3cqw] font-sans font-bold text-slate-900 mt-[0.8cqw] leading-none whitespace-nowrap">
                    {sig.name}
                  </h6>
                  <span className="text-[1cqw] font-mono text-slate-400 uppercase tracking-wider block mt-[0.3cqw] whitespace-nowrap">
                    {sig.role}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 7. BLOCKCHAIN CRITICAL SECURITY ACCREDITATION OVERLAY */}
        {isVerified && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[0.3cqw] border-emerald-500/40 p-[1.8cqw] rounded-[2cqw] rotate-[12deg] bg-white/95 select-none pointer-events-none shadow-xl flex flex-col items-center gap-[0.2cqw] z-25 animate-[scaleIn_0.35s_cubic-bezier(0.16,1,0.3,1)]" style={{ fontFamily: "var(--font-mono)" }}>
            <ShieldCheck className="w-[4cqw] h-[4cqw] text-emerald-600" />
            <span className="text-emerald-700 font-mono text-[1.25cqw] font-black tracking-widest leading-none uppercase">
              RECIPIENT LICENSED
            </span>
            <span className="text-[0.9cqw] font-mono text-emerald-500 font-bold leading-none mt-[0.2cqw]">
              REGISTRY HASH #{cert.credentialId.split('-').pop()?.toUpperCase()} // VERIFIED
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
