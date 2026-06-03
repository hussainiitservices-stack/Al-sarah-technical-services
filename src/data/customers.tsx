import type { MarqueeItem } from "@/components/Marquee";
import {
  ALECLogo,
  AlNaboodahLogo,
  ArabtecLogo,
  DamacLogo,
  DutcoLogo,
  EmaarLogo,
  GulfConstructLogo,
  KhansahebLogo,
  LeadersFortLogo,
  PFCGroupLogo,
  SkylineLogo,
  TristarLogo,
} from "@/components/DemoCustomerLogos";

/** Demo customer logos — replace with real assets when available. */
export const customers: MarqueeItem[] = [
  {
    label: "Leaders Fort Contracting LLC",
    logo: <LeadersFortLogo />,
  },
  {
    label: "PFC Group",
    logo: <PFCGroupLogo />,
  },
  {
    label: "Emaar Development",
    logo: <EmaarLogo />,
  },
  {
    label: "Damac Properties",
    logo: <DamacLogo />,
  },
  {
    label: "ALEC Engineering",
    logo: <ALECLogo />,
  },
  {
    label: "Arabtec Construction",
    logo: <ArabtecLogo />,
  },
  {
    label: "Khansaheb Civil Engineering",
    logo: <KhansahebLogo />,
  },
  {
    label: "Al Naboodah Group",
    logo: <AlNaboodahLogo />,
  },
  {
    label: "Tristar Engineering",
    logo: <TristarLogo />,
  },
  {
    label: "Dutco Group",
    logo: <DutcoLogo />,
  },
  {
    label: "Gulf Construct",
    logo: <GulfConstructLogo />,
  },
  {
    label: "Skyline Developers",
    logo: <SkylineLogo />,
  },
];
