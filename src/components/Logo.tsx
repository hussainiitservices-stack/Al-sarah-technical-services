"use client";

import { useState } from "react";

export default function Logo({
  className = "",
  height = "h-12",
}: {
  className?: string;
  height?: string;
}) {
  const [imgOk, setImgOk] = useState(true);

  if (imgOk) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Al Sarh Technical Services"
        className={`${height} w-auto rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5 ${className}`}
        onError={() => setImgOk(false)}
      />
    );
  }

  // Fallback dummy mark if /logo.png is missing
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 5 9 5 14a7 7 0 0014 0C19 9 12 2 12 2z" />
        </svg>
      </span>
      <span className="leading-tight text-navy">
        <span className="block text-base font-bold">Al Sarh</span>
        <span className="block text-[11px] uppercase tracking-[0.2em] text-brand">
          Technical Services
        </span>
      </span>
    </span>
  );
}
