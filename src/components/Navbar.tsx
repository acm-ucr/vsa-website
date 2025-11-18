"use client";
import { navbarLinks } from "../data/NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import VSAlogo from "../../public/VSA_logo.svg";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

const Navigation = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-vsa-green-400 font-serif">
      <div className="relative flex w-full justify-between px-8 py-4 text-white">
        <motion.div
          className="p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Link href="/" className="ml-0 flex items-center gap-4 lg:ml-20">
            <Image
              src={VSAlogo}
              alt="VSAlogo"
              className="w-20 sm:w-24 md:w-28"
            />

            <div className="text-2xl text-nowrap sm:text-3xl md:text-4xl">
              VSA UCR
            </div>
          </Link>
        </motion.div>

        <button
          id="hamburger"
          onClick={() => setOpen(!open)}
          className="text-4xl focus:outline-none xl:hidden"
        >
          ☰
        </button>

        <div className="mr-20 hidden items-center gap-14 text-3xl xl:flex">
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

        {/*Mobile version*/}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="bg-vsa-green-500 absolute top-full left-0 z-50 flex w-full flex-col gap-3 py-1 text-2xl text-white xl:hidden"
          >
            <div className="bg-vsa-green-400 w-screen font-serif">
              {navbarLinks.map(({ link, name }, index) => (
                <Link
                  key={index}
                  href={link}
                  onClick={() => setOpen(false)}
                  className={`block w-full px-4 py-2 text-center ${
                    pathName === link
                      ? "bg-vsa-green-700"
                      : "hover:bg-vsa-green-600"
                  }`}
                >
                  {name}
                </Link>
              ))}
              <div className="bg-vsa-green-300 py-1"></div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="bg-vsa-green-300 h-5" />
    </nav>
  );
};

export default Navigation;
