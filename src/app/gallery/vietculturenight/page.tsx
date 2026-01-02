import GalleryGrid from "@/components/gallery/GalleryGrid";
import Header from "@/components/gallery/GalleryHeader";
import { images } from "@/data/Galleries/VietCultureNightImages";

const VietCultureNight = () => {
  return (
    <div className="p-7 text-lg md:p-40 md:text-2xl">
      <Header
        title="Viet Culture Night"
        text="Vietnamese Culture Night (VCN), a celebration of culture, community, and creativity. This annual showcase features a captivating skit, tradition and modern dances, as well as a stunning fashion show highlighting Vietnamese attire. Whether you want to be part of the show or cheer from the audience, VCN is a chance for all members to come together and share the richness of Vietnamese culture."
      />
      <GalleryGrid images={images} />
    </div>
  );
};

export default VietCultureNight;
