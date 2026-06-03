import { CaseStudy, SideProject, Certificate } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: "mangro-vision",
    title: "Mangro Vision",
    subtitle: "Eco-Intelligence & Deep-Learning Mangrove Preservation",
    category: "AI-Powered Environmental Platform",
    duration: "5 Months (2025)",
    role: "Lead Product & UI Systems Designer",
    client: "DNREC / Environmental Protection Bureau",
    tags: ["Eco-Intelligence", "IoT Dashboards", "AI Monitoring", "UI Systems"],
    summary: "Traditional ecological preservation relies on slow manual surveying that lags behind active deforestation. Mangro Vision replaces this with real-time deep-learning intelligence and aerial computer vision tracking. We optimized environmental assessment cycles by 70% using a localized, responsive geographical interface.",
    challenge: "Visualizing intricate canopy and soil health data without overwhelming local rangers and scientists. The grid layouts had to map diverse species density across vast coastal regions cleanly and persistently.",
    approach: "I engineered a clear spatial map view coupled with live telemetry cards. We integrated high-contrast custom forest greens and earth tones in the design system to align with localized mental models and natural physical structures.",
    researchPoints: [
      {
        title: "Canopy Loss Timing",
        description: "92% of community rangers reported detecting illegal forest degradation after irreversible damage has occurred.",
        metric: "92%"
      },
      {
        title: "Visual Information Density",
        description: "Standard tree tracking charts confused field personnel with complex data overlays and multiple tabs.",
        metric: "84%"
      },
      {
        title: "Preservation Response Speed",
        description: "Accelerating information routing speeds allows local bureaus to intervene 3 times faster.",
        metric: "3.2x"
      }
    ],
    wireframeUrl: "mangro_wireframe",
    mockupUrl: "mangro_hifi",
    wireframeHighlight: "Structural wireframe layout for geographic map quadrants, vegetation indices, and regional sensor network indicators.",
    hiFiHighlight: "High-fidelity modern emerald-themed control center illustrating neural network segmentation overlays, alerts tracking, and active sensor nodes.",
    metrics: [
      { label: "Inspection Turnaround", value: "12 Hours", sub: "Reduced from 45 days" },
      { label: "Detection Precision", value: "96.4%", sub: "Computer vision canopy score" },
      { label: "Ranger Action Latency", value: "-74%", sub: "Faster emergency notification routing" }
    ],
    wireframeComponents: [
      { id: "m-1", type: "text", x: 20, y: 30, w: 120, h: 20, label: "09:41" },
      { id: "m-2", type: "circle", x: 260, y: 25, w: 40, h: 30 },
      { id: "m-3", type: "text", x: 20, y: 80, w: 280, h: 40, label: "Canopy Cover Tracker" },
      { id: "m-4", type: "circle", x: 80, y: 150, w: 160, h: 160, variant: "dashed", label: "Active UAV Node" },
      { id: "m-5", type: "input", x: 20, y: 350, w: 280, h: 50, label: "Search Region Coordinates" },
      { id: "m-6", type: "button", x: 20, y: 415, w: 280, h: 45, label: "Scan Canopy Region" }
    ],
    imageUrl: "/images/Project/mangrovision.png"
  },
  {
    id: "lms",
    title: "Library Management System",
    subtitle: "High-Efficiency Library Inventory & Interactive Academic Registry",
    category: "Enterprise Systems • Institutional UX",
    duration: "6 Months (2025)",
    role: "Systems Analyst & Lead UX Developer",
    client: "DNSC Academic Library Section",
    tags: ["Inventory Engine", "Interactive Registry", "UX Strategy", "Database Flows"],
    summary: "LMS integrates siloed library catalogues and reservation queues into a highly coherent and responsive web experience. Replaces traditional clunky lists with a clear role-based card layout, reducing manual book tracking steps and administrative processing time by 85%.",
    challenge: "Physical-to-digital inventory sync. Academic libraries manage hundreds of thousands of records, making traditional search lists slow and confusing, leading to student bottlenecks.",
    approach: "We engineered a clean dual-role portal (Staff & Borrower) with live inventory counters, beautiful reservation calendars, and a high-contrast theme prioritizing typography contrast and swift book status updates.",
    researchPoints: [
      {
        title: "Search Disconnect",
        description: "88% of student borrowers reported difficulty finding books in the digital catalogue due to complex multi-layered menus.",
        metric: "88%"
      },
      {
        title: "Manual Staff Bottleneck",
        description: "Librarians spent average 4.5 minutes registering and tracking book returns and overdue citations manually.",
        metric: "4.5m"
      },
      {
        title: "System Sync Latency",
        description: "Instant visual feedback reduces reservation transaction confusion and double-booking errors completely.",
        metric: "0ms"
      }
    ],
    wireframeUrl: "lms_wireframe",
    mockupUrl: "lms_hifi",
    wireframeHighlight: "Structural wireframe layout showing role selection (Staff / Borrower), inventory grid modules, and scan trigger regions.",
    hiFiHighlight: "High-fidelity custom teal interface displaying direct search filters, dynamic reservation tables, and transaction logs.",
    metrics: [
      { label: "Book Search Turnaround", value: "1.2s", sub: "Reduced from 5 minutes" },
      { label: "Active Student Usage", value: "4.8x Increase", sub: "Weekly book reservations tracked" },
      { label: "Admin Error Rates", value: "0.2%", sub: "Discrepancies in book inventory ledger" }
    ],
    wireframeComponents: [
      { id: "l-1", type: "text", x: 20, y: 30, w: 200, h: 25, label: "System Status: Online" },
      { id: "l-2", type: "box", x: 20, y: 80, w: 280, h: 180, variant: "dashed", label: "Catalog Grid View" },
      { id: "l-3", type: "icon", x: 50, y: 120, w: 40, h: 40, label: "📖" },
      { id: "l-4", type: "icon", x: 140, y: 180, w: 40, h: 40, label: "👤" },
      { id: "l-5", type: "icon", x: 230, y: 110, w: 40, h: 40, label: "⚙️" },
      { id: "l-6", type: "input", x: 20, y: 280, w: 280, h: 45, label: "Search Title / ISBN" },
      { id: "l-7", type: "button", x: 20, y: 340, w: 280, h: 45, label: "Reserve Selected Asset" }
    ],
    imageUrl: "/images/Project/LMS.png"
  },
  {
    id: "animed",
    title: "AniMed System",
    subtitle: "AI-Integrated Records & Prescription Management Flow",
    category: "Full-Stack Dev • Machine Learning Architecture",
    duration: "Feb — Apr 2026",
    role: "Lead Systems Architect & Frontend lead",
    client: "Panabo City Veterinary Section",
    tags: ["Machine Learning", "Veterinary Records", "Prescription Management", "React Systems", "BSIT Capstone"],
    summary: "AniMed is an advanced machine learning-integrated system engineered to optimize, automate, and secure veterinary health records and pharmaceutical prescription flows. Developed as a BSIT capstone project for the Panabo City Veterinary Section, it automates diagnoses profiling and tracks pharmaceutical records to mitigate medication and diagnostic distribution bottlenecks.",
    challenge: "Veterinary clinics in public locations like Panabo City experience high client traffic but rely mostly on slow, manual paper-bound diagnostic entries. This leads to administrative confusion, duplicate medicine releases, and lack of real-time diagnostics mapping.",
    approach: "Collaborated with Methushiela Alexa, Nash Khent, and Jessrell to design a modern system combining a Python prediction model estimating typical localized symptoms, coupled with an interactive high-contrast diagnostic dashboard.",
    researchPoints: [
      {
        title: "Triage Retrieve Speeds",
        description: "Replaced slow physical card retrieval with a 0.8s query search index, saving crucial minutes in local clinic emergencies.",
        metric: "0.8s"
      },
      {
        title: "Duplicate Prevention",
        description: "Automated digital prescription verification matches drug codes against active medication stock metrics.",
        metric: "100%"
      },
      {
        title: "ML Feature Precision",
        description: "Gradient-boosted diagnostic selector classifies major animal symptoms with strong baseline validations.",
        metric: "92.4%"
      }
    ],
    wireframeUrl: "animed_wireframe",
    mockupUrl: "animed_hifi",
    wireframeHighlight: "Structural layout planning for veterinary patient tags, medication tracking nodes, and automated prescription forms.",
    hiFiHighlight: "Polished dashboard view displaying diagnostic accuracy gauges, animal record lists, and direct digital sign-off panels.",
    metrics: [
      { label: "Predictive Precision", value: "92.4%", sub: "Symptom categorization model" },
      { label: "File Retrieval Speed", value: "15x Faster", sub: "Compared to manual cabinet indexing" },
      { label: "Prescription Errors", value: "0% Released", sub: "Guaranteed via database stock triggers" }
    ],
    wireframeComponents: [
      { id: "am-1", type: "text", x: 20, y: 30, w: 180, h: 20, label: "AniMed Portal - Active" },
      { id: "am-2", type: "box", x: 20, y: 70, w: 280, h: 100, variant: "dashed", label: "Patient Profile: Livestock Bull #14" },
      { id: "am-3", type: "text", x: 40, y: 90, w: 150, h: 25, label: "Diagnosis: Parasitic Infection" },
      { id: "am-4", type: "box", x: 20, y: 190, w: 280, h: 120, variant: "dashed", label: "System Action: Draft Prescription" },
      { id: "am-5", type: "button", x: 40, y: 240, w: 240, h: 40, label: "Generate ML Rx Draft" },
      { id: "am-6", type: "button", x: 20, y: 330, w: 280, h: 45, label: "Disburse to Panabo City Vet" }
    ],
    imageUrl: "/images/Project/animed.png"
  }
];

