import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  lightText = false,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeMap[size]} relative flex-shrink-0 rounded-full shadow-md transition-transform hover:scale-105`}
        title="The Concept Education System Bijar Emblem"
      >
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-sm select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer Gold Gradient */}
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>

            {/* Inner Emerald Gradient */}
            <linearGradient id="emeraldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Sky Center Gradient */}
            <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="40%" stopColor="#FEF08A" />
              <stop offset="70%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </radialGradient>

            {/* Book Gradient */}
            <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            {/* Curved Path for Text */}
            <path
              id="topTextPath"
              d="M 28 80 A 52 52 0 0 1 132 80"
              fill="none"
            />
          </defs>

          {/* Outer Border with Gold & Green */}
          <circle cx="80" cy="80" r="78" fill="url(#goldRim)" />
          <circle cx="80" cy="80" r="73" fill="url(#emeraldRing)" stroke="#FEF08A" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="58" fill="url(#sunGlow)" stroke="#FACC15" strokeWidth="1.5" />

          {/* Radiating Sun Rays in upper hemisphere */}
          <g stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.9">
            <line x1="80" y1="52" x2="80" y2="33" />
            <line x1="92" y1="55" x2="103" y2="38" />
            <line x1="68" y1="55" x2="57" y2="38" />
            <line x1="102" y1="62" x2="119" y2="48" />
            <line x1="58" y1="62" x2="41" y2="48" />
            <line x1="108" y1="71" x2="126" y2="62" />
            <line x1="52" y1="71" x2="34" y2="62" />
          </g>

          {/* Rising Sun Core */}
          <circle cx="80" cy="54" r="13" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="80" cy="54" r="9" fill="#FEF08A" />

          {/* Laurel Wreath Leaves on the green band */}
          <g fill="#FEF08A" opacity="0.85">
            {/* Left wreath leaves */}
            <path d="M 24 78 Q 20 73 24 68 Q 28 73 24 78 Z" />
            <path d="M 28 92 Q 22 89 25 83 Q 30 87 28 92 Z" />
            <path d="M 37 106 Q 31 105 32 99 Q 39 101 37 106 Z" />
            {/* Right wreath leaves */}
            <path d="M 136 78 Q 140 73 136 68 Q 132 73 136 78 Z" />
            <path d="M 132 92 Q 138 89 135 83 Q 130 87 132 92 Z" />
            <path d="M 123 106 Q 129 105 128 99 Q 121 101 123 106 Z" />
          </g>

          {/* Text along top curve */}
          <text
            fontSize="8.5"
            fontWeight="bold"
            letterSpacing="0.8"
            fill="#FEF08A"
            className="font-serif-crest"
          >
            <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
              THE CONCEPT EDUCATION
            </textPath>
          </text>

          {/* Open Quran / Book with Rehal Stand */}
          {/* Rehal (wooden X-stand) */}
          <g stroke="#92400E" strokeWidth="3" strokeLinecap="round">
            <line x1="62" y1="96" x2="98" y2="114" />
            <line x1="98" y1="96" x2="62" y2="114" />
          </g>
          <g stroke="#D97706" strokeWidth="1.5" strokeLinecap="round">
            <line x1="64" y1="98" x2="96" y2="112" />
            <line x1="96" y1="98" x2="64" y2="112" />
          </g>

          {/* Open Book Pages */}
          {/* Left Page */}
          <path
            d="M 80 84 C 70 80 54 81 48 85 C 47 95 49 101 50 102 C 58 98 72 97 80 101 Z"
            fill="#FFFFFF"
            stroke="#D97706"
            strokeWidth="1.2"
          />
          {/* Right Page */}
          <path
            d="M 80 84 C 90 80 106 81 112 85 C 113 95 111 101 110 102 C 102 98 88 97 80 101 Z"
            fill="#FFFFFF"
            stroke="#D97706"
            strokeWidth="1.2"
          />

          {/* Page text lines simulation */}
          <g stroke="#CBD5E1" strokeWidth="0.8" strokeLinecap="round">
            <line x1="55" y1="89" x2="74" y2="88" />
            <line x1="54" y1="93" x2="74" y2="92" />
            <line x1="55" y1="97" x2="73" y2="96" />
            <line x1="86" y1="88" x2="105" y2="89" />
            <line x1="86" y1="92" x2="106" y2="93" />
            <line x1="87" y1="96" x2="105" y2="97" />
          </g>

          {/* Center Book spine line */}
          <line x1="80" y1="84" x2="80" y2="101" stroke="#92400E" strokeWidth="1.5" />

          {/* Bottom Green Ribbon Banner */}
          <g filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.25))">
            {/* Banner Tails */}
            <polygon points="32,130 46,122 46,138" fill="#14532D" />
            <polygon points="128,130 114,122 114,138" fill="#14532D" />
            {/* Banner Main Body */}
            <path
              d="M 40 120 Q 80 125 120 120 L 118 136 Q 80 142 42 136 Z"
              fill="#15803D"
              stroke="#FEF08A"
              strokeWidth="1.2"
            />
            {/* Banner Text */}
            <text
              x="80"
              y="131"
              textAnchor="middle"
              fill="#FEF08A"
              fontSize="7.5"
              fontWeight="bold"
              letterSpacing="1.2"
              className="font-serif-crest"
            >
              SYSTEM BIJAR
            </text>
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold tracking-tight leading-tight font-serif-crest text-base md:text-lg ${
              lightText ? 'text-white' : 'text-slate-900'
            }`}
          >
            The Concept Education System
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${
                lightText ? 'text-amber-300' : 'text-blue-700'
              }`}
            >
              Bijar Campus
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
              lightText ? 'bg-amber-400 text-slate-900' : 'bg-emerald-100 text-emerald-800'
            }`}>
              Est. Excellence
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
