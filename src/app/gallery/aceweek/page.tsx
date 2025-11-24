import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { AceWeekImages } from "@/data/Galleries/AceWeek";

const ACEWeek = () => {
  return (
    <div className="w-screen p-7 md:p-40 md:text-center">
      <GalleryHeader
        title="Ace Week"
        text="Join us for ACE Week, where members have the chance to get picked up as a little or pick up as a big through our VSA mentorship program! ACE Week is all about building connections, gaining guidance, and becoming part of a supportive family system within VSA. Through a series of fun and meaningful events, you’ll meet new people, form lasting friendships, and find your place in our vibrant community. Whether you're looking for mentorship, friendship, or just a good time, ACE Week is the perfect way to get involved!"
      />
      <GalleryGrid images={AceWeekImages} />
    </div>
  );
};

export default ACEWeek;
