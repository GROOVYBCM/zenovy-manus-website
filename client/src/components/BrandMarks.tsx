import React from "react";

interface LogoProps {
  className?: string;
  variant?: "wordmark" | "symbol" | "full";
  size?: "sm" | "md" | "lg";
}

/**
 * Zenovy Canonical Wordmark & Geometric Panther Symbol
 * Styled with Quiet Performance Luxury aesthetics (Champagne Gold / Obsidian)
 */
export const ZenovyLogo: React.FC<LogoProps> = ({
  className = "",
  variant = "full",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-5",
    md: "h-7",
    lg: "h-9",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Panther Silhouette / Signal Node Symbol */}
      {(variant === "symbol" || variant === "full") && (
        <svg
          viewBox="0 0 40 40"
          className={`${sizeClasses[size]} w-auto text-[#B79A5B] shrink-0 transition-transform duration-300 hover:rotate-3`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Diamond Boundary */}
          <rect
            x="20"
            y="3"
            width="24"
            height="24"
            transform="rotate(45 20 3)"
            stroke="#B79A5B"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          {/* Internal Panther Silhouette Contour */}
          <path
            d="M12 24C12 24 14 18 19 16C23 14.5 25 11 27 9C27.5 12 29 13.5 32 14C30 16 29 18 28.5 21C26.5 19.5 24 19 21.5 20C17 21.5 14 24 12 24Z"
            fill="#B79A5B"
            fillOpacity="0.9"
          />
          <path
            d="M16 28L28 16M28 28H14"
            stroke="#F3F0E8"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <circle cx="28" cy="16" r="1.5" fill="#F3F0E8" />
        </svg>
      )}

      {/* Editorial Typographic Wordmark */}
      {(variant === "wordmark" || variant === "full") && (
        <div className="flex flex-col tracking-wider">
          <span
            className="font-serif tracking-[0.22em] text-[#F3F0E8] font-semibold text-lg md:text-xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            ZENOVY
          </span>
          <span className="font-sans text-[0.5625rem] tracking-[0.32em] text-[#B79A5B] font-bold uppercase mt-0.5">
            GROWTH ARCHITECTURE
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Controlled Canonical Panther Contour for Editorial Accents
 * Low-contrast watermark / architectural contour as specified in section 10
 */
export const PantherContour: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = "", opacity = 0.08 }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <path
          d="M50 320C120 310 180 260 220 220C260 180 290 140 350 110C410 80 470 60 550 50C530 90 520 130 500 170C460 250 380 310 280 340C190 370 110 350 50 320Z"
          stroke="#B79A5B"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <path
          d="M220 220L380 220M350 110L280 340"
          stroke="#B79A5B"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
        <circle cx="350" cy="110" r="4" fill="#B79A5B" />
        <circle cx="220" cy="220" r="3" fill="#B79A5B" />
        <circle cx="280" cy="340" r="3" fill="#B79A5B" />
      </svg>
    </div>
  );
};