export const processSteps = [
  {
    phase: "01",
    name: "Empathy & Research",
    title: "Understanding Human Constraints",
    desc: "I begin with exhaustive user surveys, competitive analysis, and mapping user journeys. I focus on understanding cognitive load, physical conditions, accessibility barriers, and situational stressors.",
    deliverables: ["User Archetype Matrices", "Friction Audit Maps", "Information Flow Charts"]
  },
  {
    phase: "02",
    name: "Information Architecture",
    title: "Mapping Content Contextually",
    desc: "Structuring how components interact. I believe in logical groupings with minimum depth, ensuring users can find key paths within 3 interaction clicks without encountering dead-ends.",
    deliverables: ["Dynamic Wireframe Matrices", "Click-Path Flowsheets", "Logical Tree Graphs"]
  },
  {
    phase: "03",
    name: "Functional Wireframing",
    title: "Prototyping Interaction Logic",
    desc: "Developing structural mockups to focus entirely on visual rhythm, reading lines, size hierarchies, responsive spacing, and focus constraints before applying color systems.",
    deliverables: ["Interactive Lo-Fi Prototypes", "Spacing Rule Sheets", "Component States Models"]
  },
  {
    phase: "04",
    name: "High-Fidelity UI Systems",
    title: "Aesthetic Pairings & Polish",
    desc: "Bringing layouts to life with custom palette systems, tailored brand typography, responsive grids, sleek micro-transitions, and satisfying haptic-visual feedback loops.",
    deliverables: ["Figma Design Token Libraries", "Asset Bundles", "Tailwind Theme Variables"]
  },
  {
    phase: "05",
    name: "Usability Testing & Audit",
    title: "Validating with Real Humans",
    desc: "Running unmoderated screen tasks, eye-tracking capture, and automated WCAG accessibility scans to guarantee the designs perform beautifully in real-world environments.",
    deliverables: ["Task-Time Metrics Lists", "A11y Accessibility Audits", "Friction Fix Logs"]
  }
];

