import Link from "next/link";
import LotusImage from "@/public/small_lotus.svg";
import Image from "next/image";
const GalleryButton = () => {
  return (
    <div className="flex flex-row w-10/12 items-center justify-center gap-7 md:gap-12 p-8">
      <Image src={LotusImage} alt="Lotus Logo" className="aspect-square w-1/5 md:w-auto"/>

      <Link
        href="/gallery"
        className="font-vsa-main text-vsa-brown bg-vsa-yellow-200 relative rounded-lg border-2 px-10 border-black text-xl py-4 md:text-4xl font-semibold"
      >
        <div className="bg-vsa-green-300 absolute top-2 left-2 -z-10 h-full w-full rounded-lg" />
        View Our gallery!
      </Link>

      <Image src={LotusImage} alt="Lotus Logo" className="aspect-square w-1/5 md:w-auto" />
    </div>
  );
};

export default GalleryButton;
