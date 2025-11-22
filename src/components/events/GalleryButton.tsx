import Link from "next/link";
import LotusImage from "@/public/small_lotus.svg";
import Image from "next/image";
const GalleryButton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8 sm:flex-row">
      <Image src={LotusImage} alt="Lotus Logo" className="hidden sm:block" />

      <Link
        href="/gallery"
        className="font-vsa-main text-vsa-brown bg-vsa-yellow-200 relative rounded-lg border-2 border-black px-28 py-4 text-4xl font-semibold"
      >
        {/*Green shadow overlay shifted bottom right*/}
        <div className="bg-vsa-green-300 absolute top-2 left-2 -z-10 h-full w-full rounded-lg" />
        View Our gallery!
      </Link>

      <Image src={LotusImage} alt="Lotus Logo" className="hidden sm:block" />
    </div>
  );
};

export default GalleryButton;
