"use client";

import Image, { StaticImageData } from "next/image";

interface GalleryGridProp {
  images: StaticImageData[];
}

const GridCard = ({ images }: GalleryGridProp) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 md:pt-8">
      {images.map((image, index) => (
        <div key={index} className="aspect-[3/2] object-cover">
          <Image src={image} alt={"General Meetings Image" + (index + 1)} />
        </div>
      ))}
    </div>
  );
};

export default GridCard;
