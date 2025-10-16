"use client"
import Image, { StaticImageData } from "next/image";

interface FindUsProps {
  title: string
  info: string
  image1: StaticImageData
  image2: StaticImageData
}


const FindUs = ({title, info, image1, image2}: FindUsProps) => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-start justify-center p-20"> 
      <div className="text-vsa-brown text-5xl text-left font-vsa-main font-bold pl-52 p-4">{title}</div>
      <div className="text-vsa-brown text-2xl font-vsa-alt text-left pl-52 p-4">{info}</div>
      <div className="w-full flex justify-center items-center mt-6">
        <Image src={image1} alt="First image of VSA Logo" className="border-vsa-green-400 aspect-auto border-2 object-contain w-75 h-64"/>
        <Image src={image2} alt="Second image of VSA Logo" className="border-vsa-green-400 aspect-auto border-2 object-contain w-75 h-64"/>
      </div>
    </div>
  );
};

export default FindUs;
