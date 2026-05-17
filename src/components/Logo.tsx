import * as React from 'react';
import { Globe, Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
  imageSrc?: string; // Optional: provide an image URL to replace the default SVG logo
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false, imageSrc }) => {
  // If an image source is provided, render it instead of the SVG-based logo
  if (imageSrc) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img src={imageSrc} alt="Greenverse Logo" className="h-11 w-auto object-contain" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <div className="relative">
          <Globe className={`h-11 w-11 ${light ? 'text-primary-foreground' : 'text-primary'}`} />
          <Leaf className={`absolute -right-2 -top-1.5 h-7 w-7 ${light ? 'text-primary-foreground fill-primary-foreground' : 'text-primary fill-primary'} rotate-[15deg] transition-transform group-hover:rotate-[25deg]`} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-[12px] font-serif font-medium ${light ? 'text-primary-foreground/70' : 'text-muted-foreground/80'} italic mb-0.5`}>
          Ecossistema
        </span>
        <span className={`text-3xl font-black tracking-tighter ${light ? 'text-primary-foreground' : 'text-primary'}`}>
          GREENVERSE
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-[9px] font-bold ${light ? 'text-primary-foreground/60' : 'text-muted-foreground/70'} whitespace-nowrap uppercase tracking-[0.12em]`}>
            ESG · Facilities Verdes
          </span>
          <div className={`h-[1px] w-full min-w-[40px] ${light ? 'bg-primary-foreground/30' : 'bg-primary/30'}`} />
        </div>
      </div>
    </div>
  );
};
