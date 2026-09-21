import React from "react";

type OELogoProps = {
  className?: string;
};

const OELogo = ({ className = "w-[90px] h-[90px]" }: OELogoProps) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Oladele Emmanuel logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        {/* Rear letter, lifted slightly to preserve the original stacked arrangement. */}
        <text
          x="51"
          y="69"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="67"
          fontWeight="900"
          letterSpacing="-8"
        >
          E
        </text>

        {/* Front letter overlaps the E in the same loose monogram style. */}
        <text
          x="8"
          y="82"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="77"
          fontWeight="900"
          letterSpacing="-8"
        >
          O
        </text>

        {/* Ink-like drips extending naturally from the monogram. */}
        <path d="M23 76h8v17c0 4-1.8 8.3-4 8.3s-4-4.3-4-8.3V76Z" />
        <path d="M55 77h7v27c0 5-1.6 10-3.5 10S55 109 55 104V77Z" />
        <path d="M82 65h7v17c0 4.2-1.6 8.6-3.5 8.6S82 86.2 82 82V65Z" />
        <path d="M98 66h5v10c0 3-1.1 6.2-2.5 6.2S98 79 98 76V66Z" />

        {/* Small distressed cuts keep the mark from feeling too polished. */}
        <rect x="16" y="55" width="12" height="3" rx="1.5" fill="white" />
        <rect x="69" y="39" width="18" height="3" rx="1.5" fill="white" />
        <rect x="72" y="58" width="12" height="3" rx="1.5" fill="white" />
      </g>
    </svg>
  );
};

export default OELogo;
