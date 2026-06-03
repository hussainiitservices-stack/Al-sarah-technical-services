"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const serviceOptions = [
  "Concrete Scan",
  "Concrete Cutting",
  "Concrete Core / Drilling",
  "General Enquiries",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="right">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Tell us what you need and our experts will get back to you shortly.
              For urgent enquiries, call either of our lines below.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Mobile",
                  value: "+971 52 106 0007",
                  href: "tel:+971521060007",
                  icon: (
                    <path
                      d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  label: "Office",
                  value: "+971 6 53 11922",
                  href: "tel:+97165311922",
                  icon: (
                    <path
                      d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  label: "Email",
                  value: "info@alsarhtechnicalservices.com",
                  href: "mailto:info@alsarhtechnicalservices.com",
                  icon: (
                    <path
                      d="M3 6h18v12H3zM3 7l9 6 9-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  label: "Head office",
                  value: "Al Jurf, Industrial 3, Ajman, UAE",
                  href: "#",
                  icon: (
                    <path
                      d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11zm0-8a3 3 0 100-6 3 3 0 000 6z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-navy/20"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {c.label}
                    </span>
                    <span className="block font-semibold text-navy">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal
            direction="left"
            delay={120}
            className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy/5 sm:p-9"
          >
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-surface text-navy">
                  <svg
                    className="h-8 w-8"
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
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  Thank you!
                </h3>
                <p className="mt-2 text-muted">
                  Your request has been received. We shall get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name">
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone" name="phone">
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Email" name="email">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>

                <Field label="Service needed" name="service">
                  <select name="service" className="form-input" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" name="message">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="btn-primary w-full px-6 py-3.5 text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      {children}
    </label>
  );
}
