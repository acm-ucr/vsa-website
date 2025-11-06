import Image from "next/image";
import Header from "@/components/gallery/GalleryHeader";
import welcomeweekImage1 from "@/public/gallery/welcomeweek/welcomeweek1.webp";
import welcomeweekImage2 from "@/public/gallery/welcomeweek/welcomeweek2.webp";
import welcomeweekImage3 from "@/public/gallery/welcomeweek/welcomeweek3.webp";
import welcomeweekImage4 from "@/public/gallery/welcomeweek/welcomeweek4.webp";
import welcomeweekImage5 from "@/public/gallery/welcomeweek/welcomeweek5.webp";
import bigLotus from "@/public/big_lotus.svg";

const WelcomeWeek = () => {
  return (
    <div className="p-48 text-2xl">
      <Header
        title="Welcome Week"
        text="Join us for VSA Welcome Week, a full week of fun, fundraising, and community as we kick off the school year! Throughout Week 1, we’ll be hosting a variety of events including field day games, fundraiser opportunities, and a picnic. It's a great way to connect with new friends, win prizes, and support our organization. The week wraps up with our first General Meeting, where you’ll get the inside scoop on what’s coming up for the school year!"
      />
      <div className="grid grid-cols-2 gap-3 pt-8">
        <Image
          src={bigLotus}
          alt="Welcome Week"
          className="aspect-[3/2] w-full"
        />
        <Image src={welcomeweekImage1} alt="Welcome Week" />
      </div>
      <div className="grid grid-cols-3 gap-3 pt-8">
        <Image src={welcomeweekImage3} alt="Welcome Week" />
        <Image
          src={welcomeweekImage5}
          alt="Welcome Week"
          className="col-span-2 h-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 pt-8">
        <Image src={welcomeweekImage2} alt="Welcome Week" />
        <Image src={welcomeweekImage4} alt="Welcome Week" />
      </div>
    </div>
  );
};

export default WelcomeWeek;
