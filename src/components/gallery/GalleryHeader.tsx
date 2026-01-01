"use client";
import { motion } from "motion/react";

interface props {
  text: string;
  title: string;
}

const Header = ({ text, title }: props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center md:w-auto"
    >
      <p className="text-vsa-green-400 font-vsa-main text-4xl font-extrabold md:text-5xl">
        {title}
      </p>
      <p className="font-vsa-alt m-5 text-black">{text}</p>
    </motion.div>
  );
};

export default Header;
