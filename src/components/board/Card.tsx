import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  position: string;
}

const Card = ({ name, image, position }: CardProps) => {
  return (
    <div className="m-4 flex w-max flex-col items-center justify-center p-4 text-center">
      <Image
        src={image}
        alt={name}
        className="border-vsa-pink-300 h-32 w-32 rounded-lg border-1 object-contain"
      />
      <div className="text-vsa font-vsa mt-2 mb-1 text-lg">{name}</div>
      <div className="font-vsa-main text-vsa-pink-300 text-lg font-bold">
        {position}
      </div>
    </div>
  );
};

export default Card;
