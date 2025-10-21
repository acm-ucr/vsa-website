import Image from "next/image";
import bingus from "@/public/bingus_3.png";

const JoinUS = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col px-4 py-16 sm:w-10/12 sm:px-6 sm:py-20 lg:w-4/5 lg:py-24">
      <div className="font-vsa-main mb-8 text-center text-4xl font-semibold text-pink-400 sm:text-5xl lg:text-left lg:text-6xl">
        Looking to Join?
      </div>

      <div className="sm:width-full flex w-full flex-col gap-12 sm:flex-col md:flex-col lg:flex-row lg:items-start lg:gap-10">
        <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-xl lg:text-2xl">
          <div className="font-vsa-alt flex w-full flex-col gap-5 leading-relaxed font-light">
            <p>
              At UCR’s Vietnamese Student Association, we’re more than just a
              club—we’re a family. Whether you’re looking to explore your
              cultural roots, meet new people, or just find a welcoming space on
              campus, VSA is here for you. Founded in 1981, we’ve built a strong
              community where students from all backgrounds can connect, grow,
              and celebrate Vietnamese culture together.
            </p>

            <p>
              By joining VSA, you’ll have access to mentorship through our
              <span className="font-bold"> Anh Chi Em (ACE)</span> program,
              exciting cultural events like Vietnamese Culture Night, community
              service opportunities, and so much more. As part of the larger
              UVSA SoCal network, you’ll also get the chance to engage with
              students across Southern California. Come be a part of something
              meaningful—your journey with VSA starts here.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-10 sm:gap-12">
          <Image
            src={bingus}
            alt="VSA Logo"
            className="h-9/10 w-full object-contain shadow-lg sm:h-9/10 sm:w-full md:h-4/5 md:w-8/10 lg:h-4/5 lg:w-3/4"
          />

          <button className="font-vsa-main text-vsa-brown text-1xl cursor-pointer rounded-3xl border-2 border-black bg-pink-200 px-8 py-3 font-semibold shadow-lg transition-colors duration-300 hover:bg-pink-400 sm:px-10 sm:py-3 sm:text-xl md:px-12 md:py-4 md:text-2xl">
            Membership Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
