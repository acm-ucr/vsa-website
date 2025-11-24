"use client";
import { useState } from "react";
import { navbarLinks } from "../data/NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import VSAlogo from "../../public/VSA_logo.svg";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
const Navigation = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-vsa-green-400 w-full font-serif">
      <div className="flex justify-between py-4 text-white">
        <motion.div
          className="flex p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link href="/" className="ml-5 flex items-center gap-4 md:ml-10">
            <Image src={VSAlogo} alt="VSAlogo" className="w-15 md:w-30" />
            <div className="mt-2 text-xl text-nowrap md:text-4xl">VSA UCR</div>
          </Link>
        </motion.div>
        <motion.div
          className="flex p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Menu
            className="mt-2 mr-6 flex h-10 w-15 cursor-pointer text-white md:h-15 md:w-15 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </motion.div>
        <div className="mr-12 hidden items-center gap-14 text-3xl xl:flex">
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
                  pathName === link
                    ? "bg-vsa-green-300 rounded-3xl px-4 py-1"
                    : ""
                }`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="bg-vsa-green-400 border-b-vsa-green-300 border-t-vsa-green-300 font-vsa-main flex flex-col items-center justify-center gap-4 border-t-1 border-b-12 p-4 text-xl text-white md:p-6 md:text-3xl xl:hidden">
          {navbarLinks.map(({ link, name }, index) => (
            <div key={index} className="">
              <Link
                href={link}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathName === link ? "underline" : "no-underline"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="xl:bg-vsa-green-300 border-b-2 xl:h-5" />
    </nav>
  );
};

export default Navigation;
