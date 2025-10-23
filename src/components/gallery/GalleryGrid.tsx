"use client";

import Image, { StaticImageData } from "next/image";

interface GalleryGridProp {
  images: StaticImageData[];
}

const GridCard = ({ images }: GalleryGridProp) => {
  return (
    <div className="grid grid-cols-2 gap-3 p-48">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-[3/2]">
          <Image
            src={image}
            alt={"General Meetings Image" + (index + 1)}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GridCard;
