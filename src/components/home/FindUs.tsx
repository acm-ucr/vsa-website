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
      className="bg-vsa-yellow-100 px-6 py-12 md:px-20 md:py-20 flex flex-col items-center justify-center"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="whileInView"
    >
      {/* Inner content container */}
      <div className="w-full max-w-md md:max-w-4xl">
        {/*Heading */}
          <p className="text-vsa-brown font-vsa-main w-7/12 text-left text-3xl md:text-4xl font-bold">
            Find Us!
          </p>
        {/* SubHeading */}
          <p className="text-vsa-brown font-vsa-alt w-auto mt-2 pt-4 text-base md:text-lg">
            Come meet us at tabling by the Bell Tower every Wednesday
          </p>
        {/*Images row */}
        <div className="mt-8 relative flex flex-col md:flex-row items-center justify-center md:items-start">
          {/*Left image */}
          <div className = "w-full md:w-1/2">
            <Image
              src={VSAlogo}
              alt="First image of VSA Logo"
              className="border-vsa-green-400 aspect-square w-3/5 md:w-full shadow-md object-contain border-2 ml-33 md:mt-0 md:ml-0"
            />
          </div>
          {/*Right image */}
          <div className = "w-full md:w-1/2 md:-ml-px">
            <Image
            src={VSAlogo}
            alt="Second image of VSA Logo"
            className="border-vsa-green-400 aspect-square w-3/5 h-1/5 md:w-full border-2 object-contain shadow-md mt-10 md:mt-0 md:ml-0"
            />
          </div>
          </div>
      </div>
    </motion.section>
  );
};

export default FindUs;
