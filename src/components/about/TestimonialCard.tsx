import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: StaticImageData;
  affiliation: string;
  text: string;
}

const Card = ({ name, image, affiliation, text }: CardProps) => {
  return (
    <div className="border-vsa-green-400 shadow-[6px_6px_0_theme('colors.vsa-green-300')] mt-10 mb-4 ml-16 flex w-2/3 flex-col items-start justify-center rounded-lg border-2 bg-white p-4">
      <div className="flex items-start gap-2">
        <Image
          src={image}
          alt="Student Image"
          className="h-28 w-28 rounded-lg object-cover"
        />
        <div className="mt-4 ml-10">
          <p className="font-vsa-main text-vsa-brown text-lg">{name}</p>
          <p className="font-vsa-alt text-sm text-black">{affiliation}</p>
        </div>
      </div>

      <div className="w-64 p-4">
        <p className="font-vsa-alt text-vsa-brown text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
