import Logo from "./Logo";

const columns = [
  {
    heading: "Services",
    links: [
      "Concrete Scan",
      "Concrete Cutting",
      "Concrete Core / Drilling",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Why Choose Us", "Projects", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white text-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Concrete scanning, cutting and core drilling specialists trusted
              across the UAE.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition hover:text-navy"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>Al Jurf, Industrial 3, Ajman, UAE</li>
              <li>
                <a href="tel:+971521060007" className="hover:text-navy">
                  +971 52 106 0007
                </a>
              </li>
              <li>
                <a href="tel:+97165311922" className="hover:text-navy">
                  +971 6 53 11922
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alsarhtechnicalservices.com"
                  className="hover:text-navy"
                >
                  info@alsarhtechnicalservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Al Sarh Technical Services LLC.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-navy">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
