interface CardProps {
  title: string;
  location: string;
  description: string;
  month: string;
  day: string;
  time: string;
}

const Card = ({
  title,
  location,
  description,
  month,
  day,
  time,
}: CardProps) => {
  return (
    <div className="flex w-6/7 flex-row">
      <div className="border-vsa-green-400 bg-vsa-green-300 flex w-1/4 flex-col justify-center rounded-l-md border-2 text-center text-white">
        <p className="text-3xl font-bold">{month}</p>
        <p className="text-3xl font-bold">{day}</p>
        <p className="font-vsa-alt pt-3">{time}</p>
      </div>
      <div className="border-vsa-green-400 bg-vsa-yellow-100 w-1/1 rounded-r-md border-2 border-l-0 p-4 text-left">
        <p className="text-vsa-pink-300 text-2xl font-bold">{title}</p>
        <p className="font-bold">{location}</p>
        <p className="font-vsa-alt text-vsa-brown pt-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
