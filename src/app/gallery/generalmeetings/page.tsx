"use client";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Header from "@/components/gallery/GalleryHeader";
import { images } from "@/data/Galleries/GeneralMeetingsImages";

const GeneralMeetings = () => {
  return (
    <div className="p-7 md:p-48 md:text-2xl">
      <Header
        title="General Meetings"
        text="Stay in the loop and connect with the VSA fam at our General Meetings, held three times each quarter, usually every two weeks! These meetings are the perfect way to get updates on upcoming events, learn how to get more involved, and hang out with other members through fun activities and games. Each meeting wraps up with a fundraiser, so you can support VSA while enjoying great food or treats. Whether you're a returning member or new to the club, General Meetings are a fun and easy way to stay connected all year long!"
      />
      <GalleryGrid images={images} />
    </div>
  );
};

export default GeneralMeetings;
