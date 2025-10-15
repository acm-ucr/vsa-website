import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

interface MajorEventsHeaderProps {
  title: string;
  subtitle: string;
}

const MajorEventsHeader = ({ title, subtitle }: MajorEventsHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-vsa-green-300 font-vsa-main text-2xl font-semibold md:text-6xl">
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
