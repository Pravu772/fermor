import React from "react";

interface LogoWordmarkProps {
  className?: string;
  showBadge?: boolean;
}

/**
 * Official Fermor Logo & Wordmark.
 * Accurate reproduction of the stepped dual-path mint icon and bold sans wordmark.
 */
export function LogoWordmark({ className = "", showBadge = false }: LogoWordmarkProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Stepped Dual-Stroke SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 shrink-0 transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Top Stepped Stroke */}
        <path
          d="M 3 13.5 H 10.5 L 17.5 6 H 26"
          stroke="#4ADE80"
          strokeWidth="3.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Bottom Stepped Stroke */}
        <path
          d="M 3 22.5 H 10.5 L 17.5 15 H 26"
          stroke="#4ADE80"
          strokeWidth="3.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>

      {/* Official Fermor Bold Wordmark */}
      <div className="flex items-baseline gap-1.5">
        <span className="font-sans text-[22px] font-extrabold tracking-tight text-[#111A15] leading-none">
          Fermor
        </span>
        {showBadge && (
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F3EFE6] text-[#4A5750] border border-[#E4E0D6] leading-none">
            India
          </span>
        )}
      </div>
    </div>
  );
}
