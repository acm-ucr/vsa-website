import GalleryGrid from "@/components/gallery/GalleryGrid";
import Header from "@/components/gallery/GalleryHeader";
import { images } from "@/data/Galleries/welcomeWeek";

const WelcomeWeek = () => {
  return (
    <div className="p-48 text-2xl">
      <Header
        title="Welcome Week"
        text="Join us for VSA Welcome Week, a full week of fun, fundraising, and community as we kick off the school year! Throughout Week 1, we’ll be hosting a variety of events including field day games, fundraiser opportunities, and a picnic. It's a great way to connect with new friends, win prizes, and support our organization. The week wraps up with our first General Meeting, where you’ll get the inside scoop on what’s coming up for the school year!"
      />
      <GalleryGrid images={images} />
    </div>
  );
};

export default WelcomeWeek;
