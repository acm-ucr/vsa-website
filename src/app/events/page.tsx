"use client";
import { motion as Motion } from "motion/react";
import Calendar from "@/components/events/CalendarEvents";
import GalleryButton from "@/components/events/GalleryButton";
import EventsBoard from "@/components/events/EventBoard";
import Card from "@/components/events/Card";
import { UpcomingEvents } from "@/data/Events/UpcomingEventsInfo";
import { PastEvents } from "@/data/Events/PastEventsInfo";

const Events = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-center">
      <Motion.div
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
        <EventsBoard title="Upcoming Events" text="text-vsa-green-300">
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
        </EventsBoard>
      </Motion.div>
      <GalleryButton />
      <Calendar />
      <EventsBoard title="Past Events" text="text-vsa-green-300">
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
      </EventsBoard>
    </div>
  );
};

export default Events;
