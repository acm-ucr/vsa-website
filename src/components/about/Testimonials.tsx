import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: StaticImageData;
  affiliation: string;
  text: string;
}

const Card = ({ name, image, affiliation, text }: CardProps) => {
  return (
    <div className="flex justify-center p-4">
      <div className="border-vsa-green-400 flex w-72 flex-col items-center rounded-lg border-2 border-solid bg-white shadow-[6px_6px_0_#439364]">
        <div className="mt-4 mr-2 ml-2 flex">
          <Image
            src={image}
            alt="Student Image"
            className="ml-4 h-28 w-28 rounded-lg object-cover"
          />
          <div className="w-32 justify-center p-4 text-left">
            <h3 className="text-md font-vsa-main text-vsa-brown justify-center text-center break-words">
              {name}
            </h3>
            <p className="font-vsa-alt justify-center p-1 text-center text-xs text-black">
              {affiliation}
            </p>
          </div>
        </div>
        <div className="w-64 p-4 break-words">
          <p className="font-vsa-alt text-vsa-brown text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
