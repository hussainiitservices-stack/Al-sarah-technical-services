import Reveal from "./Reveal";
import CountUp from "./CountUp";

const points = [
  "Industry-based, highly skilled cutting and scanning experts",
  "ISO certified quality control on every engagement",
  "Health and safety procedures trained across all crews",
  "Method statements and risk assessments prepared before mobilization",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-surface" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal direction="right">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-xl shadow-navy/5 sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              About Al Sarh
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              A Reliable Go-To Concrete Services Company
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Al Sarh Technical Services LLC specializes in concrete scanning,
              cutting and core drilling works across the United Arab Emirates.
              Our professional teams use the latest technologies to deliver the
              highest quality results — fast and at competitive rates.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We aim to be the partner you call first for complex concrete
              evaluation and execution, with on-time delivery and complete
              customer satisfaction.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy text-white">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-navy/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5">
          {[
            { end: 12, suffix: "+", label: "Years in Operation" },
            { end: 1500, suffix: "+", label: "Projects Delivered" },
            { end: 40, suffix: "+", label: "Skilled Experts" },
            { end: 100, suffix: "%", label: "Safety Commitment" },
          ].map((s, i) => (
            <Reveal key={s.label} direction="scale" delay={i * 120}>
              <div className="rounded-2xl border border-line bg-white p-7 text-center shadow-lg shadow-navy/5 transition hover:-translate-y-0.5">
                <CountUp
                  end={s.end}
                  suffix={s.suffix}
                  className="text-4xl font-extrabold text-navy"
                />
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
