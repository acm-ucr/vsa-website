import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

interface MajorEventsHeaderProps {
  title: string;
  subtitle: string;
}

const MajorEventsHeader = ({ title, subtitle }: MajorEventsHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8">

      <h1 className="text-vsa-green-300 font-semibold text-2xl md:text-6xl font-vsa-main">
        {title}
      </h1>

      <h2 className="text-vsa-brown font-vsa-alt text-xl md:text-3xl">
        {subtitle}
      </h2>

      <Image
        src={headerImage}
        alt="About VSA Decoration"
        className=""
        priority
      />

    </div>
  );
};

export default MajorEventsHeader;
