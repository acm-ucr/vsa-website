import Link from "next/link";
import LotusImage from "@/public/small_lotus.svg";
import Image from "next/image";
const GalleryButton = () => {
  return (
    <div className="flex w-10/12 flex-row items-center justify-center gap-7 p-8 md:gap-12">
      <Image
        src={LotusImage}
        alt="Lotus Logo"
        className="aspect-square w-1/5 md:w-auto"
      />

      <Link
        href="/gallery"
        className="font-vsa-main text-vsa-brown bg-vsa-yellow-200 relative rounded-lg border-2 border-black px-10 py-4 text-xl font-semibold md:text-4xl"
      >
        <div className="bg-vsa-green-300 absolute top-2 left-2 -z-10 h-full w-full rounded-lg" />
        View Our gallery!
      </Link>

      <Image
        src={LotusImage}
        alt="Lotus Logo"
        className="aspect-square w-1/5 md:w-auto"
      />
    </div>
  );
};

export default GalleryButton;
