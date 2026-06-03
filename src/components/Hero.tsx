import Reveal from "./Reveal";

const highlights = [
  "ISO Certified Quality Systems",
  "Industry-Trained Specialists",
  "Health & Safety First",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white text-navy"
    >
      <div className="pointer-events-none absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover motion-reduce:animate-none"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/55" />
        <div className="absolute -left-40 top-10 h-96 w-96 animate-glow rounded-full bg-brand/10 blur-3xl motion-reduce:animate-none" />
        <div className="absolute right-1/4 bottom-20 h-64 w-64 animate-float-delayed rounded-full bg-navy/5 blur-3xl motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <div>
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand shadow-sm transition-shadow duration-500 hover:shadow-md">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-navy motion-reduce:animate-none" />
              Most trusted concrete service company in the UAE
            </span>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Health & Safety Is
              <br />
              Our Top Priority —
              <br />
              <span className="text-brand">Concrete</span> Experts You Trust.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Al Sarh Technical Services specializes in concrete scanning,
              cutting and core drilling across the UAE — delivering value-added
              results with the latest technology and skilled teams.
            </p>
          </Reveal>

          <Reveal direction="up" delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary px-7 py-3.5 text-sm">
                Request a Quote
              </a>
              <a
                href="#services"
                className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-navy transition hover:border-navy/30 hover:bg-surface"
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
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <svg
                    className="h-5 w-5 text-navy"
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
          <div className="animate-float rounded-3xl border border-line bg-white p-6 shadow-xl shadow-navy/5 motion-reduce:animate-none transition-shadow duration-700 hover:shadow-2xl hover:shadow-navy/10">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years of Experience" },
                { value: "1.5K+", label: "Projects Delivered" },
                { value: "24/7", label: "Site Support" },
                { value: "100%", label: "Client Satisfaction Focus" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-surface p-5 ring-1 ring-line"
                >
                  <div className="text-3xl font-extrabold text-navy">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-navy px-5 py-4 text-white">
              <svg
                className="h-7 w-7 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <div className="text-sm font-bold">Request Our Brochure</div>
                <div className="text-xs text-white/75">
                  Full service list & company profile.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-navy/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-navy" />
        </div>
      </div>
    </section>
  );
}
