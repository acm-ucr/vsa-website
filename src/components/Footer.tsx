"use client";
import { footers } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";
import VSALogo from "@/public/VSA_logo.svg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-vsa-green-300 pt-5">
      <div className="bg-vsa-green-400 flex justify-between p-1 md:p-6">
        <motion.div
          className="ml-2 p-5"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link href="/" className="flex items-center gap-4 md:ml-17">
            <Image
              src={VSALogo}
              className="w-15 md:w-32"
              alt="Logo for UCR VSA"
            />
          </Link>
        </motion.div>

        <div className="flex p-3">
          {footers.map(({ link, icon }, index) => (
            <motion.div
              className="size-9 p-0 md:size-28 md:p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              key={index}
            >
              <Link
                href={link}
                target="_blank"
                className="text-vsa-green-300 m-1 flex md:m-6 md:text-gray-200"
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
