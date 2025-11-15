"use client";

import MajorEventLeft from "@/components/about/MajorEventLeft";
import Socials from "@/components/about/Socials";
import VSAlogo from "@/public/VSA_logo.svg";
import MajorEventsHeader from "@/components/about/MajorEventsHeader";
import Testimonials from "@/components/about/Testimonials";
const About = () => {
  return (
    <div>
      <MajorEventsHeader />
      <MajorEventLeft
        title="General Meetings"
        description="Stay in the loop and connect with the VSA fam at our General Meetings, held three times each
quarter, usually every two weeks! These meetings are the perfect way to get updates on upcoming
events, learn how to get more involved, and hang out with other members through fun activities and games. Each meeting wraps up with a fundraiser, so you can support VSA while enjoying great food or treats. Whether you're a returning member or new to the club, General Meetings are a fun and easy way to stay connected all year long!"
        images={[VSAlogo, VSAlogo]}
      />
      <Testimonials />
      <Socials />
    </div>
  );
};

export default About;
