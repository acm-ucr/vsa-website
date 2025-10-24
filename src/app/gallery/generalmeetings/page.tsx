"use client";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { images } from "@/data/Galleries/GeneralMeetingsImages";

const GeneralMeetings = () => {
  return (
    <div className="">
      General Meetings
      <GalleryGrid images={images} />
    </div>
  );
};

export default GeneralMeetings;
