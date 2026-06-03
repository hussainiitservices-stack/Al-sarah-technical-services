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
    title: "AC & HVAC",
    description:
      "Installation, servicing, gas charging and rapid repairs for split, ducted and central cooling systems.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Electrical",
    description:
      "DEWA-compliant wiring, distribution boards, lighting design and certified fault-finding.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Plumbing",
    description:
      "Leak detection, pipework, water-tank cleaning and complete sanitary installations.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Civil Works",
    description:
      "Masonry, tiling, waterproofing and preventive maintenance that protects your property.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Fit-Out",
    description:
      "Custom joinery, partitions and full interior fit-outs delivered on time and on budget.",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ExpandingCards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Premium Solutions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Explore Our Core Services
          </h2>
          <p className="mt-4 text-muted">
            Hover over a panel to discover how our specialist teams keep your
            property running.
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
                  className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${
                    isActive ? "flex-[5]" : "flex-[1]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

                  {/* Number badge */}
                  <span
                    className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-bold text-white backdrop-blur transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Collapsed vertical title */}
                  <span
                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-bold text-white transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {p.title}
                  </span>

                  {/* Expanded content */}
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
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
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
