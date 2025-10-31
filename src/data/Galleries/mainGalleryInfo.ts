import image1 from "@/public/gallery/generalmeetings/genmeetings1.webp";
import image2 from "@/public/gallery/generalmeetings/genmeetings5.webp";
import image3 from "@/public/gallery/aceweek/aceweek8.webp";
import image4 from "@/public/gallery/aceweek/aceweek11.webp";
import image5 from "@/public/gallery/vietculturenight/culturenight9.webp";
import image6 from "@/public/gallery/vietculturenight/culturenight7.webp";
import image7 from "@/public/gallery/welcomeweek/welcomeweek2.webp";
import image8 from "@/public/gallery/welcomeweek/welcomeweek5.webp";
import image9 from "@/public/gallery/social/social6.webp";
import image10 from "@/public/gallery/social/social7.webp";

import VSAIcon from "@/public/VSA_logo.svg";

export const galleryEvents = [
  {
    title: "General Meetings",
    link: "/gallery/generalmeetings",
    leftimage: image1,
    rightimage: image2,
    leftalt: "tabling",
    rightalt: "club photo",
  },

  {
    title: "ACE Week",
    link: "/gallery/aceweek",
    leftimage: image3,
    rightimage: image4,
    leftalt: "group photo",
    rightalt: "group photo",
  },
  {
    title: "Viet Culture Week",
    link: "/gallery/vietcultureweek",
    leftimage: image5,
    rightimage: image6,
    leftalt: "stage photo boys",
    rightalt: "stage photo girls",
  },
  {
    title: "Viet Idol",
    link: "/gallery/vietidol",
    leftimage: VSAIcon,
    rightimage: VSAIcon,
    leftalt: "placeholder",
    rightalt: "placeholder",
  },
  {
    title: "Welcome Week",
    link: "/gallery/welcomeweek",
    leftimage: image7,
    rightimage: image8,
    leftalt: "welcome photo",
    rightalt: "welcome group photo",
  },
  {
    title: "Social",
    link: "/gallery/social",
    leftimage: image9,
    rightimage: image10,
    leftalt: "social activity",
    rightalt: "family photo",
  },
];
