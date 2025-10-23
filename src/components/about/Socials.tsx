"use client";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-23">
      <h1 className="text-vsa-pink-300 text-3xl font-bold">
        Check Our Socials Out!
      </h1>
      <p className="font-vsa-alt w-3/5 pt-5 text-center">
        Kick off the school year with the Vietnamese Student Association at our
        annual VSA Social during Week 0! Whether you're a returning student or
        brand new to campus, this is the perfect chance to meet new people, make
        friends, and get to know the VSA community. We'll have fun activities,
        ice breakers, and plenty of good vibes to help you ease into college
        life. You'll also get to meet the VSA staff and learn more about how to
        get involved throughout the year.
      </p>
      <div className="flex flex-row">
        <Link href="https://www.google.com/" target="_blank">
          <FaInstagram className="fill-vsa-pink-200 m-7 mb-10 size-40" />
        </Link>
        <Link href="https://www.google.com/" target="_blank">
          <FaDiscord className="fill-vsa-pink-200 m-7 mb-10 size-40" />
        </Link>
        <Link href="https://www.google.com/" target="_blank">
          <FaTiktok className="fill-vsa-pink-200 m-7 mb-10 size-40" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
