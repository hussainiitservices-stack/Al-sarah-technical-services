import Reveal from "./Reveal";

const reasons = [
  {
    title: "Qualified Technicians",
    description:
      "Trained, background-checked specialists for every trade — no subcontracting surprises.",
  },
  {
    title: "Fast Response Times",
    description:
      "Same-day callouts and a 24/7 hotline so urgent issues never wait.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear, upfront quotations with no hidden charges or inflated parts.",
  },
  {
    title: "Quality Guaranteed",
    description:
      "Workmanship warranties and quality checks on every job we complete.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            The Dependable Choice for Property Owners & Facility Managers
          </h2>
          <p className="mt-4 text-muted">
            We combine technical expertise with genuine reliability. Whether
            it&apos;s a single repair or an annual maintenance contract, you get
            the same standard of care every time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy transition hover:border-accent"
            >
              View All Services
            </a>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} direction="up" delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/5">
                <span className="text-2xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
