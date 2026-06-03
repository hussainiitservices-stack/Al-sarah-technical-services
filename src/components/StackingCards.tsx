import Reveal from "./Reveal";

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Air Conditioning",
    description:
      "Complete HVAC care — installation, deep cleaning, gas charging and rapid breakdown repairs to keep every space cool.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Electrical Systems",
    description:
      "Certified electricians for wiring, distribution boards, lighting design and DEWA-compliant installations.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Plumbing & Sanitary",
    description:
      "Leak detection, pipework, water-tank cleaning and full sanitary fit-outs handled cleanly and quickly.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Painting & Finishing",
    description:
      "Flawless interior and exterior painting, gypsum work and decorative finishes that transform any space.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Civil & Maintenance",
    description:
      "Masonry, tiling, waterproofing and preventive maintenance that protects the value of your property.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Fit-Out & Joinery",
    description:
      "Custom carpentry, partitions and complete interior fit-outs delivered on time and on budget.",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function StackingCards() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Specialist Services, Done Right
          </h2>
          <p className="mt-4 text-muted">
            Scroll through our core disciplines — each one delivered by a
            dedicated, experienced crew.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="sticky"
              style={{ top: `${6 + i * 2.5}rem` }}
            >
              <div className="mb-8 overflow-hidden rounded-3xl border border-line bg-navy shadow-2xl shadow-navy/20">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-8 text-white sm:p-12">
                    <span className="text-5xl font-extrabold text-accent/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-white/70">
                      {card.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
