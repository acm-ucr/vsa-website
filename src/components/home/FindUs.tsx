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
    <motion.section
      className="bg-vsa-yellow-100 flex flex-col items-center justify-center px-6 py-12 md:px-20 md:py-20"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="whileInView"
    >
      {/* Inner content container */}
      <div className="w-full max-w-md md:max-w-4xl">
        {/*Heading */}
        <p className="text-vsa-brown font-vsa-main w-7/12 text-left text-3xl font-bold md:text-4xl">
          Find Us!
        </p>
        {/* SubHeading */}
        <p className="text-vsa-brown font-vsa-alt mt-2 w-auto pt-4 text-base md:text-lg">
          Come meet us at tabling by the Bell Tower every Wednesday
        </p>
        {/*Images row */}
        <div className="relative mt-8 flex flex-col items-center justify-center md:flex-row md:items-start">
          {/*Left image */}
          <div className="w-full md:w-1/2">
            <Image
              src={VSAlogo}
              alt="First image of VSA Logo"
              className="border-vsa-green-400 ml-33 aspect-square w-3/5 border-2 object-contain shadow-md md:mt-0 md:ml-0 md:w-full"
            />
          </div>
          {/*Right image */}
          <div className="w-full md:-ml-px md:w-1/2">
            <Image
              src={VSAlogo}
              alt="Second image of VSA Logo"
              className="border-vsa-green-400 mt-10 aspect-square h-1/5 w-3/5 border-2 object-contain shadow-md md:mt-0 md:ml-0 md:w-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FindUs;
