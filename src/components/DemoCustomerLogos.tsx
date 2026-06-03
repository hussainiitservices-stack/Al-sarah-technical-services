import type { ReactNode } from "react";

type LogoProps = {
  className?: string;
};

function LogoFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 48"
      className={`h-10 w-full max-w-[8.5rem] ${className}`}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function LeadersFortLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="4" y="8" width="32" height="32" rx="6" fill="#14143f" />
      <text x="20" y="30" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        LF
      </text>
      <text x="46" y="22" fill="#14143f" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        LEADERS
      </text>
      <text x="46" y="34" fill="#5c6478" fontSize="7" fontWeight="600" fontFamily="system-ui,sans-serif">
        FORT LLC
      </text>
    </LogoFrame>
  );
}

export function PFCGroupLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <circle cx="20" cy="24" r="16" fill="#26266e" />
      <text x="20" y="28" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif">
        PFC
      </text>
      <text x="44" y="26" fill="#14143f" fontSize="11" fontWeight="800" fontFamily="system-ui,sans-serif">
        PFC GROUP
      </text>
    </LogoFrame>
  );
}

export function EmaarLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <path d="M8 36 L20 12 L32 36 Z" fill="none" stroke="#14143f" strokeWidth="2.5" />
      <text x="44" y="28" fill="#14143f" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        EMAAR
      </text>
    </LogoFrame>
  );
}

export function DamacLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="6" y="14" width="28" height="20" rx="3" fill="#26266e" />
      <text x="20" y="28" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        DM
      </text>
      <text x="42" y="28" fill="#14143f" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        DAMAC
      </text>
    </LogoFrame>
  );
}

export function ALECLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="4" y="10" width="36" height="28" rx="4" fill="#f5f6fb" stroke="#14143f" strokeWidth="1.5" />
      <text x="22" y="30" textAnchor="middle" fill="#14143f" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif">
        ALEC
      </text>
      <text x="48" y="30" fill="#5c6478" fontSize="8" fontWeight="600" fontFamily="system-ui,sans-serif">
        ENGINEERING
      </text>
    </LogoFrame>
  );
}

export function ArabtecLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="4" y="8" width="12" height="32" fill="#26266e" />
      <rect x="18" y="8" width="12" height="20" fill="#14143f" />
      <rect x="32" y="8" width="12" height="26" fill="#5c6478" />
      <text x="50" y="28" fill="#14143f" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
        ARABTEC
      </text>
    </LogoFrame>
  );
}

export function KhansahebLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <circle cx="20" cy="24" r="14" fill="none" stroke="#14143f" strokeWidth="2" />
      <text x="20" y="28" textAnchor="middle" fill="#14143f" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
        KH
      </text>
      <text x="42" y="28" fill="#14143f" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        KHANSAHEB
      </text>
    </LogoFrame>
  );
}

export function AlNaboodahLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <ellipse cx="20" cy="24" rx="16" ry="14" fill="#14143f" />
      <text x="20" y="28" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
        AN
      </text>
      <text x="44" y="22" fill="#14143f" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
        AL NABOODAH
      </text>
      <text x="44" y="34" fill="#5c6478" fontSize="6" fontFamily="system-ui,sans-serif">
        GROUP
      </text>
    </LogoFrame>
  );
}

export function TristarLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <polygon points="20,10 30,38 10,38" fill="#26266e" />
      <text x="38" y="28" fill="#14143f" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
        TRISTAR
      </text>
    </LogoFrame>
  );
}

export function DutcoLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="6" y="12" width="28" height="24" rx="12" fill="#f5f6fb" stroke="#26266e" strokeWidth="2" />
      <text x="20" y="29" textAnchor="middle" fill="#14143f" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
        DU
      </text>
      <text x="42" y="28" fill="#14143f" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        DUTCO
      </text>
    </LogoFrame>
  );
}

export function GulfConstructLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <path d="M8 32 L20 14 L32 32" fill="none" stroke="#26266e" strokeWidth="2" strokeLinejoin="round" />
      <line x1="12" y1="26" x2="28" y2="26" stroke="#14143f" strokeWidth="2" />
      <text x="40" y="22" fill="#14143f" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif">
        GULF
      </text>
      <text x="40" y="32" fill="#5c6478" fontSize="7" fontWeight="600" fontFamily="system-ui,sans-serif">
        CONSTRUCT
      </text>
    </LogoFrame>
  );
}

export function SkylineLogo({ className }: LogoProps) {
  return (
    <LogoFrame className={className}>
      <rect x="8" y="22" width="6" height="14" fill="#14143f" />
      <rect x="16" y="16" width="6" height="20" fill="#26266e" />
      <rect x="24" y="10" width="6" height="26" fill="#14143f" />
      <text x="38" y="28" fill="#14143f" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        SKYLINE
      </text>
    </LogoFrame>
  );
}
