import Reveal from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Concrete Scan",
    description:
      "Non-destructive GPR scanning to locate rebar, conduit, post-tension cables, voids and utilities in concrete structures — fast, accurate Mini XT imaging.",
    icon: (
      <path
        d="M4 7h16M4 12h10M4 17h16M8 7v10M16 12v5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Concrete Cutting",
    description:
      "Diamond-blade cutting with water cooling for clean, precise removal — less dust, safer sites, and the shapes and tolerances your project demands.",
    icon: (
      <path
        d="M14 3l-7 12h5l-2 6 9-14h-5l2-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Concrete Core / Drilling",
    description:
      "Diamond core drilling for holes of various sizes and depths — high rotation, controlled downward pressure, and superior accuracy on every pass.",
    icon: (
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 5a3 3 0 100 6 3 3 0 000-6z"
        strokeLinecap="round"
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
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Concrete Scan, Cutting & Core Drilling
          </h2>
          <p className="mt-4 text-muted">
            Full-range concrete evaluation and execution across the UAE — skilled
            teams, modern equipment, and results you can trust on every project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={(i % 3) * 120}>
              <article className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-navy/20 hover:shadow-xl hover:shadow-navy/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:rotate-6">
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
