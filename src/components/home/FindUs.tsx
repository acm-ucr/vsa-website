"use client";
import Image, { StaticImageData } from "next/image";

interface FindUsProps {
  title: string;
  info: string;
  image1: StaticImageData;
  image2: StaticImageData;
}

const FindUs = ({ title, info, image1, image2 }: FindUsProps) => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-start justify-center p-20">
      <div className="text-vsa-brown font-vsa-main p-4 pl-60 text-left text-5xl font-bold">
        {title}
      </div>
      <div className="text-vsa-brown font-vsa-alt p-4 pl-60 text-left text-2xl">
        {info}
      </div>
      <div className="mt-6 flex w-full items-center justify-center">
        <Image
          src={image1}
          alt="First image of VSA Logo"
          className="border-vsa-green-400 aspect-auto h-64 w-75 border-2 object-contain"
        />
        <Image
          src={image2}
          alt="Second image of VSA Logo"
          className="border-vsa-green-400 aspect-auto h-64 w-75 border-2 object-contain"
        />
      </div>
    </div>
  );
};

export default FindUs;
