export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  role: string;
  client: string;
  tags: string[];
  summary: string;
  challenge: string;
  approach: string;
  researchPoints: {
    title: string;
    description: string;
    metric?: string;
  }[];
  wireframeUrl: string; // Dynamic SVG or layout
  mockupUrl: string; // Dynamic high-fidelity UI layout
  wireframeHighlight?: string;
  hiFiHighlight?: string;
  metrics: {
    label: string;
    value: string;
    sub: string;
  }[];
  wireframeComponents: WireframeElement[];
  imageUrl?: string; // Path to actual project image
}

export interface WireframeElement {
  id: string;
  type: 'box' | 'text' | 'image' | 'button' | 'circle' | 'icon' | 'input';
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
  variant?: string; // wireframe style (dashed, cross) or hifi style
  hifiStyles?: string; // Tailwind class string for High fidelity render
}

export interface DesignTokenDemo {
  radius: 'none' | 'md' | 'xl' | 'full';
  primaryColor: string;
  fontFamily: 'sans' | 'display' | 'mono';
  spacing: 'compact' | 'cozy' | 'loose';
}

export interface SideProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  metric?: string;
  accentClass: string; // Tailwind border or text color class
  imageUrl?: string; // Path to actual project image
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skillsValidated: string[];
  bannerBg: string; // Tailwind bg gradient class
  imageUrl?: string; // Path to actual certificate image
}

