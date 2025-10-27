"use client";
import FindUs from "@/components/home/FindUs";
import Landing from "@/components/home/Landing";
const Home = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center">
      <Landing />
      <FindUs />
    </div>
  );
};

export default Home;
