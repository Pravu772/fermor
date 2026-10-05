import React from "react";

interface LogoWordmarkProps {
  className?: string;
  showBadge?: boolean;
}

/**
 * Modular Fermor Brand Wordmark.
 * Structured cleanly so the production SVG logo can be dropped in seamlessly.
 */
export function LogoWordmark({ className = "", showBadge = false }: LogoWordmarkProps) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Brand Icon Mark */}
      <div className="w-8 h-8 rounded-lg bg-[#0E2F22] text-[#FAF9F5] flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
        F
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline gap-1.5">
        <span className="font-serif text-2xl font-bold tracking-tight text-[#0E2F22]">
          Fermor
        </span>
        {showBadge && (
          <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-[#F3EFE6] text-[#4A5750] border border-[#E4E0D6]">
            India
          </span>
        )}
      </div>
    </div>
  );
}
