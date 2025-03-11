import { LuLayoutDashboard } from "react-icons/lu";
import { PiSealWarning } from "react-icons/pi";
import { PiFilmReel } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";

export const navLink = [
  { text: "Dashboard", path: "/", icon: LuLayoutDashboard },
  { text: "About", path: "/about", icon: PiSealWarning },
  { text: "Film", path: "/film", icon: PiFilmReel },
  { text: "Banner", path: "/banner", icon: IoImageOutline },
  {
    text: "Location",
    icon: GrMapLocation,
    submenus: [
      { text: "Country", path: "/country" },
      { text: "Province", path: "/province" },
      { text: "City", path: "/city" },
      { text: "Office", path: "/office" },
    ],
  },
];
