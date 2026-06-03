import Reveal from "./Reveal";
import Marquee, { type MarqueeItem } from "./Marquee";
import {
  BuildingIcon,
  OfficeIcon,
  HotelIcon,
  GovernmentIcon,
  WarehouseIcon,
  VillaIcon,
} from "./icons";

const clients: MarqueeItem[] = [
  { label: "Skyline Developers", icon: <OfficeIcon /> },
  { label: "Marina Residences", icon: <BuildingIcon /> },
  { label: "Royal Properties", icon: <GovernmentIcon /> },
  { label: "Oasis Hospitality", icon: <HotelIcon /> },
  { label: "Gulf Logistics", icon: <WarehouseIcon /> },
  { label: "Palm Estates", icon: <VillaIcon /> },
  { label: "Crescent Holdings", icon: <BuildingIcon /> },
  { label: "Horizon Facilities", icon: <OfficeIcon /> },
];

export default function Clients() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Trusted By
          </span>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            Property Owners & Developers Who Rely on Us
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <Marquee items={clients} variant="light" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
}
