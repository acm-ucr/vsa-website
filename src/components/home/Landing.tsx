"use client";
import Image from "next/image";
import landingPage from "@/public/landing_lotus.webp";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="bg-vsa-yellow-100 relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image src={landingPage} alt="Landing Image" className="mt-20" />
      </motion.div>

      <div className="font-vsa-main absolute mb-10 flex h-full w-full flex-col items-center py-15 text-center font-extrabold">
        <div className="text-vsa-green-300 h-18vw text-6xl drop-shadow-2xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl">
          VSA
        </div>

        <div className="text-vsa-green-400 text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
          Vietnamese Student Association
        </div>
      </div>
      <div className="font-vsa-main text-1xl sm:text-1xl absolute mt-6 flex h-3/4 w-3/4 items-end justify-center text-center font-semibold text-white sm:mt-0 sm:w-1/2 md:w-6/10 md:text-2xl lg:w-6/10 lg:text-3xl xl:w-3xl xl:text-3xl">
        Promoting and connecting UCR students through Vietnamese culture!
      </div>
    </div>
  );
};
export default Landing;
