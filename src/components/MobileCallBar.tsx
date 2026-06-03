export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 px-3 py-3 shadow-[0_-8px_30px_rgba(20,20,63,0.08)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Quick contact actions"
    >
      <a
        href="tel:+971521060007"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-line bg-white text-sm font-semibold text-navy transition active:bg-surface"
      >
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path
            d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Call Now
      </a>
      <a
        href="#contact"
        className="btn-primary flex min-h-12 flex-1 items-center justify-center text-sm"
      >
        Get a Quote
      </a>
    </div>
  );
}
