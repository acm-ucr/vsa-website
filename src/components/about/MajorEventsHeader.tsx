import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

const MajorEventsHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center md:gap-8 md:px-4">
      <div className="text-vsa-green-300 font-vsa-main text-3xl font-semibold sm:text-3xl md:text-4xl">
        Our Major Events
      </div>

      <div className="text-vsa-brown font-vsa-alt w-9/10 text-sm sm:w-4/5 md:text-xl">
        Here are some events to expect every year!
      </div>

      <Image
        src={headerImage}
        alt="About VSA Decoration"
        className="flex w-1/3 object-contain md:w-1/5"
      />
    </div>
  );
};

export default MajorEventsHeader;
