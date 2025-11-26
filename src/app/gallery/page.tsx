"use client";
import { motion } from "motion/react";
import Card from "@/components/gallery/Card";
import { galleryEvents } from "@/data/Galleries/mainGalleryInfo";

const Gallery = () => {
  return (
    <div className="m-10 grid place-items-center gap-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.05, 0.95, 1] }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="font-vsa-main text-vsa-green-400 m-5 text-5xl font-bold">
          Events Gallery
        </p>
        <p className="font-vsa-alt">
          A gallery to display all our former major events!
        </p>
      </motion.div>
      {galleryEvents.map(
        ({ title, link, leftimage, leftalt, rightimage, rightalt }, index) => (
          <motion.div
            className="flex w-full justify-center"
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 90,
              damping: 15,
            }}
          >
            <Card
              title={title}
              link={link}
              leftimage={leftimage}
              leftalt={leftalt}
              rightimage={rightimage}
              rightalt={rightalt}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default Gallery;
