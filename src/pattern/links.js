import { LuLayoutDashboard } from "react-icons/lu";
import { PiSealWarning } from "react-icons/pi";
import { PiFilmReel } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";

export const navLink = [
  { text: "Dashboard", path: "/", icon: LuLayoutDashboard },
  { text: "Banner", path: "/banner", icon: IoImageOutline },
  { text: "About", path: "/about", icon: PiSealWarning },
  { text: "Film", path: "/film", icon: PiFilmReel },
  { text: "Office", path: "/office", icon: HiOutlineBuildingOffice2 },
  {
    text: "Location",
    icon: GrMapLocation,
    submenus: [
      { text: "Country", path: "/country" },
      { text: "Province", path: "/province" },
      { text: "City", path: "/city" },
    ],
  },
];
