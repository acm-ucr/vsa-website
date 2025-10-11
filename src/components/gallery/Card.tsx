import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface props {
  title: string
  link: string;
  image1: StaticImageData;
  alt1: string;
  image2: StaticImageData;
  alt2: string;
}
const Card: React.FC<props> = ({ title, link, image1, alt1, image2, alt2 }) => {
  return (
    <div className=" w-full h-fit inline-flex">
      <div className=" bg-vsa-green-300 border-vsa-green-400 border-3 border-solid w-1/5 rounded-l-2xl place-content-center text-center text-white p-7">
        <Link href={link} className=" text-5xl font-vsa-main font-black">click here to see full gallery
          <h1 className=" font-vsa-alt font-normal p-3">→</h1>
        </Link>
      </div>
      <div className=" bg-vsa-yellow-100 border-vsa-green-400 border-3 border-solid w-4/5 border-l-0 rounded-r-2xl p-9 place-content-center">
        <h1 className="font-black font-vsa-main text-vsa-pink-300 text-5xl pb-5">{title}</h1>
        <div className="inline-flex gap-4">
          <Image src={image1} alt={alt1} className=" object-cover w-1/2 border-vsa-green-400 border-3 border-solid aspect-square"/>
          <Image src={image2} alt={alt2} className=" object-cover w-1/2 border-vsa-green-400 border-3 border-solid aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default Card;
