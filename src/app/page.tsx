"use client";
import JoinUS from "@/components/home/JoinUs";
import FindUs from "@/components/home/FindUs";
import Landing from "@/components/home/Landing";
import UpcomingEvents from "@/components/home/UpcomingEvents";
const Home = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center">
      <Landing />
      <UpcomingEvents
        date="month, day"
        time="12:34 PM"
        loc="@location"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        color="vsa-pink-300"
      />
      <JoinUS />
      <FindUs />
    </div>
  );
};

export default Home;
