"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = scrolled
    ? "bg-white/95 backdrop-blur shadow-sm shadow-navy/5 border-b border-line"
    : "bg-white/80 backdrop-blur border-b border-transparent";

  const linkClass =
    "text-sm font-medium text-navy/80 transition hover:text-navy";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div
        className={`hidden border-b border-line text-muted transition-all duration-300 md:block ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:+971521060007"
              className="flex items-center gap-2 transition hover:text-navy"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +971 52 106 0007
            </a>
            <a
              href="tel:+97165311922"
              className="flex items-center gap-2 transition hover:text-navy"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +971 6 53 11922
            </a>
          </div>
          <span className="hidden lg:block">
            Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 2:00 PM
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <a href="#home" className="min-h-11 min-w-0 shrink py-1">
          <Logo height="h-9 sm:h-12" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary min-h-11 px-5 py-2.5 text-sm">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-navy active:bg-surface md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white md:hidden">
          <div className="space-y-1 px-4 py-4 pb-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-lg px-4 text-base font-medium text-navy/80 active:bg-surface"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+971521060007"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center gap-2 rounded-lg px-4 text-base font-medium text-navy active:bg-surface"
            >
              Call +971 52 106 0007
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 flex min-h-12 items-center justify-center text-base"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
