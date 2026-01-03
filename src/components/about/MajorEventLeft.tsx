"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
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
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <motion.div
      className="flex w-full flex-col-reverse items-center justify-center gap-3 md:flex-row md:gap-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.25 }}
      viewport={{ once: true }}
    >
      <div className="flex w-10/12 flex-col items-center justify-center md:w-1/4">
        <Carousel setApi={setApi} opts={{}}>
          <CarouselContent>
            {Array.from({ length: images.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex max-h-[60vh] items-center justify-center md:h-[60vh]">
                  <Image
                    src={images[index]}
                    alt={title}
                    className="aspect-video max-h-[60vh] max-w-full object-cover"
                  />
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
      <div className="flex w-full flex-col items-center justify-center md:w-2/5">
        <div className="font-vsa-main text-vsa-pink-300 w-full p-4 text-center text-3xl font-bold md:w-2xl md:p-6 md:pr-10 md:text-4xl">
          {title}
        </div>
        <div className="font-vsa-alt w-10/12 text-center text-sm text-black md:w-11/12 md:text-xl">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default MajorEventLeft;
