import * as React from 'react';
import { Globe, Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  light?: boolean;
  imageSrc?: string; // Optional: provide an image URL to replace the default SVG logo
}

export const Logo: React.FC<LogoProps> = ({ className = "", imgClassName = "", light = false, imageSrc }) => {
  const [imageError, setImageError] = React.useState(false);
  const logoPath = imageSrc || "/logo.png";

  if (imageError) {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
        <div className="relative flex items-center justify-center shrink-0">
          <div className="relative">
            <Globe className={`h-8 w-8 sm:h-11 sm:w-11 ${light ? 'text-primary-foreground' : 'text-primary'}`} />
            <Leaf className={`absolute -right-1.5 -top-1 sm:-right-2 sm:-top-1.5 h-5 w-5 sm:h-7 sm:w-7 ${light ? 'text-primary-foreground fill-primary-foreground' : 'text-primary fill-primary'} rotate-[15deg] transition-transform group-hover:rotate-[25deg]`} />
          </div>
        </div>
        <div className="flex flex-col leading-none">
          <span className={`text-[10px] sm:text-[12px] font-serif font-medium ${light ? 'text-primary-foreground/70' : 'text-muted-foreground/80'} italic mb-0.5`}>
            Ecossistema
          </span>
          <span className={`text-xl sm:text-3xl font-black tracking-tighter ${light ? 'text-primary-foreground' : 'text-primary'}`}>
            GREENVERSE
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
            <span className={`text-[8px] sm:text-[9px] font-bold ${light ? 'text-primary-foreground/60' : 'text-muted-foreground/70'} whitespace-nowrap uppercase tracking-[0.12em]`}>
              ESG · Facilities Verdes
            </span>
            <div className={`h-[1px] w-full min-w-[24px] sm:min-w-[40px] ${light ? 'bg-primary-foreground/30' : 'bg-primary/30'}`} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <img 
        src={logoPath} 
        alt="Greenverse Logo" 
        className={`h-11 sm:h-16 md:h-24 w-auto object-contain transition-all duration-300 ${imgClassName}`}
        style={{ filter: light ? 'brightness(0) invert(1)' : 'none' }}
        onError={() => {
          setImageError(true);
          console.warn("Logo image not found at", logoPath);
        }}
      />
    </div>
  );
};
