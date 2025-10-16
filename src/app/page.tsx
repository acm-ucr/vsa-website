"use client"
import Example from "@/components/Example";
import FindUs from "@/components/home/FindUs";
import VSAlogo from "@/public/VSA_logo.svg";

const Home = () => {
  return (
    <div>
      <FindUs title="Find Us!" info="Come meet us at tabling by the Bell Tower every Wednesday" image1={VSAlogo} image2={VSAlogo} />
    </div>
  );
};

export default Home;



// <Example text1="adjust" text2="text2" text3="these" image={VSAlogo} />
// className="flex h-screen w-screen items-center justify-center"