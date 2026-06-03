import Reveal from "./Reveal";
import CountUp from "./CountUp";

const points = [
  "Annual Maintenance Contracts (AMC) tailored to your property",
  "Single point of contact for every trade and discipline",
  "Compliant with UAE municipality and DEWA standards",
  "Detailed reporting and proactive preventive maintenance",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 text-white"
    >
      {/* Background image + blue gradient for the glass to sit on */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-brand/80" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal direction="right">
          {/* Glassmorphism panel */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl shadow-navy/30 backdrop-blur-2xl sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Al Sarh
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Built on Quality, Driven by Reliability
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Al Sarh Technical Services is a UAE-based provider of integrated
              building maintenance and MEP solutions. We help homeowners,
              landlords and facility managers protect their assets with
              dependable, cost-effective technical support — all under one roof.
            </p>
            <p className="mt-4 leading-relaxed text-white/80">
              Our mission is simple: be the partner our clients call first, and
              the one they never need to replace.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-navy">
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
                  <span className="text-sm text-white/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5">
          {[
            { end: 12, suffix: "+", label: "Years in Operation" },
            { end: 1500, suffix: "+", label: "Jobs Completed" },
            { end: 40, suffix: "+", label: "Skilled Staff" },
            { end: 4.9, suffix: "/5", decimals: 1, label: "Average Rating" },
          ].map((s, i) => (
            <Reveal key={s.label} direction="scale" delay={i * 120}>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-7 text-center shadow-xl shadow-navy/20 backdrop-blur-xl transition hover:bg-white/15">
                <CountUp
                  end={s.end}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  className="text-4xl font-extrabold text-accent"
                />
                <div className="mt-2 text-sm text-white/80">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
