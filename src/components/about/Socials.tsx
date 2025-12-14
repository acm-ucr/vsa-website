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

const Socials = () => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-10 md:p-23">
      <h1 className="text-vsa-pink-300 text-3xl font-bold">
        Check Our Socials Out!
      </h1>
      <p className="font-vsa-alt w-5/6 pt-5 text-center md:w-3/5">
        Kick off the school year with the Vietnamese Student Association at our
        annual VSA Social during Week 0! Whether you're a returning student or
        brand new to campus, this is the perfect chance to meet new people, make
        friends, and get to know the VSA community. We'll have fun activities,
        ice breakers, and plenty of good vibes to help you ease into college
        life. You'll also get to meet the VSA staff and learn more about how to
        get involved throughout the year.
      </p>
      <div className="flex flex-row">
        <motion.div
          variants={popAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          <Link href="https://www.google.com/" target="_blank">
            <FaInstagram className="fill-vsa-pink-200 m-7 mb-10 size-20 md:size-35" />
          </Link>
        </motion.div>
        <motion.div
          variants={popAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          <Link href="https://www.google.com/" target="_blank">
            <FaDiscord className="fill-vsa-pink-200 m-7 mb-10 size-20 md:size-35" />
          </Link>
        </motion.div>
        <motion.div
          variants={popAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          <Link href="https://www.google.com/" target="_blank">
            <FaTiktok className="fill-vsa-pink-200 m-7 mb-10 size-20 md:size-35" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
