import Reveal from "./Reveal";

const highlights = [
  "Licensed & Insured",
  "24/7 Emergency Support",
  "Skilled Technicians",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy text-white"
    >
      {/* Background video with image poster fallback */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <div>
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted technical partner across the UAE
            </span>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Reliable Technical
              <br />
              Services for Every
              <br />
              <span className="text-accent">Building</span> You Manage.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              From air conditioning and electrical to plumbing, civil works and
              complete fit-outs — Al Sarh Technical Services keeps your property
              running smoothly with one dependable team.
            </p>
          </Reveal>

          <Reveal direction="up" delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-accent-dark"
              >
                Request a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={480}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal direction="left" delay={300} className="relative">
          <div className="animate-float rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years of Experience" },
                { value: "1.5K+", label: "Projects Delivered" },
                { value: "24/7", label: "Emergency Response" },
                { value: "98%", label: "Client Retention" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-navy/60 p-5 ring-1 ring-white/10"
                >
                  <div className="text-3xl font-extrabold text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-accent px-5 py-4 text-navy">
              <svg
                className="h-7 w-7 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 5h2l3.6 7.6L7 16h10M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <div className="text-sm font-bold">
                  Annual Maintenance Contracts
                </div>
                <div className="text-xs text-navy/80">
                  Predictable upkeep, no surprises.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
