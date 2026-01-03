import genmeetingsImage1 from "@/public/gallery/generalmeetings/genmeetings1.webp";
import genmeetingsImage2 from "@/public/gallery/generalmeetings/genmeetings5.webp";
import aceweekImage1 from "@/public/gallery/aceweek/aceweek8.webp";
import aceweekImage2 from "@/public/gallery/aceweek/aceweek11.webp";
import culturenightImage1 from "@/public/gallery/vietculturenight/culturenight9.webp";
import culturenightImage2 from "@/public/gallery/vietculturenight/culturenight7.webp";
import welcomeweekImage1 from "@/public/gallery/welcomeweek/welcomeweek2.webp";
import welcomeweekImage2 from "@/public/gallery/welcomeweek/welcomeweek5.webp";

export const galleryEvents = [
  {
    title: "General Meetings",
    link: "/gallery/generalmeetings",
    leftimage: genmeetingsImage1,
    rightimage: genmeetingsImage2,
    leftalt: "tabling",
    rightalt: "club photo",
  },

  {
    title: "ACE Week",
    link: "/gallery/aceweek",
    leftimage: aceweekImage1,
    rightimage: aceweekImage2,
    leftalt: "group photo",
    rightalt: "group photo",
  },
  {
    title: "Viet Culture Night",
    link: "/gallery/vietculturenight",
    leftimage: culturenightImage1,
    rightimage: culturenightImage2,
    leftalt: "stage photo boys",
    rightalt: "stage photo girls",
  },
  {
    title: "Welcome Week",
    link: "/gallery/welcomeweek",
    leftimage: welcomeweekImage1,
    rightimage: welcomeweekImage2,
    leftalt: "welcome photo",
    rightalt: "welcome group photo",
  },
];
