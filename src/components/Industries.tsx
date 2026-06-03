import Reveal from "./Reveal";
import Marquee, { type MarqueeItem } from "./Marquee";
import {
  VillaIcon,
  BuildingIcon,
  OfficeIcon,
  ShopIcon,
  HotelIcon,
  WarehouseIcon,
  SchoolIcon,
  ClinicIcon,
  RestaurantIcon,
  FactoryIcon,
  GovernmentIcon,
  KeyIcon,
} from "./icons";

const rowOne: MarqueeItem[] = [
  { label: "Residential Villas", icon: <VillaIcon /> },
  { label: "Apartment Buildings", icon: <BuildingIcon /> },
  { label: "Commercial Offices", icon: <OfficeIcon /> },
  { label: "Retail & Shops", icon: <ShopIcon /> },
  { label: "Hotels & Hospitality", icon: <HotelIcon /> },
  { label: "Warehouses", icon: <WarehouseIcon /> },
];

const rowTwo: MarqueeItem[] = [
  { label: "Schools & Institutions", icon: <SchoolIcon /> },
  { label: "Clinics & Healthcare", icon: <ClinicIcon /> },
  { label: "Restaurants & Cafés", icon: <RestaurantIcon /> },
  { label: "Industrial Facilities", icon: <FactoryIcon /> },
  { label: "Government Premises", icon: <GovernmentIcon /> },
  { label: "Property Management", icon: <KeyIcon /> },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
            Expertise
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Sectors We Serve
          </h2>
          <p className="mt-4 text-muted">
            Trusted by a wide range of properties and facilities across the
            Emirates.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        <Marquee items={rowOne} variant="light" />
        <Marquee items={rowTwo} variant="light" reverse />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}
