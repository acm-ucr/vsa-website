import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

interface MajorEventsHeaderProps {
  title: string;
  subtitle: string;
}

const MajorEventsHeader = ({ title, subtitle }: MajorEventsHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-8 text-center">
      <h1 className="text-vsa-green-300 font-vsa-main text-4xl font-semibold sm:text-5xl md:text-6xl">
        {title}
      </h1>

      <h2 className="text-vsa-brown font-vsa-alt max-w-[90%] text-xl text-ellipsis whitespace-nowrap sm:max-w-[80%] md:text-3xl">
        {subtitle}
      </h2>

      <Image
        src={headerImage}
        alt="About VSA Decoration"
        className="mx-auto h-auto w-5/12 object-contain"
        priority
      />
    </div>
  );
};

export default MajorEventsHeader;
