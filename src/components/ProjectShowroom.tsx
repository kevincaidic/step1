import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Laptop, Shield, Play, TreePine, Home, Grid, Stethoscope, 
  Layers, Check, Sparkles, X, ArrowUpRight, Trophy, Star, RefreshCw, AlertCircle
} from 'lucide-react';
import { sideProjects } from '../data';
import { SideProject } from '../types';

export default function ProjectShowroom() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Custom interactive state for Cup Guessing Game
  const [cupGame, setCupGame] = useState<{
    shuffling: boolean;
    ballPosition: number; // 0, 1, 2
    selectedCup: number | null;
    gameState: 'idle' | 'shuffled' | 'won' | 'lost';
    score: number;
    highScore: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }>({
    shuffling: false,
    ballPosition: 1,
    selectedCup: null,
    gameState: 'idle',
    score: 0,
    highScore: 3,
    difficulty: 'easy'
  });

  // Custom interactive state for AniMed Diagnose Simulator
  const [aniMedState, setAniMedState] = useState<{
    symptoms: string[];
    age: number;
    weight: number;
    prediction: string | null;
    medicines: string[];
  }>({
    symptoms: [],
    age: 2,
    weight: 25,
    prediction: null,
    medicines: []
  });

  // Custom interactive star rating state for Real Estate system
  const [brokerRating, setBrokerRating] = useState<number>(5);
  const [buyerType, setBuyerType] = useState<'buyer' | 'agent'>('buyer');

  // Custom interactive selection for LMS
  const [lmsRole, setLmsRole] = useState<'staff' | 'borrower' | null>(null);

  const selectedProject = sideProjects.find(p => p.id === selectedProjectId) || null;

  // Icons matching each project
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'yir': return BookOpen;
      case 'lms': return Laptop;
      case 'barangay-monitoring': return Shield;
      case 'cup-game': return Play;
      case 'mangro-vision': return TreePine;
      case 'buy-sell': return Home;
      case 'sudo-quest': return Grid;
      case 'animed': return Stethoscope;
      default: return Layers;
    }
  };

  // Color theme matching each project
  const getProjectColors = (id: string) => {
    switch (id) {
      case 'yir': return {
        bg: 'from-indigo-600/5 to-indigo-50/20 border-indigo-200/55',
        accent: 'bg-indigo-50 text-indigo-700 border-indigo-100',
        brand: 'indigo', text: 'text-indigo-600'
      };
      case 'lms': return {
        bg: 'from-blue-600/5 to-blue-50/20 border-blue-200/55',
        accent: 'bg-blue-50 text-blue-700 border-blue-100',
        brand: 'blue', text: 'text-blue-600'
      };
      case 'barangay-monitoring': return {
        bg: 'from-emerald-600/5 to-emerald-50/20 border-emerald-200/55',
        accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        brand: 'emerald', text: 'text-emerald-700'
      };
      case 'cup-game': return {
        bg: 'from-amber-600/5 to-amber-50/20 border-amber-200/55',
        accent: 'bg-amber-50 text-amber-700 border-amber-100',
        brand: 'amber', text: 'text-amber-700'
      };
      case 'mangro-vision': return {
        bg: 'from-teal-600/5 to-teal-50/20 border-teal-200/55',
        accent: 'bg-teal-50 text-teal-700 border-teal-100',
        brand: 'teal', text: 'text-teal-700'
      };
      case 'buy-sell': return {
        bg: 'from-rose-600/5 to-rose-50/20 border-rose-200/55',
        accent: 'bg-rose-50 text-rose-700 border-rose-100',
        brand: 'rose', text: 'text-rose-700'
      };
      case 'sudo-quest': return {
        bg: 'from-purple-600/5 to-purple-50/20 border-purple-200/55',
        accent: 'bg-purple-50 text-purple-700 border-purple-100',
        brand: 'purple', text: 'text-purple-700'
      };
      case 'animed': return {
        bg: 'from-amber-600/5 to-stone-50/20 border-amber-200/40',
        accent: 'bg-amber-50 text-amber-700 border-amber-100',
        brand: 'amber', text: 'text-amber-800'
      };
      default: return {
        bg: 'from-slate-600/5 to-slate-50/20 border-slate-250',
        accent: 'bg-slate-50 text-slate-700 border-slate-100',
        brand: 'indigo', text: 'text-indigo-600'
      };
    }
  };

  // --- Playable Cup Guessing Game actions ---
  const shuffleCups = () => {
    setCupGame(prev => ({
      ...prev,
      shuffling: true,
      selectedCup: null,
      gameState: 'shuffled'
    }));
    
    // Animate shuffling delay
    setTimeout(() => {
      const randomPos = Math.floor(Math.random() * 3);
      setCupGame(prev => ({
        ...prev,
        shuffling: false,
        ballPosition: randomPos
      }));
    }, 1200);
  };

  const selectCup = (cupId: number) => {
    if (cupGame.shuffling || cupGame.gameState === 'idle') return;
    
    const won = cupId === cupGame.ballPosition;
    setCupGame(prev => {
      const nextScore = won ? prev.score + 1 : 0;
      return {
        ...prev,
        selectedCup: cupId,
        gameState: won ? 'won' : 'lost',
        score: nextScore,
        highScore: Math.max(prev.highScore, nextScore)
      };
    });
  };

  const changeDifficulty = (diff: 'easy' | 'medium' | 'hard') => {
    setCupGame(prev => ({ ...prev, difficulty: diff }));
  };

  // --- AniMed diagnosis predictor actions ---
  const toggleSymptom = (symptom: string) => {
    setAniMedState(prev => {
      const current = prev.symptoms;
      const next = current.includes(symptom) 
        ? current.filter(s => s !== symptom) 
        : [...current, symptom];
      
      // Compute mock diagnostics on-the-fly
      let prediction = null;
      let medicines: string[] = [];

      if (next.includes("High Fever") && next.includes("Weakness") && next.includes("Cough")) {
        prediction = "Hemorrhagic Septicemia (HS)";
        medicines = ["Penicillin-G", "Sulfadimidine 33.3%", "Supportive IV Hydration"];
      } else if (next.includes("Loose Stool") && next.includes("Dehydration")) {
        prediction = "Colibacillosis (E. coli Enteritis)";
        medicines = ["Neomycin Powder", "Oral Rehydration Salts (ORS)", "Enrofloxacin Drops"];
      } else if (next.includes("Ticks/Lice") && next.includes("Hair Loss")) {
        prediction = "Demodectic Mange / Parasitemia";
        medicines = ["Ivermectin Spot-on", "Amitraz Wash", "Multivitamin Supplement"];
      } else if (next.length > 0) {
        prediction = "Mild Nutritional Deficiency / Local Infection";
        medicines = ["Broad-Spectrum Amoxicillin", "Vitamin B-Complex Boosters"];
      }

      return {
        ...prev,
        symptoms: next,
        prediction,
        medicines
      };
    });
  };

  // --- Custom High-Fidelity UI Screen Mockup Renderers for each system ---
  const renderProjectMockup = (id: string) => {
    switch (id) {
      case 'yir':
        return (
          <div className="relative w-full h-[210px] bg-[#fcf9f2] rounded-t-2xl overflow-hidden flex flex-col justify-end items-center p-3">
            {/* Massive YIR logo backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] text-stone-900/10 font-bold text-[7.5rem] tracking-tighter select-none font-sans font-black z-0">
              YIR
            </div>
            
            {/* Waving Figures illustration */}
            <div className="flex justify-center items-end gap-1 relative z-10 w-full max-w-[240px]">
              {/* Green */}
              <div className="flex flex-col items-center shrink-0 w-8">
                <div className="w-3.5 h-3.5 rounded-full bg-[#fdd8bf] mb-0.5" />
                <div className="w-7 h-12 bg-[#2e7d32] rounded-t-lg relative">
                  <div className="absolute -left-1.5 top-1.5 w-2 h-7 bg-[#2e7d32] origin-bottom -rotate-45 rounded-full" />
                </div>
              </div>
              
              {/* White */}
              <div className="flex flex-col items-center shrink-0 w-8">
                <div className="w-3.5 h-3.5 rounded-full bg-[#f8b495] mb-0.5" />
                <div className="w-7 h-15 bg-[#fbfbef] rounded-t-lg relative">
                  <div className="absolute -left-1.5 top-1.5 w-2 h-9 bg-[#fbfbef] origin-bottom -rotate-30 rounded-full" />
                </div>
              </div>

              {/* Yellow center leader */}
              <div className="flex flex-col items-center shrink-0 w-9 z-20">
                <div className="w-4 h-4 rounded-full bg-[#fdd8bf] mb-0.5" />
                <div className="w-8 h-18 bg-[#f9a825] rounded-t-lg relative">
                  <div className="absolute -right-1.5 top-1.5 w-2 w-2 h-10 bg-[#f9a825] origin-bottom rotate-45 rounded-full" />
                </div>
              </div>

              {/* Light Green skirt */}
              <div className="flex flex-col items-center shrink-0 w-8">
                <div className="w-3.5 h-3.5 rounded-full bg-[#f8b495] mb-0.5" />
                <div className="w-7 h-14 bg-[#ffffff] rounded-t-lg relative">
                  <div className="absolute -right-1.5 top-1.5 w-2 h-7 bg-[#ffffff] origin-bottom rotate-45 rounded-full" />
                  <div className="absolute bottom-0 w-full h-6 bg-[#00695c]" />
                </div>
              </div>

              {/* Red */}
              <div className="flex flex-col items-center shrink-0 w-8">
                <div className="w-3.5 h-3.5 rounded-full bg-[#fdd8bf] mb-0.5" />
                <div className="w-7 h-11 bg-[#c62828] rounded-t-lg relative">
                  <div className="absolute -right-1 top-1.5 w-2 h-6 bg-[#c62828] origin-bottom rotate-30 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Green field layout overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#e4edd2] opacity-80 z-0" />
          </div>
        );

      case 'lms':
        return (
          <div className="relative w-full h-[210px] bg-[#d5f3f5] rounded-t-2xl overflow-hidden flex items-center justify-center p-3">
            {/* Laptop model design representer */}
            <div className="w-[88%] bg-slate-900 p-[4px] rounded-lg border border-slate-750 shadow-md flex flex-col relative z-10">
              {/* Screen outer */}
              <div className="bg-[#ccf2f4] rounded p-2 flex flex-col justify-between aspect-video border border-slate-950 relative">
                
                {/* Logo and title lockup */}
                <div className="flex items-center justify-center gap-1.5 pt-0.5">
                  <span className="text-[7.5px]">📖</span>
                  <span className="font-sans font-extrabold text-[#113233] text-[7px] tracking-tight leading-none uppercase">
                    Library Management System
                  </span>
                </div>
                
                {/* Type Selection label */}
                <p className="text-[5.5px] text-[#4f7273] font-mono text-center font-bold">Select Type of User:</p>

                {/* System roles selector layout */}
                <div className="grid grid-cols-2 gap-1.5 px-2 pb-0.5">
                  <div className="bg-[#0e6f77] rounded-md p-1 flex flex-col items-center justify-center border border-teal-800">
                    <span className="text-[7px]">⚙️</span>
                    <span className="text-[4.5px] text-white font-mono font-bold mt-[2px] leading-none">STAFF</span>
                  </div>
                  <div className="bg-[#0e6f77] rounded-md p-1 flex flex-col items-center justify-center border border-teal-800">
                    <span className="text-[7px]">👤</span>
                    <span className="text-[4.5px] text-white font-mono font-bold mt-[2px] leading-none">BORROWER</span>
                  </div>
                </div>
              </div>
              
              {/* Device bottom bar plate */}
              <div className="h-[6px] w-[104%] -ml-[2%] bg-slate-750 rounded-b-md border-t border-slate-600 flex justify-center items-center">
                <div className="h-[2px] w-[25%] bg-slate-900 rounded-full" />
              </div>
            </div>
          </div>
        );

      case 'barangay-monitoring':
        return (
          <div className="relative w-full h-[210px] bg-gradient-to-t from-[#026cb1] to-[#044a88] rounded-t-2xl overflow-hidden flex flex-col justify-center items-center p-3">
            {/* Custom vector Seal circle */}
            <div className="w-[88px] h-[88px] bg-white rounded-full border-2.5 border-amber-400 p-[1px] flex items-center justify-center shadow-lg relative z-10 transition duration-300">
              <div className="w-full h-full rounded-full border border-blue-800 bg-gradient-to-b from-[#4caf50] to-[#1b5e20] relative flex flex-col justify-between p-1 overflow-hidden">
                <div className="self-center mt-1.5 flex flex-col items-center z-10 relative">
                  <span className="text-[9px] text-amber-300">🎪</span>
                  <span className="text-[6.5px] text-red-500 font-bold -mt-1">👥</span>
                </div>
                <div className="flex justify-between items-end px-2 mb-1 relative z-10">
                  <span className="text-[6px]">🛖</span>
                  <span className="text-[7px] transform -scale-x-100">🌴</span>
                </div>
                {/* Background layout guide dividers */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>
            </div>

            {/* Seal Text display below */}
            <h4 className="text-white font-sans font-black text-[11px] tracking-tight text-center mt-3 uppercase relative z-10 leading-none">
              Barangay New Visayas
            </h4>
            <p className="text-yellow-300 font-mono text-[7.5px] font-bold text-center uppercase tracking-widest mt-1 relative z-10">
              Panabo City
            </p>
          </div>
        );

      case 'cup-game':
        return (
          <div className="relative w-full h-[210px] bg-gradient-to-b from-[#41dfff] to-[#019fe5] rounded-t-2xl overflow-hidden flex flex-col justify-between items-center p-3">
            <div className="self-end flex gap-0.5 text-amber-300 text-[8px]">
              ★★★★★
            </div>

            <div className="text-center -mt-0.5">
              <h4 className="font-display font-black text-[#2e2d4d] text-lg tracking-tight uppercase leading-none drop-shadow-sm" style={{ textShadow: '1.5px 1.5px 0px rgba(255, 255, 255, 0.8)' }}>
                CUP GAME
              </h4>
            </div>

            {/* Retro Play button container */}
            <div className="w-[82%] bg-[#efefef] border-[2px] border-slate-900 px-3 py-1.5 rounded-full text-center shadow">
              <span className="font-sans font-black text-slate-800 text-[8.5px] tracking-wider block leading-none">
                EYES ON. GAME ON.
              </span>
            </div>

            {/* Platform bonsai indicator */}
            <span className="absolute bottom-1 right-1 opacity-40 text-lg">🌳</span>
          </div>
        );

      case 'mangro-vision':
        return (
          <div className="relative w-full h-[210px] bg-[#ecfae3] rounded-t-2xl overflow-hidden flex flex-col justify-center items-center p-3">
            <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center relative bg-white border border-green-150 p-2 shadow-2xs">
              <div className="w-full h-full text-green-800 flex items-center justify-center relative">
                <span className="text-3xl">🌳</span>
                <span className="absolute text-xs font-sans font-extrabold text-black/80 bottom-2">👤</span>
              </div>
            </div>

            <div className="text-center mt-2.5">
              <h4 className="font-sans font-black text-[#1b4332] text-xs tracking-tight inline-flex items-center gap-0.5 leading-none">
                Mangro<span className="text-green-600 font-bold">Vision</span>
              </h4>
              <p className="text-slate-500 font-mono text-[8px] font-bold mt-1 uppercase tracking-wider">
                Protect, Detect, Preserve
              </p>
            </div>
          </div>
        );

      case 'buy-sell':
        return (
          <div className="relative w-full h-[210px] bg-gradient-to-br from-[#8d6f64] to-[#4e342e] rounded-t-2xl overflow-hidden flex flex-col justify-center items-center p-3">
            <div className="w-[72px] h-[72px] bg-[#3e2723] rounded-xl border border-amber-500/80 flex flex-col justify-center items-center p-1 shadow-lg relative z-10 transition">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm shadow">
                🏡
              </div>
              <span className="text-white font-mono font-black text-[6.5px] tracking-wide mt-1.5 leading-none text-center">
                BUY & SELL
              </span>
              <span className="text-amber-400 font-sans text-[5px] mt-0.5 leading-none text-center block opacity-80 uppercase leading-none">
                BUY A SELL LAND
              </span>
            </div>
            
            {/* Background pattern grid element */}
            <div className="absolute inset-0 opacity-10 pointer-events-none border border-amber-950 grid grid-cols-4 grid-rows-4" />
          </div>
        );

      case 'sudo-quest':
        return (
          <div className="relative w-full h-[210px] bg-[#f5fbeb] rounded-t-2xl overflow-hidden flex flex-col justify-center items-center p-3">
            {/* 3x3 Mock sudoku board */}
            <div className="grid grid-cols-3 gap-0.5 w-[66px] h-[66px] bg-[#3f5d2d]/20 p-0.5 rounded-md border border-[#3f5d2d]/40 mb-2.5">
              <div className="bg-white rounded-[1.5px]" />
              <div className="bg-white rounded-[1.5px] flex items-center justify-center font-mono text-[9px] font-bold text-[#3f5d2d]">8</div>
              <div className="bg-white rounded-[1.5px]" />
              
              <div className="bg-white rounded-[1.5px] flex items-center justify-center font-mono text-[9px] font-bold text-[#3f5d2d]">3</div>
              <div className="bg-white rounded-[1.5px]" />
              <div className="bg-white rounded-[1.5px] flex items-center justify-center font-mono text-[9px] font-bold text-[#3f5d2d]">4</div>
              
              <div className="bg-white rounded-[1.5px]" />
              <div className="bg-white rounded-[1.5px]" />
              <div className="bg-white rounded-[1.5px]" />
            </div>

            <h4 className="font-display font-black text-[#3c5030] text-xs tracking-tight leading-none">
              SudoQuest
            </h4>
            <p className="text-slate-500 font-sans text-[8px] mt-0.5 italic leading-none text-center">
              Your daily logic adventure.
            </p>
          </div>
        );

      case 'animed':
        return (
          <div className="relative w-full h-[210px] bg-[#0c101d] rounded-t-2xl overflow-hidden flex flex-col justify-center items-center p-3">
            <div className="w-[85%] h-[78px] bg-[#11192e] rounded-xl border border-amber-500/30 p-2 relative flex flex-col justify-between shadow-inner">
              <div className="flex justify-between items-center text-[6.5px] font-mono text-amber-500/70">
                <span>AI_DIAGNOSIS_PASS_12</span>
                <span>STATUS: LIVE</span>
              </div>
              
              <div className="w-full h-6 flex items-center mb-0.5 relative overflow-hidden">
                <svg viewBox="0 0 100 40" className="w-full h-full stroke-red-500 stroke-2 fill-none">
                  <path d="M 0 20 L 30 20 L 35 5 L 40 35 L 45 20 L 60 20 L 65 10 L 70 30 L 75 20 L 100 20" />
                </svg>
              </div>

              <div className="flex justify-between items-end text-[6.5px] font-mono text-slate-400">
                <span>PET_RECORD: 92.4% ACCURACY</span>
                <span>PANABO CITY</span>
              </div>
            </div>

            <h4 className="text-white font-sans font-bold text-[10.5px] tracking-tight uppercase text-center mt-3 flex items-center gap-1 justify-center">
              🐾 AniMed ML diagnostics
            </h4>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-[210px] bg-slate-900 rounded-t-2xl overflow-hidden flex items-center justify-center text-slate-400">
            System Mockup Screen
          </div>
        );
    }
  };

  return (
    <section id="works-extended" className="py-20 bg-slate-50 border-t border-slate-200/65 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#bd9b53] bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-250/50 px-2.5 py-1 rounded-md font-bold inline-block">
            System Showroom & Engineering Registry
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-4 tracking-tight">
            Comprehensive Project Catalog
          </h2>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-2xl">
            A specialized look at standard organizational software, real estate architectures, ecological diagnostic platforms, and gaming simulators designed to modernize, simplify, and track critical day-to-day operations.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sideProjects.map((project) => {
            const colors = getProjectColors(project.id);
            const Icon = getProjectIcon(project.id);
            
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProjectId(project.id)}
                className="group relative bg-white border border-slate-200/80 hover:border-[#bd9b53]/40 rounded-2xl shadow-3xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer active:scale-[0.99]"
              >
                {/* Visual Screenshot Representation (Primary Image element) */}
                <div className="relative overflow-hidden">
                  {project.imageUrl ? (
                    <div className="relative w-full h-[210px] bg-slate-50 rounded-t-2xl overflow-hidden flex items-center justify-center">
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.title} - ${project.category}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    renderProjectMockup(project.id)
                  )}
                  
                  {/* Glassmorphic Inspect Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-25 text-white backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                      View full details & mockup
                    </span>
                    <span className="text-[10px] text-slate-300">
                      Click to expand description
                    </span>
                  </div>
                </div>

                {/* Subtitle & Header description below the image */}
                <div className="p-5 space-y-3.5 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category and Year badge row */}
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className={`font-bold tracking-wider uppercase px-2 py-0.5 rounded ${colors.accent}`}>
                        {project.category}
                      </span>
                      <span className="text-slate-400 font-bold">
                        {project.year}
                      </span>
                    </div>

                    {/* Simple Title */}
                    <h3 className="font-sans font-extrabold text-slate-900 group-hover:text-amber-500 transition-colors text-base tracking-tight pt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Footing actions / spec indicators */}
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[10.5px] font-mono text-slate-500">
                    <span className="text-slate-400">
                      Core focus: <strong className="text-slate-700 font-black">{project.metric || 'Central System'}</strong>
                    </span>
                    <span className="text-amber-600 font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Inspect ➜
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DETAILED INTERACTIVE POPUP / LIGHTBOX DIALOG */}
        <AnimatePresence>
          {selectedProjectId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-110 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 24, stiffness: 320 }}
                className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto space-y-6 relative text-slate-800"
              >
                
                {/* Header Controls */}
                <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#bd9b53] font-bold">
                      System Demonstration Profile
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-black text-slate-950">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProjectId(null);
                      // Reset LMS views
                      setLmsRole(null);
                    }}
                    className="p-1.5 hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-slate-800 transition shadow-3xs cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Two-Column split details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Specs Text */}
                  <div className="lg:col-span-5 space-y-5">
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">
                        Architectural Concept
                      </span>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
                      <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold border-b border-slate-200 pb-1">
                        Platform Specifications
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-[10px] font-mono">
                        <div>
                          <p className="text-slate-400">CATEGORY</p>
                          <p className="text-slate-800 font-bold">{selectedProject.category}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">ACCENT REF</p>
                          <p className="text-indigo-600 font-bold">SHA-256 Verified</p>
                        </div>
                        <div>
                          <p className="text-slate-400">YEAR COMPILED</p>
                          <p className="text-slate-800 font-bold">{selectedProject.year}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">FOCUS METRIC</p>
                          <p className="text-emerald-600 font-bold">{selectedProject.metric}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold mb-2">
                        Platform Tags & Target Core
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[10px] font-sans bg-slate-100 border border-slate-250 text-slate-600 px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Custom-Built CSS Interactive Schematic Mockups */}
                  <div className="lg:col-span-7 bg-slate-900 border border-slate-950 p-4 md:p-6 rounded-2xl flex flex-col justify-between text-slate-200 min-h-[360px]">
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pb-2 border-b border-slate-800">
                      <span>• ACTIVE SIMULATION FEEDBACK</span>
                      <span>{selectedProject.id.toUpperCase()}_CORE.SYS</span>
                    </div>

                    {/* MOCKUP 1: YIR */}
                    {selectedProject.id === 'yir' && (
                      <div className="flex-1 flex flex-col justify-between my-4 font-sans text-xs">
                        <div className="space-y-3">
                          <h4 className="text-center text-sm font-semibold text-white">YIR Central Library Operations</h4>
                          <div className="grid grid-cols-3 gap-2.5">
                            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                              <span className="text-[9px] font-mono text-slate-400 uppercase">Book Records</span>
                              <p className="text-base font-bold text-white mt-1">12,482</p>
                              <span className="text-[8.5px] text-indigo-400 block">+150 this week</span>
                            </div>
                            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                              <span className="text-[9px] font-mono text-slate-400 uppercase">Total Members</span>
                              <p className="text-base font-bold text-white mt-1">4,281</p>
                              <span className="text-[8.5px] text-emerald-400 block">+84 online IP</span>
                            </div>
                            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                              <span className="text-[9px] font-mono text-slate-400 uppercase">Active Borrows</span>
                              <p className="text-base font-bold text-white mt-1">1,940</p>
                              <span className="text-[8.5px] text-amber-400 block">34 overdue</span>
                            </div>
                          </div>

                          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60 font-mono text-[10px] space-y-1">
                            <span className="text-[9px] text-[#bd9b53] block uppercase font-bold">Centralized Dashboard Action Stream:</span>
                            <p className="text-slate-300">• Guest catalog search queried &ldquo;Web Systems&rdquo; - 0.12s</p>
                            <p className="text-slate-300">• Admin verified borrower eligibility key #L-094</p>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Visualizer mirrors YIR centralization layout specifications.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 2: Library Management System (LMS) */}
                    {selectedProject.id === 'lms' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs">
                        <div className="space-y-4">
                          <h4 className="text-center font-bold text-white">Library User Type Selection</h4>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              onClick={() => setLmsRole('staff')}
                              className={`p-4 rounded-xl cursor-pointer border text-center transition flex flex-col items-center gap-2 ${
                                lmsRole === 'staff'
                                  ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-705 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">⚙️</div>
                              <span className="font-bold block">STAFF</span>
                              <span className="text-[9px] text-slate-400 block leading-tight">Book management & records cataloging</span>
                            </button>

                            <button
                              onClick={() => setLmsRole('borrower')}
                              className={`p-4 rounded-xl cursor-pointer border text-center transition flex flex-col items-center gap-2 ${
                                lmsRole === 'borrower'
                                  ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-705 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">➕</div>
                              <span className="font-bold block">BORROWER</span>
                              <span className="text-[9px] text-slate-400 block leading-tight">Search catalog, check out & view alerts</span>
                            </button>
                          </div>

                          <AnimatePresence mode="wait">
                            {lmsRole && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="bg-slate-800 p-2.5 rounded-lg border border-slate-700 text-[10px] font-mono text-center"
                              >
                                <span className="text-blue-400 block uppercase font-bold mb-1">
                                  {lmsRole === 'staff' ? 'Staff Workspace Loaded' : 'Borrower Portal Initialized'}
                                </span>
                                {lmsRole === 'staff' 
                                  ? 'Enter master catalog authorization key to decrypt records list.' 
                                  : 'Search through 10,000+ local books or check reservation statuses.'}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Vivid replication of laptop interface login layout.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 3: Barangay Monitoring */}
                    {selectedProject.id === 'barangay-monitoring' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs">
                        <div className="space-y-3.5">
                          {/* Simulated elegant Barangay Seal */}
                          <div className="flex items-center gap-4 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 max-w-md mx-auto">
                            <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center p-1 font-serif shrink-0">
                              <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center">
                                <span className="text-white text-[7px] text-center font-bold tracking-tighter leading-none">
                                  NEW VISAYAS
                                </span>
                              </div>
                            </div>
                            <div className="text-left">
                              <h5 className="font-bold text-white text-xs uppercase tracking-tight">Barangay New Visayas</h5>
                              <span className="text-[9.5px] text-emerald-400 font-mono block">Panabo City &bull; Service Hub</span>
                              <span className="text-[9px] text-slate-400 block italic leading-tight">Modern Register for Indigenous Peoples (IP)</span>
                            </div>
                          </div>

                          {/* IP Online Registration Verification list */}
                          <div className="bg-slate-850 p-2.5 rounded-lg border border-slate-800/80 space-y-2 text-[10px] font-mono">
                            <div className="flex justify-between items-center bg-slate-800 py-1.5 px-2.5 rounded">
                              <span className="text-slate-300">Resident ID #849 (IP)</span>
                              <span className="text-emerald-400 font-bold">✓ DOCUMENT COMPLIANT</span>
                            </div>
                            <div className="flex justify-between items-center bg-slate-800 py-1.5 px-2.5 rounded">
                              <span className="text-slate-300">Upload: Tribal Affiliation Certificate</span>
                              <span className="text-slate-400 italic">No home visit required</span>
                            </div>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Digital dashboard interface mapping Barangay New Visayas registrations.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 4: Playable Cup Guessing Game */}
                    {selectedProject.id === 'cup-game' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs text-center">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center font-mono text-[9px] bg-slate-800 px-3 py-1.5 rounded-lg">
                            <div className="flex items-center gap-1">
                              <span className="text-amber-400 font-bold">SCORE:</span>
                              <span className="text-white font-bold">{cupGame.score}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-400">DIFF:</span>
                              {['easy', 'medium', 'hard'].map(d => (
                                <button
                                  key={d}
                                  onClick={() => changeDifficulty(d as any)}
                                  className={`px-1 rounded font-bold uppercase ${
                                    cupGame.difficulty === d 
                                      ? 'bg-amber-500 text-slate-950 font-black' 
                                      : 'text-slate-400 hover:text-white'
                                  }`}
                                >
                                  {d[0]}
                                </button>
                              ))}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-slate-400">HIGH:</span>
                              <span className="text-white font-bold">{cupGame.highScore}</span>
                            </div>
                          </div>

                          {/* THE CUPS */}
                          <div className="flex justify-center gap-8 py-6 relative">
                            {[0, 1, 2].map((cupIdx) => {
                              const isSelected = cupGame.selectedCup === cupIdx;
                              const isBallHere = cupGame.ballPosition === cupIdx;
                              const showBall = cupGame.gameState === 'won' || cupGame.gameState === 'lost';
                              
                              return (
                                <div key={cupIdx} className="relative flex flex-col items-center">
                                  {/* Cup vector graphics styled dynamically */}
                                  <motion.button
                                    onClick={() => selectCup(cupIdx)}
                                    disabled={cupGame.shuffling || cupGame.gameState === 'idle'}
                                    animate={
                                      cupGame.shuffling 
                                        ? { 
                                            y: [0, -40, 0], 
                                            x: [0, (cupIdx === 1 ? -60 : cupIdx === 0 ? 60 : -60), 0] 
                                          } 
                                        : (isSelected && showBall)
                                        ? { y: -50 }
                                        : { y: 0, x: 0 }
                                    }
                                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                                    className={`w-14 h-16 bg-gradient-to-b from-amber-600 to-amber-700 border border-amber-500 rounded-t-xl flex flex-col justify-between p-1 shadow-md cursor-pointer transition-colors relative z-10 ${
                                      cupGame.shuffling ? 'cursor-not-allowed border-amber-400 shadow-none' : 'hover:border-amber-300'
                                    }`}
                                  >
                                    <div className="w-full h-1 bg-amber-500 opacity-60 rounded" />
                                    <span className="text-[10px] text-amber-100 font-mono font-bold font-mono">
                                      {cupIdx + 1}
                                    </span>
                                    <div className="w-full h-1 bg-amber-800 opacity-80 rounded" />
                                  </motion.button>

                                  {/* Hiding ball displayed underneath */}
                                  {isBallHere && (
                                    <div className="absolute bottom-0 w-5 h-5 rounded-full bg-gradient-to-r from-yellow-350 from-yellow-300 to-yellow-500 border border-yellow-500 z-0 flex items-center justify-center p-0.5 shadow-md">
                                      <div className="w-2 h-2 rounded-full bg-white opacity-40 absolute top-0.5 left-1" />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* ACTION BUTTON STATUS */}
                          <div className="space-y-2">
                            {cupGame.gameState === 'idle' && (
                              <button
                                onClick={shuffleCups}
                                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 transition text-slate-950 font-mono font-bold rounded-lg cursor-pointer flex items-center gap-2 mx-auto text-xs"
                              >
                                <RefreshCw className="w-4 h-4" />
                                SHUFFLE & START GAME
                              </button>
                            )}

                            {cupGame.gameState === 'shuffled' && (
                              <p className="text-slate-300 font-mono text-[10px] animate-pulse">
                                {cupGame.shuffling ? "CUPS SHUFFLING... KEEP YOUR EYES ON!" : "TAP ANY CUP TO TEST YOUR MEMORY!"}
                              </p>
                            )}

                            {(cupGame.gameState === 'won' || cupGame.gameState === 'lost') && (
                              <div className="space-y-1.5 flex flex-col items-center">
                                <p className={`font-mono text-xs font-bold uppercase ${cupGame.gameState === 'won' ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {cupGame.gameState === 'won' ? '★ YOU FOUND THE GOLD BALL! ★' : '✖ WRONG CUP! THE BALL WAS UNDER CUP ' + (cupGame.ballPosition + 1)}
                                </p>
                                <button
                                  onClick={shuffleCups}
                                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-[10px] rounded cursor-pointer"
                                >
                                  SHUFFLE AGAIN
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Fully playable traditional memory guessing physics engine dashboard.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 5: Mangro Vision */}
                    {selectedProject.id === 'mangro-vision' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs">
                        <div className="space-y-4">
                          <h4 className="text-center font-bold text-white">Mangrove Leaf-Diagnostic System Scanner</h4>
                          
                          <div className="grid grid-cols-2 gap-4">
                            {/* Device camera preview placeholder */}
                            <div className="bg-slate-800 border-2 border-dashed border-teal-500/50 rounded-xl relative overflow-hidden flex flex-col justify-between p-3 min-h-[140px] text-teal-400 font-mono">
                              <span className="text-[8px] bg-teal-950/80 px-1 py-0.5 rounded border border-teal-800/40 w-fit">
                                CAMERA FIELD
                              </span>
                              
                              {/* Leaf diagnostic target outline overlay */}
                              <div className="w-16 h-16 border-2 border-dashed border-teal-400 rounded-full mx-auto flex items-center justify-center opacity-70">
                                🍃
                              </div>

                              <span className="text-[8.5px] block text-center leading-tight">
                                Scan active leaf specimen
                              </span>
                            </div>

                            {/* Diagnostics and GPS details */}
                            <div className="bg-slate-800 p-3.5 rounded-xl space-y-3 font-mono text-[10px]">
                              <span className="text-[9px] text-[#bd9b53] block uppercase font-bold border-b border-slate-700 pb-1">
                                Scan telemetry:
                              </span>
                              <div>
                                <p className="text-slate-400">GPS COORDINATES</p>
                                <p className="text-white font-semibold">7.3104° N, 125.6834° E</p>
                              </div>
                              <div>
                                <p className="text-slate-400">SPECIEM TYPE / SCORE</p>
                                <p className="text-white font-semibold">Avicennia Marina // 96.4%</p>
                              </div>
                              <div>
                                <p className="text-slate-400">MEMBER TRIBAL REWARD</p>
                                <p className="text-emerald-400 font-bold">+15 Forest Tokens</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Diagnostic platform mockup supporting volunteering tracking.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 6: Buy & Sell System */}
                    {selectedProject.id === 'buy-sell' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs">
                        <div className="space-y-4">
                          {/* Property Listings frame */}
                          <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 flex gap-3.5 relative">
                            <div className="w-20 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-base shrink-0">
                              🏡
                            </div>
                            <div className="text-left space-y-1">
                              <span className="text-[8px] bg-rose-950/70 border border-rose-900/65 text-rose-400 px-1.5 py-0.5 rounded font-mono font-bold">
                                REAL ESTATE LISTING
                              </span>
                              <h5 className="font-bold text-white tracking-tight text-xs leading-none">Prime Barangay Site Subdivision</h5>
                              <p className="text-[#bd9b53] font-mono text-[10px] leading-none">$140,000 / Site Lot</p>
                              <p className="text-slate-400 text-[9.5px] leading-tight">Direct Site Viewing Schedule Active</p>
                            </div>
                          </div>

                          {/* Agent Feedback star ratings interactive */}
                          <div className="grid grid-cols-2 gap-3 bg-slate-850 p-2.5 rounded-lg border border-slate-800/80 text-[10px] font-mono">
                            <div className="space-y-1 text-left">
                              <span className="text-[9px] text-rose-400 block uppercase font-bold">Buyer Agent Rating:</span>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((starIdx) => (
                                  <button
                                    key={starIdx}
                                    onClick={() => setBrokerRating(starIdx)}
                                    className="cursor-pointer transition-transform hover:scale-110"
                                  >
                                    <Star className={`w-3.5 h-3.5 ${starIdx <= brokerRating ? 'text-amber-400 fill-amber-400' : 'text-slate-650 text-slate-600'}`} />
                                  </button>
                                ))}
                              </div>
                              <span className="text-[8px] text-slate-400 block mt-0.5">Average score: {brokerRating}.0 / 5 stars</span>
                            </div>

                            <div className="space-y-1 text-left">
                              <span className="text-[9px] text-slate-400 block uppercase font-bold">Onboarding Flow:</span>
                              <div className="flex gap-1.5 py-0.5">
                                <button
                                  onClick={() => setBuyerType('buyer')}
                                  className={`px-2 py-0.5 rounded text-[8.5px] font-bold font-mono ${buyerType === 'buyer' ? 'bg-rose-600 text-white' : 'bg-slate-755 bg-slate-750 text-slate-400'}`}
                                >
                                  BUYER
                                </button>
                                <button
                                  onClick={() => setBuyerType('agent')}
                                  className={`px-2 py-0.5 rounded text-[8.5px] font-bold font-mono ${buyerType === 'agent' ? 'bg-rose-600 text-white' : 'bg-slate-755 bg-slate-750 text-slate-400'}`}
                                >
                                  AGENT
                                </button>
                              </div>
                              <span className="text-[8px] text-slate-400 block mt-0.5">Flow: {buyerType.toUpperCase()}_SIGNUP</span>
                            </div>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Interactive broker communication channel and site coordinator demo.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 7: Sudo Quest Games */}
                    {selectedProject.id === 'sudo-quest' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs text-center">
                        <div className="space-y-3.5">
                          <h4 className="font-bold text-white">SudoQuest Daily Logic Adventure</h4>
                          
                          {/* 3x3 Grid simulation */}
                          <div className="grid grid-cols-3 gap-1 w-28 mx-auto bg-slate-800 p-1 rounded-xl border border-slate-700">
                            {[
                              { v: null, editable: true }, { v: 8, editable: false }, { v: null, editable: true },
                              { v: 3, editable: false }, { v: null, editable: true }, { v: 4, editable: false },
                              { v: null, editable: true }, { v: null, editable: true }, { v: null, editable: true }
                            ].map((cell, cIdx) => (
                              <div
                                key={cIdx}
                                className={`aspect-square rounded flex items-center justify-center font-mono font-bold text-xs select-none ${
                                  cell.editable 
                                    ? 'bg-slate-900 border border-dashed border-slate-700 text-purple-400 cursor-pointer hover:bg-slate-850' 
                                    : 'bg-slate-700 text-white border border-slate-650'
                                }`}
                              >
                                {cell.v}
                              </div>
                            ))}
                          </div>

                          <div className="bg-slate-850 p-2 text-[10px] font-mono rounded border border-slate-800 max-w-sm mx-auto">
                            <span className="text-purple-400 text-[9px] block uppercase font-bold">GAME MODE: SUDOKU QUEST DIARY</span>
                            <p className="text-slate-300 mt-1">Sleek menus optimized for full responsive thumb navigation.</p>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Visual layout representing core grid play loops and menus.
                        </span>
                      </div>
                    )}

                    {/* MOCKUP 8: AniMed System */}
                    {selectedProject.id === 'animed' && (
                      <div className="flex-1 flex flex-col justify-between my-3 font-sans text-xs">
                        <div className="space-y-3">
                          <h4 className="text-center font-bold text-white leading-tight">AniMed ML Symptom-to-Disease Diagnoser</h4>
                          
                          <div className="grid grid-cols-2 gap-3 items-start">
                            {/* Symptom Picker */}
                            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                              <span className="text-[8px] font-mono text-slate-400 uppercase block mb-1.5 font-bold border-b border-slate-705 pb-0.5">
                                Specimen Symptoms:
                              </span>
                              <div className="flex flex-col gap-1 text-[9.5px]">
                                {[
                                  "High Fever", "Cough", "Weakness", 
                                  "Loose Stool", "Dehydration", "Ticks/Lice", "Hair Loss"
                                ].map((sm) => {
                                  const active = aniMedState.symptoms.includes(sm);
                                  return (
                                    <button
                                      key={sm}
                                      onClick={() => toggleSymptom(sm)}
                                      className={`text-left px-2 py-0.5 rounded cursor-pointer transition ${
                                        active 
                                          ? 'bg-amber-600 text-white font-bold' 
                                          : 'bg-slate-900/60 text-slate-400 hover:text-white'
                                      }`}
                                    >
                                      {active ? "✓ " : "+ "} {sm}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* ML Diagnostic Output */}
                            <div className="bg-slate-850 p-2.5 rounded-lg border border-slate-800/80 font-mono text-[10px] space-y-2 text-left">
                              <span className="text-amber-400 text-[8px] block uppercase font-bold border-b border-slate-800 pb-0.5">
                                Gradient-Boosted Diagnose Estimation:
                              </span>
                              
                              <div>
                                <p className="text-slate-400">PREDICT STATUS</p>
                                <p className="text-white font-bold text-[10px] uppercase truncate">
                                  {aniMedState.prediction || "Select symptoms... Waiting analysis"}
                                </p>
                              </div>

                              {aniMedState.medicines.length > 0 && (
                                <div>
                                  <p className="text-slate-400">STOCK RECOMMENDED MEDS</p>
                                  <div className="flex flex-col text-[8.5px] text-emerald-400 font-bold gap-0.5 mt-0.5">
                                    {aniMedState.medicines.map((m, mIdx) => (
                                      <span key={mIdx}>• {m} (Triggers Ok)</span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <span className="text-center text-slate-500 font-mono text-[9px] mt-4 block">
                          Decision support prediction simulation utilizing custom metadata.
                        </span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Backing descriptors */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-[11px] text-slate-650 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span><b>Design Front Note:</b> All illustrations are styled natively with clean responsive SVG coordinates and active CSS bindings reflecting each mobile system visual layout specs perfectly.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProjectId(null);
                      // Reset LMS views
                      setLmsRole(null);
                    }}
                    className="ml-4 py-1.5 px-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition text-[11px] font-bold cursor-pointer font-sans"
                  >
                    Done Reviewing
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
