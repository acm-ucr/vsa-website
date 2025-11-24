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

const MajorEventRight = ({ images, title, description }: ProjectsProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
      <div className="flex w-full flex-col items-center justify-center md:w-2/5">
        <div className="font-vsa-main text-vsa-pink-300 w-full p-4 text-center text-3xl font-bold md:w-2xl md:p-6 md:pr-10 md:text-4xl">
          {title}
        </div>
        <div className="font-vsa-alt w-10/12 text-center text-sm text-black md:w-11/12 md:text-xl">
          {description}
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center md:mt-10">
        <Carousel setApi={setApi} opts={{}}>
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
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-transform ${
                images.length === 1
                  ? "bg-vsa-green-400"
                  : index === current
                    ? "bg-vsa-green-400"
                    : "bg-vsa-green-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorEventRight;
