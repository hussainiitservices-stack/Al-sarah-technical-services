import Reveal from "./Reveal";

export default function Brochure() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-5 py-10 text-center sm:px-8 sm:py-14 md:px-14">
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Company Profile
              </span>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
                Request Our Brochure
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Get our full list of concrete scanning, cutting and core drilling
                capabilities in one convenient document.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                >
                  <svg
                    className="h-5 w-5"
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
                  Download Now
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-navy transition active:bg-white sm:hover:border-navy/30"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
