import Image from "next/image";


interface CardProps {
  name: string;
  image: string
  position: string;
}

const Card = ({name, image, position }: CardProps) => {
  return (
    <div className="m-4 flex w-max flex-col items-center justify-center p-4 text-center">
      <Image
        src={image}
        alt={name}
        className="h-32 w-32 rounded-lg border-1 border-vsa-pink-300 object-contain"
      />
      <div className="mt-2 mb-1 text-vsa text-lg font-vsa">{name}</div>
      <div className="text-lg font-bold font-vsa-main text-vsa-pink-300">
        {position}
      </div>
    </div>
  );
};

export default Card;
