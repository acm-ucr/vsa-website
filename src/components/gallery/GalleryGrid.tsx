"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface GalleryGridProp {
  images: StaticImageData[];
}

const GridCard = ({ images }: GalleryGridProp) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap place-content-center gap-3 pt-8"
    >
      {images.map((image, index) => (
        <Image
          src={image}
          alt={"General Meetings Image" + (index + 1)}
          key={index}
          className="aspect-[3/2] w-47/100 object-cover"
        />
      ))}
    </motion.div>
  );
};

export default GridCard;
