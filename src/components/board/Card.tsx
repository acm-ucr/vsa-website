import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: StaticImageData;
  position: string;
  border: string;
  text: string;
}

const Card = ({ name, image, position, border, text }: CardProps) => {
  return (
    <div className="flex w-max flex-col items-center justify-center text-center">
      <Image
        src={image}
        alt={name}
        className={`${border} aspect-8/9 w-32 rounded-lg border-2 object-cover`}
      />
      <div className="text-vsa font-vsa-alt mt-2 mb-1 text-lg text-black">
        {name}
      </div>
      <div className={`font-vsa-main ${text} text-lg font-bold`}>
        {position}
      </div>
    </div>
  );
};

export default Card;