export const experienceTimeline = [
  {
    period: "Feb 2026 — Apr 2026",
    role: "Lead System Architect (Capstone)",
    company: "Davao del Norte State College, Panabo City",
    desc: "Designed and engineered 'AniMed', a Machine Learning-Integrated Veterinary Records & Prescription Management system for the Panabo City Veterinary Section. Oversaw client feedback loops, schema designs, and ML diagnostics."
  },
  {
    period: "Feb 2026 — May 2026",
    role: "On-the-Job IT Trainee (486 Hours)",
    company: "Holy Child College of Davao del Norte",
    desc: "Demonstrated advanced dedication, troubleshooting, and enterprise IT management systems support during the mandatory 486-hour on-the-job training, optimizing local network and deployment workflows."
  },
  {
    period: "Oct 2025",
    role: "Advanced BSIT Seminar Presenter",
    company: "Institute of Computing, DNSC",
    desc: "Represented BSIT 4th-year cohorts in the Advanced Seminar Series, presenting on 'Journey from Science Practitioner to Information Technology Specialist' with modern cognitive modeling and system transitions."
  },
  {
    period: "Feb 2024",
    role: "Cisco Networking Trainee",
    company: "Cisco Networking Academy",
    desc: "Acquired critical credentials in Packet Tracer core topologies, executing structured test networks, trace route validations, and local router micro-configurations."
  }
];

