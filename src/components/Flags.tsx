import React from 'react';

// Bandeira do Brasil 🇧🇷
export const FlagBrazil: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg 
    viewBox="0 0 720 504" 
    className={`inline-block rounded-sm shadow-sm shrink-0 object-cover ${className}`}
    aria-label="Bandeira do Brasil"
  >
    <rect width="720" height="504" fill="#009b3a" />
    <polygon points="360,50.4 669.6,252 360,453.6 50.4,252" fill="#fedf00" />
    <circle cx="360" cy="252" r="126" fill="#002776" />
    <path 
      d="M246.6,264.6 C270,225 330,205 473.4,264.6" 
      fill="none" 
      stroke="#ffffff" 
      strokeWidth="18" 
    />
    <circle cx="360" cy="285" r="5" fill="#ffffff" />
    <circle cx="380" cy="270" r="4.5" fill="#ffffff" />
    <circle cx="340" cy="265" r="4" fill="#ffffff" />
    <circle cx="320" cy="290" r="4" fill="#ffffff" />
    <circle cx="395" cy="295" r="4.5" fill="#ffffff" />
  </svg>
);

// Bandeira da Espanha 🇪🇸
export const FlagSpain: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg 
    viewBox="0 0 750 500" 
    className={`inline-block rounded-sm shadow-sm shrink-0 object-cover ${className}`}
    aria-label="Bandeira da Espanha"
  >
    <rect width="750" height="500" fill="#c60b1e" />
    <rect y="125" width="750" height="250" fill="#ffc400" />
    {/* Escudo simplificado */}
    <g transform="translate(180, 200) scale(0.7)">
      <rect x="-30" y="-30" width="60" height="70" rx="10" fill="#c60b1e" stroke="#ffc400" strokeWidth="4" />
      <path d="M-20,-15 L20,-15 L20,20 L0,35 L-20,20 Z" fill="#ffc400" />
      <circle cx="0" cy="0" r="8" fill="#002776" />
      <rect x="-40" y="-40" width="80" height="12" rx="4" fill="#ffc400" />
    </g>
  </svg>
);

// Bandeira da Inglaterra (St George's Cross) 🏴󠁧󠁢󠁥󠁮󠁧󠁿 / UK
export const FlagEngland: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg 
    viewBox="0 0 500 300" 
    className={`inline-block rounded-sm shadow-sm shrink-0 border border-slate-200 object-cover ${className}`}
    aria-label="Bandeira da Inglaterra"
  >
    <rect width="500" height="300" fill="#ffffff" />
    <rect x="220" width="60" height="300" fill="#ce1124" />
    <rect y="120" width="500" height="60" fill="#ce1124" />
  </svg>
);
