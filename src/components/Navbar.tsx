"use client";
import { navbarLinks } from "../data/NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import VSAlogo from "../../public/VSA_logo.svg";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-vsa-green-400 font-serif">
      <div className="flex justify-between py-4 text-white">
        <motion.div
          className="p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link href="/" className="ml-20 flex items-center gap-4">
            <Image src={VSAlogo} alt="VSAlogo" className="w-30" />

            <div className="text-4xl text-nowrap">VSA UCR</div>
          </Link>
        </motion.div>
        <div className="mr-20 flex items-center gap-14 text-3xl">
          {navbarLinks.map(({ link, name }, index) => (
            <motion.div
              className="p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              key={index}
            >
              <Link
                href={link}
                className={` ${
                  pathName === link ? "rounded-3xl bg-[#276d48] px-4 py-1" : ""
                }`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-vsa-green-300 h-5" />
    </nav>
  );
};

export default Navigation;