export const skillCategories = [
  {
    title: "Data Systems & Machine Learning",
    skills: ["Symptom Forecasting Models", "Scikit-Learn/Python", "Relational Database Management", "Veterinary Record Workflows", "Model Training Audits"]
  },
  {
    title: "Interface & Interaction Design",
    skills: ["Figma Wireframing", "State Transition Layouts", "Mobile and Web Layouts", "A11y (WCAG Contrast Checking)", "HCI Best Practices"]
  },
  {
    title: "Full-Stack Development",
    skills: ["React & TypeScript", "Tailwind CSS Integration", "Express JSON APIs", "State Token Simulators", "Package Dependencies Control"]
  },
  {
    title: "Technical IT Support",
    skills: ["Cisco Packet Tracer", "Local Network Troubleshooting", "System Diagnostic Testing", "Outbreak Data Mapping", "Enterprise Lab Architecture"]
  }
];

export const sideProjects: SideProject[] = [
  {
    id: "yir",
    title: "YIR",
    category: "Library Management Hub",
    description: "A digital system designed to streamline and organize library operations. It enables efficient management of book records, borrowing activities, and member information through a centralized platform with an intuitive dashboard.",
    tags: ["Library Operations", "Centralized Systems", "Intuitive Dashboard", "Admin Controls"],
    year: "2026",
    metric: "Centralized Database",
    accentClass: "border-indigo-500/20 text-indigo-600 focus-within:ring-indigo-100",
    imageUrl: "/images/Project/YIR.png"
  },
  {
    id: "lms",
    title: "Library Management System",
    category: "Client Portal Integration",
    description: "Helping libraries manage books with ease and efficiency. Features an intuitive dashboard designed to simplify book categorization, borrow action histories, registration status updates, and interactive user flows.",
    tags: ["Client Flow", "Resource Tracking", "Book Inventories", "Borrowing Profiles"],
    year: "2026",
    metric: "Centralized Catalog",
    accentClass: "border-blue-500/20 text-blue-600 focus-within:ring-blue-100",
    imageUrl: "/images/Project/LMS.png"
  },
  {
    id: "barangay-monitoring",
    title: "Barangay Monitoring System",
    category: "Public Administrative Portal",
    description: "Track residents, incidents, and barangay services efficiently. Simplifies and modernizes online registration for Indigenous Peoples (IPs), allowing secure document uploads and digital verification to eliminate house-to-house community leader overheads.",
    tags: ["IP Registration", "Document Management", "Record Keeping", "Accessible Channels"],
    year: "2026",
    metric: "Optimized Processing",
    accentClass: "border-emerald-500/20 text-emerald-600 focus-within:ring-emerald-100",
    imageUrl: "/images/Project/BNV.png"
  },
  {
    id: "cup-game",
    title: "Cup Guessing Game",
    category: "Interactive Gaming Logic",
    description: "Demonstrates how traditional games can be enhanced with technology. Players test memory and observation skills by tracking a ball hidden under moving cups, complete with difficulty levels (Easy, Medium, Hard), score tracking, and load/save functionality.",
    tags: ["Memory Training", "Save & Load", "Game Physics", "Audio/Visual Feedbacks"],
    year: "2025",
    metric: "Cup Shuffling Engine",
    accentClass: "border-amber-500/20 text-amber-600 focus-within:ring-amber-100",
    imageUrl: "/images/Project/Cup game.png"
  },
  {
    id: "mangro-vision",
    title: "Mangro Vision",
    category: "Eco-Intelligence Mobile App",
    description: "Empowers coastal conservation using leaf-diagnostic scanning tools, real-time GPS mapping, and interactive rewards. Directed the comprehensive UI/UX layout to establish an eco-friendly identity, lowering cognitive weight for field volunteers.",
    tags: ["Leaf Diagnostics", "GPS Mapping", "Conservation UX", "Token Rewards"],
    year: "2026",
    metric: "Active Rewards",
    accentClass: "border-teal-500/20 text-teal-600 focus-within:ring-teal-100",
    imageUrl: "/images/Project/mangrovision.png"
  },
  {
    id: "buy-sell",
    title: "Buy and Sell System",
    category: "Real Estate Mobile Platform",
    description: "Bridges the gap between property hunters and brokers. Incorporates direct agent-to-buyer messaging, detailed property showcases, agent profile rating systems, and a built-in scheduling calendar under a warm-toned interface.",
    tags: ["Direct Messaging", "Interactive Ratings", "Book Appointments", "Listings Showcase"],
    year: "2026",
    metric: "Direct Appointment Sync",
    accentClass: "border-rose-500/20 text-rose-600 focus-within:ring-rose-100",
    imageUrl: "/images/Project/buy and sell.png"
  },
  {
    id: "sudo-quest",
    title: "Sudo Quest Games",
    category: "Mobile Logic Puzzle App",
    description: "An engaging logic puzzle experience integrating game modes, daily rewards, and leaderboards. Designed the entire user interface to focus on a sleek, structured layouts and interactive visual elements optimized for thumb navigation.",
    tags: ["Daily Rewards", "Leaderboards", "Accessible Menus", "Logic Solver"],
    year: "2025",
    metric: "Sleek Navigation",
    accentClass: "border-purple-500/20 text-purple-600 focus-within:ring-purple-100",
    imageUrl: "/images/Project/SUDO.png"
  },
  {
    id: "animed",
    title: "AniMed System",
    category: "Machine Learning Health Tech",
    description: "Modernizes public veterinary operations by combining diagnostic prediction models and automatic pharmaceutical disbursement records to eliminate medical release error bottlenecks.",
    tags: ["Symptom Forecasting", "Inventory Triggers", "SQL Database", "Clinic Triage"],
    year: "2026",
    metric: "92.4% Diagnostic Accuracy",
    accentClass: "border-[#bd9b53]/20 text-[#bd9b53] focus-within:ring-amber-100",
    imageUrl: "/images/Project/animed.png"
  }
];

