"use client";

import MajorEventLeft from "@/components/about/MajorEventLeft";
import Socials from "@/components/about/Socials";
//import VSAlogo from "@/public/VSA_logo.svg";
import MajorEventsHeader from "@/components/about/MajorEventsHeader";
import Testimonials from "@/components/about/Testimonials";
import MajorEventRight from "@/components/about/MajorEventRight";
import { MajorEvents } from "@/data/Events/MajorEventsInfo";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-vsa-green-400 m-8 text-4xl font-black">About</p>
      <MajorEventsHeader />

      <div className="mx-auto flex w-full flex-col items-center py-5">
        {MajorEvents.map((event, index) => {
          const Component = index % 2 === 0 ? MajorEventLeft : MajorEventRight;
          return (
            <Component
              key={index}
              title={event.title}
              description={event.description}
              images={event.images}
            />
          );
        })}
      </div>

      <div className="mt-10 mb-10 flex w-full justify-center">
        <Testimonials />
      </div>

      <Socials />
    </div>
  );
};

export default About;
