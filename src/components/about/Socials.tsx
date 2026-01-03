"use client";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import { Variants } from "motion/react";

const popAnimation: Variants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      type: "spring",
      bounce: 0.7,
    },
  },
};

const icons = [
  {
    icon: (
      <FaInstagram className="text-vsa-pink-200 mb-10 size-20 md:size-35" />
    ),
    link: "https://www.instagram.com/ucrvsa",
  },
  {
    icon: <FaDiscord className="text-vsa-pink-200 mb-10 size-20 md:size-35" />,
    link: "https://discord.com/invite/9kxFtEUtZE",
  },
  {
    icon: <FaTiktok className="text-vsa-pink-200 mb-10 size-20 md:size-35" />,
    link: "https://www.tiktok.com/@ucrvsa",
  },
];

const Socials = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="flex w-full flex-col items-center justify-center p-10 md:w-11/12"
    >
      <p className="text-vsa-pink-300 text-center text-3xl font-bold">
        Check Our Socials Out!
      </p>
      <p className="font-vsa-alt pt-5 text-center md:w-3/5">
        Kick off the school year with the Vietnamese Student Association at our
        annual VSA Social during Week 0! Whether you're a returning student or
        brand new to campus, this is the perfect chance to meet new people, make
        friends, and get to know the VSA community. We'll have fun activities,
        ice breakers, and plenty of good vibes to help you ease into college
        life. You'll also get to meet the VSA staff and learn more about how to
        get involved throughout the year.
      </p>
      <div className="mt-5 flex flex-row gap-5">
        {icons.map(({ link, icon }, index) => (
          <motion.div
            variants={popAnimation}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <Link href={link} target="_blank">
              {icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Socials;
