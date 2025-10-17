"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
interface ProjectsProps {
  images: StaticImageData[];
  title: string;
  description: string;
}

const MajorEventLeft = ({ images, title, description }: ProjectsProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex w-full">
      <div className="flex w-1/2 flex-col items-center p-6 pl-16">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: images.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center">
                  <Image src={images[index]} alt={title} className="w-2xl" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center gap-2 py-2">
          {Array.from({ length: images.length }, (_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-transform ${
                images.length === 1
                  ? "bg-vsa-green-400"
                  : index + 1 === current
                    ? "bg-vsa-green-400"
                    : "bg-vsa-green-100"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center">
        <div className="font-vsa-main text-vsa-pink-300 h-20 w-2xl pt-2 pr-10 text-center text-5xl font-bold">
          {title}
        </div>
        <div className="font-vsa-alt w-[605px] pb-10 text-center text-2xl text-black">
          {description}
        </div>
      </div>
    </div>
  );
};

export default MajorEventLeft;
