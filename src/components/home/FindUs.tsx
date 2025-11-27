"use client";
import Image from "next/image";
import VSAlogo from "@/public/VSA_logo.svg";
import { motion } from "motion/react";

const FindUs = () => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-20">
      <p className="text-vsa-brown font-vsa-main w-7/12 text-left text-5xl font-bold">
        Find Us!
      </p>
      <p className="text-vsa-brown font-vsa-alt w-7/12 pt-4 text-left text-2xl">
        Come meet us at tabling by the Bell Tower every Wednesday
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="mt-6 flex w-full items-center justify-center"
      >
        <Image
          src={VSAlogo}
          alt="First image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-1/5 border-2 object-contain"
        />
        <Image
          src={VSAlogo}
          alt="Second image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-1/5 border-2 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default FindUs;
