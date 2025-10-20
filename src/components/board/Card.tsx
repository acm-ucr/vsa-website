import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  position: string;
}

const Card = ({ name, image, position }: CardProps) => {
  return (
    <div className="m-4 flex w-max flex-col items-center justify-center p-4 text-center">
      <img
        src={image}
        alt={name}
        className="aspect-square h-32 w-32 rounded-lg border-2 border-fuchsia-600 object-fill"
      />
      <div className="mt-2 mb-1 text-lg font-normal">{name}</div>
      <div className="font-vsa-main text-lg font-medium">{position}</div>
    </div>
  );
};

export default Card;
