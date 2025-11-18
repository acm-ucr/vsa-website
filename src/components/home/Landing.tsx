import Image from "next/image";
import landingPage from "@/public/landing_lotus.webp";

const Landing = () => {
  return (
    <div className="bg-vsa-yellow-100 relative flex h-full w-full items-center justify-center overflow-hidden">
      <Image src={landingPage} alt="Landing Image" className="mt-20" />

      <div className="font-vsa-main absolute mb-10 flex h-full w-full flex-col items-center py-2 text-center font-extrabold">
        <div className="text-vsa-green-300 h-1/4 text-[4rem] drop-shadow-2xl sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem]">
          VSA
        </div>

        <div className="text-vsa-green-400 text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
          Vietnamese Student Association
        </div>
      </div>
      <div className="font-vsa-main text-1xl sm:text-1xl absolute mt-6 flex h-3/4 w-3/4 items-end justify-center text-center font-semibold text-white sm:mt-0 sm:w-1/2 md:w-6/10 md:text-2xl lg:w-6/10 lg:text-3xl xl:w-3xl xl:text-3xl">
        Promoting and connecting UCR students through Vietnamese culture!
      </div>
    </div>
  );
};
export default Landing;
