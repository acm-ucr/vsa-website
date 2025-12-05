"use client";
import Link from "next/link";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import { HomeUpcomingEventsInfo } from "@/data/HomeUpcomingEvents/UpcomingEventsData";

const UpcomingEventsSection = () => {
  return (
    <div>
      <div className="text-vsa-green-300 flex items-center justify-center p-10 text-4xl font-bold">
        Upcoming Events
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-5 md:flex-row">
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
      </div>
      <div className="flex flex-row justify-center gap-10 pt-10">
        <Link
          className="bg-vsa-pink-100 hover:bg-vsa-pink-200 text-vsa-brown flex w-1/3 items-center justify-center rounded-2xl border-2 border-black p-4 text-2xl shadow-xl transition-colors duration-300 md:w-1/6"
          href="#"
        >
          Shuttling
        </Link>
        <Link
          className="bg-vsa-green-200 hover:bg-vsa-green-300 text-vsa-brown flex w-1/3 items-center justify-center rounded-2xl border-2 border-black p-4 text-2xl shadow-xl transition-colors duration-300 md:w-1/6"
          href="#"
        >
          RSVP
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
