"use client";
import Link from "next/link";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import { HomeUpcomingEventsInfo } from "@/data/HomeUpcomingEvents/UpcomingEventsData";

import { motion } from "motion/react";
const fadeInAnimation = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const UpcomingEventsSection = () => {
  return (
    <div>
      <motion.div
        className="text-vsa-green-300 flex items-center justify-center p-10 text-4xl font-bold"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        Upcoming Events
      </motion.div>

      <motion.div
        className="text-vsa-brown flex items-center justify-center p-5 text-center text-lg md:px-20"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="whileInView"
      ></motion.div>

      <motion.div
        className="flex flex-col items-center justify-center gap-5 p-5 md:flex-row"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        {HomeUpcomingEventsInfo.map(
          ({ date, time, loc, text, color }, index) => (
            <UpcomingEvents
              key={index}
              date={date}
              time={time}
              loc={loc}
              text={text}
              color={color}
            />
          ),
        )}
      </motion.div>

      <motion.div
        className="flex flex-row justify-center gap-10 pt-10"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <motion.div
          className="bg-vsa-pink-100 hover:bg-vsa-pink-200 text-vsa-brown flex w-1/3 cursor-pointer items-center justify-center rounded-2xl border-2 border-black p-4 text-2xl shadow-xl transition-colors duration-300 md:w-1/6"
          variants={fadeInAnimation}
        >
          <Link href="#">Shuttling</Link>
        </motion.div>

        <motion.div
          className="bg-vsa-green-200 hover:bg-vsa-green-300 text-vsa-brown flex w-1/3 cursor-pointer items-center justify-center rounded-2xl border-2 border-black p-4 text-2xl shadow-xl transition-colors duration-300 md:w-1/6"
          variants={fadeInAnimation}
        >
          <Link href="#">RSVP</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UpcomingEventsSection;
