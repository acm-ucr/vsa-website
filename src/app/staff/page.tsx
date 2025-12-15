"use client";
import Card from "@/components/board/Card";
import StaffBoard from "@/components/board/StaffBoard";
import { ExecutiveStaff } from "@/data/Staff/ExecutiveStaff";
import { GeneralStaff } from "@/data/Staff/GeneralStaff";
import { motion } from "motion/react";

const Staff = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-vsa-green-400 m-8 text-4xl font-black"
      >
        Meet the Staff
      </motion.div>
      <StaffBoard title="Executive Staff" text="text-vsa-pink-300">
        {ExecutiveStaff.map(({ name, image, position }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            position={position}
            border="border-vsa-pink-300"
            text="text-vsa-pink-300"
          />
        ))}
      </StaffBoard>
      <StaffBoard title="General Staff" text="text-vsa-green-300">
        {GeneralStaff.map(({ name, image, position }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            position={position}
            border="border-vsa-green-400"
            text="text-vsa-green-400"
          />
        ))}
      </StaffBoard>
    </div>
  );
};

export default Staff;
