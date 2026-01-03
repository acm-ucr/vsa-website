"use client";
import JoinUS from "@/components/home/JoinUs";
// import FindUs from "@/components/home/FindUs";
import Landing from "@/components/home/Landing";
// import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
const Home = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Landing />
      {/* <UpcomingEventsSection /> */}
      <JoinUS />
      {/* <FindUs /> */}
    </div>
  );
};

export default Home;
