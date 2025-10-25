import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

interface Footer {
  link: string;
  icon: React.ReactNode;
}

export const footers: Footer[] = [
  {
    icon: <SiInstagram size={50} />,
    link: "https://www.instagram.com/ucrvsa/",
  },
  {
    icon: <SiFacebook size={50} />,
    link: "https://www.facebook.com/groups/ucrvsa/",
  },
];
