import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: StaticImageData;
  affiliation: string;
  text: string;
}

const Card = ({ name, image, affiliation, text }: CardProps) => {
  return (
    <div className="border-vsa-green-400 shadow-[6px_6px_0_theme('colors.vsa-green-300')] flex w-3/4 flex-col items-center justify-center rounded-lg border-2 bg-white p-2 md:w-1/5 md:p-4">
      <div className="x-2 mt-4 flex">
        <Image
          src={image}
          alt="Student Image"
          className="ml-4 h-28 w-28 rounded-lg object-cover"
        />
        <div className="w-32 justify-center p-4 text-left">
          <p className="text-md font-vsa-main text-vsa-brown justify-center text-center">
            {name}
          </p>
          <p className="font-vsa-alt justify-center p-1 text-center text-xs text-black">
            {affiliation}
          </p>
        </div>
      </div>
      <div className="w-64 p-4">
        <p className="font-vsa-alt text-vsa-brown text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
