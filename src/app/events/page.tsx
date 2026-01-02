"use client";
import { motion } from "motion/react";
import Calendar from "@/components/events/CalendarEvents";
import GalleryButton from "@/components/events/GalleryButton";
// import EventsBoard from "@/components/events/EventBoard";
// import Card from "@/components/events/Card";
// import { UpcomingEvents } from "@/data/Events/UpcomingEventsInfo";
// import { PastEvents } from "@/data/Events/PastEventsInfo";

const Events = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.5,
          stiffness: 90,
          damping: 15,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0.8, 1.05, 0.95, 1] }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-vsa-main text-vsa-green-400 mx-5 mt-12 mb-5 text-5xl font-bold">
            Events Calendar
          </p>
        </motion.div>
        {/* <EventsBoard title="Upcoming Events" text="text-vsa-green-300">
          {UpcomingEvents.map(
            ({ title, location, description, month, day, time }, index) => (
              <Card
                key={index}
                title={title}
                location={location}
                description={description}
                month={month}
                day={day}
                time={time}
              />
            ),
          )}
        </EventsBoard> */}
      </motion.div>

      <Calendar />
      {/* <EventsBoard title="Past Events" text="text-vsa-green-300">
        {PastEvents.map(
          ({ title, location, description, month, day, time }, index) => (
            <Card
              key={index}
              title={title}
              location={location}
              description={description}
              month={month}
              day={day}
              time={time}
            />
          ),
        )}
      </EventsBoard> */}
      <GalleryButton />
    </div>
  );
};

export default Events;
