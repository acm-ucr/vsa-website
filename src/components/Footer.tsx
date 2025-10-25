"use client";
import { footers } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";
import VSALogo from "@/public/VSA_logo.svg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-vsa-green-300 pt-5">
      <div className="bg-vsa-green-400 flex justify-between p-6">
        <motion.div
          className="ml-2 p-5"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link href="/" className="ml-17 flex items-center gap-4">
            <Image src={VSALogo} className="w-32" alt="UCR VSA Logo" />
          </Link>
        </motion.div>

        <div className="right-0 flex">
          {footers.map(({ link, icon }, index) => (
            <motion.div
              className="p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              key={index}
            >
              <Link
                href={link}
                target="_blank"
                className="m-6 flex h-full w-full text-gray-200"
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
