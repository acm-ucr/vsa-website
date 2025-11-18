import Image from "next/image";
import logo from "@/public/VSA_logo.svg";
import Link from "next/link";

const JoinUS = () => {
  return (
    <div className="mx-auto flex w-full max-w-[110rem] flex-col px-4 py-24">
      <div className="font-vsa-main mb-8 text-left text-4xl font-semibold text-pink-400 sm:text-5xl md:text-6xl lg:text-7xl">
        Looking to Join?
      </div>

      <div className="flex w-full flex-col items-start gap-10 xl:flex-row">
        <div className="font-vsa-alt text-md flex w-full flex-1 flex-col gap-10 sm:text-xl md:text-xl lg:text-xl xl:max-w-[60ch] xl:text-2xl 2xl:text-2xl">
          <p>
            At UCR’s Vietnamese Student Association, we’re more than just a
            club—we’re a family. Whether you’re looking to explore your cultural
            roots, meet new people, or just find a welcoming space on campus,
            VSA is here for you. Founded in 1981, we’ve built a strong community
            where students from all backgrounds can connect, grow, and celebrate
            Vietnamese culture together.
          </p>

          <Image
            src={logo}
            alt="VSA Logo"
            className="mx-auto w-9/10 object-contain py-5 shadow-lg sm:hidden"
          />

          <p>
            By joining VSA, you’ll have access to mentorship through our
            <span className="font-bold"> Anh Chi Em (ACE)</span> program,
            exciting cultural events like Vietnamese Culture Night, community
            service opportunities, and so much more. As part of the larger UVSA
            SoCal network, you’ll also get the chance to engage with students
            across Southern California. Come be a part of something
            meaningful—your journey with VSA starts here.
          </p>
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center gap-10 xl:w-auto">
          <Image
            src={logo}
            alt="VSA Logo"
            className="hidden h-auto w-full max-w-[40rem] object-contain shadow-lg sm:block"
          />

          <Link
            href="#"
            className="font-vsa-alt text-vsa-brown bg-vsa-pink-100 hover:bg-vsa-pink-200 cursor-pointer rounded-3xl border-2 border-black px-8 py-4 text-base font-semibold shadow-lg transition-colors duration-300 sm:text-lg md:text-xl lg:text-2xl"
          >
            Membership Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