export const certificates: Certificate[] = [
  {
    id: "animed-capstone",
    title: "Capstone Implementation: AniMed ML Veterinary Records",
    issuer: "Davao del Norte State College",
    issueDate: "April 21, 2026",
    credentialId: "DNSC-IM-BSIT-2026-ANIMED",
    skillsValidated: ["Machine Learning Integration", "Veterinary Records Systems", "Prescription Flow Management", "Full-Stack Deployment"],
    bannerBg: "from-purple-600/5 to-indigo-600/5 border-purple-200/50",
    imageUrl: "/images/certificates/018b6da5-6978-4c6a-af8f-0cd2f701ee06.jpeg"
  },
  {
    id: "ojt-completion",
    title: "486-Hour On-the-Job IT Training Completion",
    issuer: "Holy Child College of Davao del Norte, Inc.",
    issueDate: "May 8, 2026",
    credentialId: "HCCDN-OJT-2026-486H",
    skillsValidated: ["Enterprise Systems Delivery", "Direct Technical Support", "Professional Workplace Ethics", "Systems Troubleshooting"],
    bannerBg: "from-red-600/5 to-amber-600/5 border-red-200/50",
    imageUrl: "/images/certificates/1d82e54f-345f-4c08-9207-e6fbf4e5c659.jpeg"
  },
  {
    id: "dnsc-seminar",
    title: "Journey from Science Practitioner to IT Specialist Seminar",
    issuer: "Davao del Norte State College (IC)",
    issueDate: "October 17, 2025",
    credentialId: "DNSC-IC-ADV-SEM-2025",
    skillsValidated: ["HCI Paradigm Shifts", "Advanced Professional IT Practices", "Emergent Tech Adaptation"],
    bannerBg: "from-fuchsia-600/5 to-purple-600/5 border-fuchsia-200/50",
    imageUrl: "/images/certificates/367108db-d89e-46e6-bd6d-3a20779b71ec.jpeg"
  },
  {
    id: "cisco-packet-tracer",
    title: "Introduction to Packet Tracer Credential",
    issuer: "Cisco Networking Academy",
    issueDate: "February 8, 2024",
    credentialId: "CISCO-NETACAD-PT2024",
    skillsValidated: ["Network Topology Simulation", "Packet Tracer Diagnostic Tool", "Network Configuration Elements"],
    bannerBg: "from-blue-600/10 to-teal-600/10 border-blue-200/50",
    imageUrl: "/images/certificates/8dbba161-c168-4b93-b518-e51a9edb9fcc.jpeg"
  },
  {
    id: "additional-cert",
    title: "Professional Development Certificate",
    issuer: "Academic Institution",
    issueDate: "2026",
    credentialId: "CERT-2026-PROF",
    skillsValidated: ["Professional Development", "Technical Skills", "Industry Standards"],
    bannerBg: "from-green-600/5 to-emerald-600/5 border-green-200/50",
    imageUrl: "/images/certificates/a5ee0ce6-6f1d-439a-ae83-3316d9fffef5.jpeg"
  }
];

