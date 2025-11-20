"use client";

import Image, { StaticImageData } from "next/image";

interface GalleryGridProp {
  images: StaticImageData[];
}

const GridCard = ({ images }: GalleryGridProp) => {
  return (
    <div className="flex flex-wrap place-content-center gap-3 pt-8">
      {images.map((image, index) => (
        <Image
          src={image}
          alt={"General Meetings Image" + (index + 1)}
          key={index}
          className="aspect-[3/2] w-47/100 object-cover"
        />
      ))}
    </div>
  );
};

export default GridCard;
