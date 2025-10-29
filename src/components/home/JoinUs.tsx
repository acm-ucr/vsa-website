import Image from "next/image";
import logo from "@/public/VSA_logo.svg";
import Link from "next/link";

const JoinUS = () => {
  return (
    <div className="mx-auto flex w-4/5 flex-col px-4 py-24">
      <div className="font-vsa-main mb-8 text-left text-6xl font-semibold text-pink-400">
        Looking to Join?
      </div>

      <div className="flex w-full flex-row items-start gap-10">
        <div className="font-vsa-alt flex w-full flex-1 flex-col gap-5 text-2xl">
          <p>
            At UCR’s Vietnamese Student Association, we’re more than just a
            club—we’re a family. Whether you’re looking to explore your cultural
            roots, meet new people, or just find a welcoming space on campus,
            VSA is here for you. Founded in 1981, we’ve built a strong community
            where students from all backgrounds can connect, grow, and celebrate
            Vietnamese culture together.
          </p>

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

        <div className="flex flex-1 flex-col items-center gap-10">
          <Image
            src={logo}
            alt="VSA Logo"
            className="h-4/5 w-3/4 object-contain shadow-lg"
          />

          <Link
            href="#"
            className="font-vsa-alt text-vsa-brown bg-vsa-pink-100 hover:bg-vsa-pink-200 cursor-pointer rounded-3xl border-2 border-black px-8 py-3 text-2xl font-semibold shadow-lg transition-colors duration-300"
          >
            Membership Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
