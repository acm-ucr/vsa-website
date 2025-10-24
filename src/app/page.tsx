"use client";
import JoinUS from "@/components/home/JoinUs";
import FindUs from "@/components/home/FindUs";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center p-12">
        <JoinUS />
        <FindUs />
      </div>

    </div>
  );
};

export default Home;
