import Image from "next/image";
import headerImage from "@/public/about_decoration.webp";

interface MajorEventsHeaderProps {
  title: string;
  subtitle: string;
}

const MajorEventsHeader = ({ title, subtitle }: MajorEventsHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-vsa-green-300 font-vsa-main text-4xl sm:text-5xl md:text-6xl font-semibold">
        {title}
      </h1>

      <h2 className="text-vsa-brown font-vsa-alt text-xl md:text-3xl whitespace-nowrap text-ellipsis max-w-[90%] sm:max-w-[80%]">
        {subtitle}
      </h2>

      <Image
        src={headerImage}
        alt="About VSA Decoration"
        className="w-5/12 h-auto object-contain mx-auto"
        priority
      />
    </div>
  );
};

export default MajorEventsHeader;
