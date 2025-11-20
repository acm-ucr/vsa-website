import Calendar from "@/components/events/CalendarEvents";
import GalleryButton from "@/components/events/GalleryButton";
import EventsBoard from "@/components/events/EventBoard";
import Card from "@/components/events/Card";
import { UpcomingEvents } from "@/data/Events/UpcomingEventsInfo";
import { PastEvents } from "@/data/Events/PastEventsInfo";

const Events = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-center">
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
      <GalleryButton></GalleryButton>
      <Calendar />
    </div>
  );
};

export default Events;
