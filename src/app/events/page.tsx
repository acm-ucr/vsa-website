import UpcomingEvents from "@/components/events/UpcomingEvents";

const Events = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <UpcomingEvents
        date="month, day"
        time="12:34 PM"
        loc="@location"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        color="vsa-pink-300"
      />
    </div>
  );
};

export default Events;
