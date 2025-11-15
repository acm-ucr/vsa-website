import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface props {
  title: string;
  link: string;
  leftimage: StaticImageData;
  rightimage: StaticImageData;
  leftalt: string;
  rightalt: string;
}

const Card = ({
  title,
  link,
  leftimage,
  leftalt,
  rightimage,
  rightalt,
}: props) => {
  return (
    <div className="flex w-full flex-col md:w-2/3 md:flex-row">
      <div className="bg-vsa-green-300 border-vsa-green-400 flex w-full place-items-center rounded-l-2xl border-3 p-4 text-center text-white md:w-1/5 md:rounded-t-none md:rounded-l-2xl md:p-7">
        <Link
          href={link}
          className="font-vsa-main text-xl font-black hover:underline md:text-4xl"
        >
          click here to see full gallery
          <p className="font-vsa-alt text-center text-2xl font-black italic md:text-5xl">
            →
          </p>
        </Link>
      </div>
      <div className="bg-vsa-yellow-100 border-vsa-green-400 w-full rounded-b-2xl border-3 border-t-0 p-4 md:w-4/5 md:rounded-r-2xl md:border-l-0 md:p-9">
        <p className="font-vsa-main text-vsa-pink-300 pb-3 text-2xl font-black md:pb-5 md:text-5xl">
          {title}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Image
            src={leftimage}
            alt={leftalt}
            className="border-vsa-green-400 aspect-square w-full border-3 object-cover md:w-1/2"
          />
          <Image
            src={rightimage}
            alt={rightalt}
            className="border-vsa-green-400 aspect-square w-full border-3 object-cover md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
