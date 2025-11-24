import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { IoLogoVenmo } from "react-icons/io5";

interface Footer {
  link: string;
  icon: React.ReactNode;
}

export const footers: Footer[] = [
  {
    icon: <CgMail size={50} />,
    link: "mailto:vsaatucr@gmail.com",
  },
  {
    icon: <IoLogoVenmo size={50} />,
    link: "https://venmo.com/u/UCRVSA",
  },
  {
    icon: <SiDiscord size={50} />,
    link: "https://discord.com/invite/9kxFtEUtZE",
  },
  {
    icon: <SiInstagram size={50} />,
    link: "https://www.instagram.com/ucrvsa/",
  },
];
