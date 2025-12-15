"use client";
import { motion } from "motion/react";

import { JSX } from "react";
interface BoardProps {
  title: string;
  text: string;
  children: JSX.Element | JSX.Element[];
}

const StaffBoard = ({ title, text, children }: BoardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={` ${text} mb-14 w-3/4 max-w-2xl text-center text-2xl`}
    >
      <p className="p-5">{title}</p>
      <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
        {children}
      </div>
    </motion.div>
  );
};
export default StaffBoard;
