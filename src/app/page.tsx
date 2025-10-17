"use client";
import Example from "@/components/Example";
import FindUs from "@/components/home/FindUs";
import VSAlogo from "@/public/VSA_logo.svg";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center p-12"></div>
      <FindUs />
    </div>
  );
};

export default Home;
