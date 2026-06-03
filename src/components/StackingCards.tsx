import Reveal from "./Reveal";

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Concrete Scan",
    description:
      "The Mini XT delivers high-resolution imaging to detect rebar, conduit, post-tension cables, voids and service utilities in real time.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Concrete Cutting",
    description:
      "Cutting-edge diamond technology for safer, cleaner cuts — reducing dust and pollutants while keeping your programme on track.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "Concrete Core / Drilling",
    description:
      "Diamond core drilling combines downward pressure and high rotation for precise holes — widely used on major UAE construction projects.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function StackingCards() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Specialist Services, Done Right
          </h2>
          <p className="mt-4 text-muted">
            Scroll through our core disciplines — each delivered by trained
            experts using the latest equipment.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="sticky"
              style={{ top: `${6 + i * 2.5}rem` }}
            >
              <div className="mb-8 overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-navy/5 transition-all duration-700 hover:shadow-2xl hover:shadow-navy/15">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1.2s] ease-out hover:scale-110"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <span className="text-5xl font-extrabold text-navy/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted">
                      {card.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy transition hover:gap-3 hover:text-brand"
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
