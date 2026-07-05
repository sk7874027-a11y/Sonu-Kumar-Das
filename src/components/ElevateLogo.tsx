export default function ElevateLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={`w-auto h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="arrow-cutout">
          <rect x="-50" y="-20" width="300" height="150" fill="white" />
          <path d="M -15 85 Q 40 50, 95 10" fill="none" stroke="black" strokeWidth="10" strokeLinecap="round" />
        </mask>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <polygon points="0 0, 10 5, 0 10" fill="#ea580c" />
        </marker>
      </defs>
      
      {/* Big Orange E */}
      <g transform="translate(160, 15)">
        <text x="40" y="80" fontFamily="Georgia, Times New Roman, serif" fontSize="90" fill="#ea580c" mask="url(#arrow-cutout)" textAnchor="middle">E</text>
        <path d="M -15 85 Q 40 50, 95 10" fill="none" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" markerEnd="url(#arrowhead)" />
      </g>

      {/* ELEVATE text */}
      <g transform="translate(0, 135)" fill="#111827" fontFamily="Georgia, Times New Roman, serif" fontSize="42" textAnchor="middle">
        <text x="50">E</text>
        <text x="100">L</text>
        <text x="150">E</text>
        <text x="200">V</text>
        
        {/* Orange Chevron 'A' */}
        <path d="M 235 0 L 250 -32 L 265 0 L 257 0 L 250 -16 L 243 0 Z" fill="#ea580c" />
        
        <text x="300">T</text>
        <text x="350">E</text>
      </g>

      {/* SOLUTIONS with lines */}
      <g transform="translate(200, 152)">
        <line x1="-150" y1="-4" x2="-65" y2="-4" stroke="#ea580c" strokeWidth="1.5" />
        <text x="0" y="0" fontFamily="sans-serif" fontSize="13" fill="#ea580c" letterSpacing="8" textAnchor="middle">SOLUTIONS</text>
        <line x1="65" y1="-4" x2="150" y2="-4" stroke="#ea580c" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
