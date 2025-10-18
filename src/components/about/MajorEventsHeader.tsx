import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

const MajorEventsHeader = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-8 text-center">
      <div className="text-vsa-green-300 font-vsa-main text-4xl font-semibold sm:text-5xl md:text-6xl">
        Our Major Events
      </div>

      <div className="text-vsa-brown font-vsa-alt w-9/10 text-xl sm:w-4/5 md:text-3xl">
        Here are some events to expect every year!
      </div>

      <Image
        src={headerImage}
        alt="About VSA Decoration"
        className="flex w-5/12 object-contain"
      />
    </div>
  );
};

export default MajorEventsHeader;
