export type MarqueeItem = {
  label: string;
  icon?: React.ReactNode;
};

export default function Marquee({
  items,
  reverse = false,
  variant = "dark",
  className = "",
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((item, i) => (
          <Item key={`a-${i}`} item={item} variant={variant} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((item, i) => (
          <Item key={`b-${i}`} item={item} variant={variant} />
        ))}
      </div>
    </div>
  );
}

function Item({
  item,
  variant,
}: {
  item: MarqueeItem;
  variant: "dark" | "light";
}) {
  const styles =
    variant === "light"
      ? "border-line bg-white text-navy shadow-sm hover:border-accent"
      : "border-white/10 bg-white/5 text-white/85 backdrop-blur hover:border-accent";
  return (
    <span
      className={`flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${styles}`}
    >
      <span
        className={`grid h-7 w-7 place-items-center rounded-full ${
          variant === "light" ? "bg-surface text-accent-dark" : "bg-white/10 text-accent"
        }`}
      >
        {item.icon ?? <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
      </span>
      {item.label}
    </span>
  );
}
