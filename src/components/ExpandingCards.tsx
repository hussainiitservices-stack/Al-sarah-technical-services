"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Panel = {
  title: string;
  description: string;
  image: string;
};

const panels: Panel[] = [
  {
    title: "Concrete Scan",
    description:
      "Real-time GPR data to locate metallic and non-metallic objects, moisture, slab thickness and defects — without multiple passes.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Concrete Cutting",
    description:
      "State-of-the-art diamond cutting tools for smooth removal with precise shape, size and accuracy on site.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "Concrete Core / Drilling",
    description:
      "Diamond-impregnated core drilling for clean holes at depth — cost-effective, accurate and built for demanding structures.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ExpandingCards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Premium Solutions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Explore Our Core Services
          </h2>
          <p className="mt-4 text-muted">
            Hover a panel to see how our specialist teams deliver scanning,
            cutting and core drilling across the UAE.
          </p>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <div className="mt-12 flex h-[460px] w-full gap-3 overflow-hidden">
            {panels.map((p, i) => {
              const isActive = active === i;
              return (
                <div
                  key={p.title}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "flex-[5] shadow-2xl shadow-navy/20 ring-2 ring-navy/20"
                      : "flex-[1] hover:flex-[1.15]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />

                  <span
                    className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-bold text-white backdrop-blur transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-bold text-white transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {p.title}
                  </span>

                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                      {p.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
                    >
                      Enquire now
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
