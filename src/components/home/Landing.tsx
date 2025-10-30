import Image from "next/image";
import landingPage from "@/public/landing_lotus.webp";

const Landing = () => {
  return (
    <div className="bg-vsa-yellow-100 relative flex h-full w-full items-center justify-center">
      <Image src={landingPage} alt="Landing Image" className="mt-30" />
      <div className="font-vsa-main absolute mb-10 flex h-full w-full flex-col items-center text-center font-extrabold">
        <div className="text-vsa-green-300 h-1/4 text-[11rem] drop-shadow-2xl">
          VSA
        </div>
        <div className="text-vsa-green-400 text-5xl">
          Vietnamese Student Association
        </div>
      </div>
      <div className="font-vsa-main absolute flex h-2/3 w-3xl items-end text-center text-3xl font-semibold text-white">
        Promoting and connecting UCR students through Vietnamese culture!
      </div>
    </div>
  );
};
export default Landing;
