import Reveal from "./Reveal";

const reasons = [
  {
    title: "Skilled Cutting Experts",
    description:
      "Industry-trained teams using the latest scanning, cutting and drilling equipment on every job.",
  },
  {
    title: "ISO Certified Quality",
    description:
      "Quality control systems and safety certification backed by rigorous on-site procedures.",
  },
  {
    title: "Health & Safety First",
    description:
      "Method statements, risk assessments and safety training for every mobilization.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Complex project execution with dependable scheduling and 100% customer satisfaction focus.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
            The Trusted Choice for Concrete Works in the UAE
          </h2>
          <p className="mt-4 text-muted">
            We combine advanced technology with dependable field execution —
            whether you need scanning before cutting or core drilling on a major
            tower project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="btn-primary flex min-h-12 items-center justify-center px-6 py-3 text-sm sm:inline-flex"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="flex min-h-12 items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy transition active:bg-surface sm:hover:border-navy/30 sm:hover:bg-surface"
            >
              View All Services
            </a>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} direction="up" delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-navy/20 hover:shadow-lg hover:shadow-navy/10">
                <span className="text-2xl font-extrabold text-navy/25">
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
