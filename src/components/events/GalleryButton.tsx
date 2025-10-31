import Link from "next/link";
import LotusImage from "@/public/small_lotus.svg";
import Image from "next/image";
const GalleryButton = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-12 p-8">
      <Image src={LotusImage} alt="Lotus Logo"></Image>

      <Link
        href="/gallery"
        className="font-vsa-main text-vsa-brown bg-vsa-yellow-200 before:bg-vsa-green-300 relative rounded-lg border-2 border-black px-28 py-4 text-4xl font-semibold before:absolute before:top-2 before:left-2 before:-z-10 before:h-full before:w-full before:rounded-lg"
      >
        View Our gallery!
      </Link>

      <Image src={LotusImage} alt="Lotus Logo"></Image>
    </div>
  );
};

export default GalleryButton;
