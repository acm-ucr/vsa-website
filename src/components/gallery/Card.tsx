import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface props {
  title: string;
  link: string;
  image1: StaticImageData;
  image2: StaticImageData;
  alt1?: string;
  alt2?: string;
}
const Card = ({ title, link, image1, alt1, image2, alt2 }: props) => {
  return (
    <div className="inline-flex h-fit w-full">
      <div className="bg-vsa-green-300 border-vsa-green-400 w-1/5 place-content-center rounded-l-2xl border-3 border-solid p-7 text-center text-white decoration-solid hover:underline">
        <Link href={link} className="font-vsa-main text-4xl font-black">
          click here to see full gallery
          <div className="font-vsa-alt text-center text-5xl font-black italic">
            →
          </div>
        </Link>
      </div>
      <div className="bg-vsa-yellow-100 border-vsa-green-400 w-4/5 place-content-center rounded-r-2xl border-3 border-l-0 border-solid p-9">
        <h1 className="font-vsa-main text-vsa-pink-300 pb-5 text-5xl font-black">
          {title}
        </h1>
        <div className="inline-flex gap-4">
          <Image
            src={image1}
            alt={alt1 ? alt1: "Image 1"}
            className="border-vsa-green-400 aspect-square w-1/2 border-3 border-solid object-cover"
          />
          <Image
            src={image2}
            alt={alt2 ? alt2: "Image 2"}
            className="border-vsa-green-400 aspect-square w-1/2 border-3 border-solid object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
