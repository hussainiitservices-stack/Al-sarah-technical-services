type IconProps = { className?: string };

function Svg({
  children,
  className = "h-4 w-4",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const VillaIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-5h4v5" />
  </Svg>
);

export const BuildingIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M6 21V4h12v17M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2M3 21h18" />
  </Svg>
);

export const OfficeIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21V7l9-4 9 4v14M3 21h18M8 11h2m4 0h2M8 15h2m4 0h2" />
  </Svg>
);

export const ShopIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M4 9l1-5h14l1 5M4 9h16M4 9v11h16V9M9 20v-6h6v6" />
  </Svg>
);

export const HotelIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21V5h13v16M16 21V9h5v12M3 21h18M7 9h2m2 0h2M7 13h2m2 0h2" />
  </Svg>
);

export const WarehouseIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21V8l9-4 9 4v13M3 21h18M7 21v-7h10v7" />
  </Svg>
);

export const SchoolIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M12 3L2 8l10 5 10-5-10-5zM6 10v6c0 1 3 3 6 3s6-2 6-3v-6" />
  </Svg>
);

export const ClinicIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M4 21V5h16v16M4 21h16M12 9v6M9 12h6" />
  </Svg>
);

export const RestaurantIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M5 3v8a2 2 0 002 2v8M7 3v6M9 3v6M16 3c-1.5 0-3 2-3 5s1.5 4 3 4v9" />
  </Svg>
);

export const FactoryIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21V11l5 3V11l5 3V8l8 5v8H3z" />
  </Svg>
);

export const GovernmentIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M3 21h18M4 21V10m16 11V10M3 10l9-6 9 6M8 21v-7m4 7v-7m4 7v-7" />
  </Svg>
);

export const KeyIcon = (p: IconProps) => (
  <Svg className={p.className}>
    <path d="M15 7a4 4 0 11-5 4l-6 6v3h3l1-1v-2h2v-2h2l1.5-1.5A4 4 0 0015 7z" />
  </Svg>
);
