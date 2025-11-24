"use client";
import Image from "next/image";
import VSAlogo from "@/public/VSA_logo.svg";

const FindUs = () => {
  return (
    <section className="bg-vsa-yellow-100 flex flex-col items-center justify-center px-6 py-12 md:px-20 md:py-20">
      <div className="w-full max-w-3xl">
        <p className="text-vsa-brown font-vsa-main w-7/12 text-left text-4xl font-bold md:text-5xl">
          Find Us!
        </p>
        <p className="text-vsa-brown font-vsa-alt w-7/12 pt-4 text-left text-lg md:text-2xl">
          Come meet us at tabling by the Bell Tower every Wednesday
        </p>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-0">
          <div className="self-end md:self-auto">
            <Image
              src={VSAlogo}
              alt="First image of VSA Logo"
              className="border-vsa-green-400 md:w-200px md:h-200px aspect-square w-1/2 max-w-xs border-2 object-contain md:w-1/5"
            />
          </div>
          <div className="self-start md:self-auto">
            <Image
              src={VSAlogo}
              alt="Second image of VSA Logo"
              className="border-vsa-green-400 md:w-200px md:h-200px aspect-square w-1/2 max-w-xs border-2 object-contain md:w-1/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
