"use client";
import Image from "next/image";
import VSAlogo from "@/public/VSA_logo.svg";
import { motion } from "motion/react";
const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1.25 } },
};
const FindUs = () => {
  return (
    <motion.div
      className="mb-5 flex w-10/12 flex-col items-center justify-center"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="whileInView"
    >
      <p className="text-vsa-brown font-vsa-main w-11/12 text-left text-5xl font-bold">
        Find Us!
      </p>
      <p className="text-vsa-brown font-vsa-alt w-11/12 pt-4 text-left text-2xl">
        Come meet us at tabling by the Bell Tower every Wednesday
      </p>
      <div className="mt-6 flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0">
        <Image
          src={VSAlogo}
          alt="First image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-full border-2 object-contain md:w-1/5"
        />
        <Image
          src={VSAlogo}
          alt="Second image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-full border-2 object-contain md:w-1/5"
        />
      </div>
    </motion.div>
  );
};

export default FindUs;
