import Reveal from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "AC & HVAC",
    description:
      "Installation, servicing and repair of split, ducted and central air-conditioning systems with scheduled maintenance.",
    icon: (
      <path d="M3 7h18M3 12h18M3 17h18M7 7v10M17 7v10" strokeLinecap="round" />
    ),
  },
  {
    title: "Electrical Works",
    description:
      "Wiring, distribution boards, lighting, DEWA-compliant installations and fault-finding by certified electricians.",
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />,
  },
  {
    title: "Plumbing & Sanitary",
    description:
      "Leak detection, pipe fitting, water tank cleaning and complete sanitary installations and repairs.",
    icon: (
      <path
        d="M8 3v6a4 4 0 004 4 4 4 0 014 4v4M8 3H5m3 0h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Civil & Maintenance",
    description:
      "Masonry, tiling, waterproofing, flooring and general building maintenance for villas, offices and retail.",
    icon: (
      <path
        d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Painting & Finishing",
    description:
      "Interior and exterior painting, gypsum, false ceilings and decorative finishes with a flawless result.",
    icon: (
      <path
        d="M3 7l9-4 9 4v4H3V7zm0 4v6a2 2 0 002 2h6v-4a2 2 0 114 0v4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Fit-Out & Joinery",
    description:
      "Carpentry, partitions, custom joinery and full interior fit-outs delivered on time and on budget.",
    icon: (
      <path
        d="M4 4h16v16H4zM4 9h16M9 9v11"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            One Team for All Your Technical Needs
          </h2>
          <p className="mt-4 text-muted">
            A complete range of MEP and maintenance services delivered by
            qualified, vetted professionals.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={(i % 3) * 120}>
              <article className="group h-full rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-navy/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-accent transition group-hover:bg-accent group-hover:text-navy group-hover:rotate-6">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
