"use client";

import { motion } from "motion/react";
import Image from "next/image";
import VSAlogo from "@/public/VSA_logo.svg";

const fadeFromRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.3 } },
};

const FindUs = () => {
  return (
    // <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-20">
    //     <div className="text-5xl">
    //         Example Text
    //     </div>

    //   <div className="mt-6 flex w-full items-center justify-center">
    //         <Image
    //         src={VSAlogo}
    //         alt="First image of VSA Logo"
    //         className="aspect-square w-1/5 border-2 object-contain"
    //         />
    //     </div>
    // </div>

    <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-20">
      <motion.div
        className="text-5xl hover:scale-120"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5 }}
      >
        Example Text
      </motion.div>

      <motion.div
        className="mt-6 flex w-full items-center justify-center"
        variants={fadeFromRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <Image
          src={VSAlogo}
          alt="First image of VSA Logo"
          className="aspect-square w-1/5 border-4 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default FindUs;
