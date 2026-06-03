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
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white text-navy"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/96 to-white/88 sm:bg-gradient-to-r sm:from-white sm:via-white/92 sm:to-white/55" />
        <div className="absolute -left-40 top-10 hidden h-96 w-96 animate-glow rounded-full bg-brand/10 blur-3xl motion-reduce:animate-none sm:block" />
        <div className="absolute right-1/4 bottom-20 hidden h-64 w-64 animate-float-delayed rounded-full bg-navy/5 blur-3xl motion-reduce:animate-none sm:block" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pt-24 pb-24 sm:gap-12 sm:px-5 sm:pt-28 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-32 lg:pb-28">
        <div className="min-w-0">
          <Reveal direction="up">
            <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-brand shadow-sm sm:px-4 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse-soft rounded-full bg-navy motion-reduce:animate-none" />
              Most trusted concrete service company in the UAE
            </span>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1 className="mt-5 text-[1.75rem] font-extrabold leading-[1.15] sm:mt-6 sm:text-4xl sm:leading-tight lg:text-6xl">
              Health & Safety Is Our Top Priority —
              <span className="text-brand"> Concrete</span> Experts You Trust.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <p className="mt-5 text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
              Al Sarh Technical Services specializes in concrete scanning,
              cutting and core drilling across the UAE — delivering value-added
              results with the latest technology and skilled teams.
            </p>
          </Reveal>

          <Reveal direction="up" delay={360}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="btn-primary flex min-h-12 w-full items-center justify-center px-7 py-3.5 text-sm sm:w-auto"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="flex min-h-12 w-full items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-navy transition active:bg-surface sm:w-auto sm:hover:border-navy/30 sm:hover:bg-surface"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={480}>
            <ul className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-navy"
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

        <Reveal direction="left" delay={300} className="relative min-w-0">
          <div className="rounded-3xl border border-line bg-white p-4 shadow-xl shadow-navy/5 sm:p-6 sm:animate-float motion-reduce:animate-none sm:transition-shadow sm:duration-700 sm:hover:shadow-2xl sm:hover:shadow-navy/10">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "12+", label: "Years of Experience" },
                { value: "1.5K+", label: "Projects Delivered" },
                { value: "24/7", label: "Site Support" },
                { value: "100%", label: "Client Satisfaction Focus" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-surface p-4 ring-1 ring-line sm:p-5"
                >
                  <div className="text-2xl font-extrabold text-navy sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-4 flex min-h-12 items-center gap-3 rounded-2xl bg-navy px-4 py-4 text-white active:opacity-90 sm:px-5"
            >
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
              <div className="min-w-0">
                <div className="text-sm font-bold">Request Our Brochure</div>
                <div className="truncate text-xs text-white/75 sm:whitespace-normal">
                  Full service list & company profile.
                </div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-navy/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-navy" />
        </div>
      </div>
    </section>
  );
}
