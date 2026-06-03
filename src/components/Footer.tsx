import Logo from "./Logo";

const columns = [
  {
    heading: "Services",
    links: [
      "AC & HVAC",
      "Electrical Works",
      "Plumbing & Sanitary",
      "Civil & Maintenance",
      "Fit-Out & Joinery",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Why Choose Us", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Integrated building maintenance and MEP services trusted across the
              UAE.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>Dubai, United Arab Emirates</li>
              <li>
                <a href="tel:+97140000000" className="hover:text-white">
                  +971 4 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alsarhtechnical.ae"
                  className="hover:text-white"
                >
                  info@alsarhtechnical.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Al Sarh Technical Services. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
