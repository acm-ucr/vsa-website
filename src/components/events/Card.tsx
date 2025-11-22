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
    <div className="flex w-full flex-col sm:flex-row">
      <div className="border-vsa-green-400 bg-vsa-green-300 flex w-full flex-col justify-center rounded-t-md border-2 p-1 text-center text-white sm:w-1/4 sm:rounded-l-md sm:rounded-tr-none">
        <p className="text-3xl font-bold">{month}</p>
        <p className="text-3xl font-bold">{day}</p>
        <p className="font-vsa-alt pt-3 text-lg">{time}</p>
      </div>
      <div className="border-vsa-green-400 bg-vsa-yellow-100 w-full rounded-b-md border-2 border-t-0 p-4 text-left sm:rounded-r-md sm:rounded-bl-none sm:border-l-0 sm:border-t-2">
        <p className="text-vsa-pink-300 text-2xl font-bold">{title}</p>
        <p className="text-lg font-bold text-black">{location}</p>
        <p className="font-vsa-alt text-vsa-brown pt-3 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
