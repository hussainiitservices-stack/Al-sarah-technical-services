export type MarqueeItem = {
  label: string;
  icon?: React.ReactNode;
  logo?: React.ReactNode;
};

type Speed = "default" | "fast" | "slow" | "logos";

const forwardAnim: Record<Speed, string> = {
  default: "animate-marquee",
  fast: "animate-marquee-fast",
  slow: "animate-marquee-slow",
  logos: "animate-marquee-logos",
};

const reverseAnim: Record<Speed, string> = {
  default: "animate-marquee-reverse",
  fast: "animate-marquee-fast-reverse",
  slow: "animate-marquee-slow-reverse",
  logos: "animate-marquee-logos-reverse",
};

export default function Marquee({
  items,
  reverse = false,
  variant = "dark",
  speed = "default",
  className = "",
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  variant?: "dark" | "light" | "logo";
  speed?: Speed;
  className?: string;
}) {
  const animation = reverse ? reverseAnim[speed] : forwardAnim[speed];

  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={`flex shrink-0 items-center gap-5 pr-5 ${animation} motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
        >
          {items.map((item, i) => (
            <Item key={`${copy}-${i}`} item={item} variant={variant} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Item({
  item,
  variant,
}: {
  item: MarqueeItem;
  variant: "dark" | "light" | "logo";
}) {
  if (variant === "logo" && item.logo) {
    return (
      <figure
        className="group/logo flex h-[5.5rem] w-[11.5rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-line bg-white px-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-navy/25 hover:shadow-lg hover:shadow-navy/10"
        title={item.label}
      >
        <div className="flex w-full items-center justify-center transition-transform duration-500 group-hover/logo:scale-110">
          {item.logo}
        </div>
        <figcaption className="mt-2 max-w-full truncate text-center text-[10px] font-semibold uppercase tracking-wide text-muted">
          {item.label}
        </figcaption>
      </figure>
    );
  }

  const styles =
    variant === "light"
      ? "border-line bg-white text-navy shadow-sm hover:-translate-y-1 hover:border-navy/20 hover:shadow-md"
      : "border-white/10 bg-white/5 text-white/85 backdrop-blur hover:-translate-y-1 hover:border-white/30";

  return (
    <span
      className={`flex shrink-0 items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${styles}`}
    >
      <span
        className={`grid h-7 w-7 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
          variant === "light" ? "bg-surface text-brand" : "bg-white/10 text-white"
        }`}
      >
        {item.icon ?? <span className="h-1.5 w-1.5 rounded-full bg-navy" />}
      </span>
      {item.label}
    </span>
  );
}
