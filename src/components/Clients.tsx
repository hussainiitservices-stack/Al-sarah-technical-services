import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { customers } from "@/data/customers";

const rowOne = customers.slice(0, 6);
const rowTwo = [...customers.slice(6), ...customers.slice(0, 2)];

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-surface py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 animate-glow rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 animate-float-delayed rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-navy" />
            Our Trustworthy Customers
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Trusted by Leading Contractors & Developers
          </h2>
          <p className="mt-4 text-muted">
            Excellent service keeps clients coming back — we are proud to partner
            with respected names across the UAE construction industry.
          </p>
        </Reveal>

        <Reveal direction="scale" delay={120} className="mt-10">
          <div className="shimmer-line animate-shimmer rounded-full border border-line bg-white/80 px-5 py-3 text-center text-xs font-medium text-muted motion-reduce:animate-none">
            Demo logos shown for presentation — replace with official client assets
          </div>
        </Reveal>
      </div>

      <div className="relative mt-12 space-y-6">
        <Marquee items={rowOne} variant="logo" speed="logos" />
        <Marquee items={rowTwo} variant="logo" speed="logos" reverse />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent sm:w-32" />
    </section>
  );
}
