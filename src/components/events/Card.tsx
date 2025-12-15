"use client";
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
    <div className="flex w-[95%] flex-col md:w-full md:flex-row">
      <div className="border-vsa-green-400 bg-vsa-green-300 flex w-full flex-row items-center justify-around rounded-t-md border-2 p-3 text-center text-white md:w-1/4 md:flex-col md:justify-center md:rounded-l-md md:rounded-tr-none md:p-1">
        <p className="text-2xl font-bold md:text-3xl">{month}</p>
        <p className="text-2xl font-bold md:text-3xl">{day}</p>
        <p className="font-vsa-alt pt-0 text-base md:pt-3 md:text-lg">{time}</p>
      </div>
      <div className="border-vsa-green-400 bg-vsa-yellow-100 w-full rounded-b-md border-2 border-t-0 p-4 text-left md:rounded-r-md md:rounded-bl-none md:border-t-2 md:border-l-0">
        <p className="text-vsa-pink-300 text-xl font-bold md:text-2xl">
          {title}
        </p>
        <p className="text-base font-bold text-black md:text-lg">{location}</p>
        <p className="font-vsa-alt text-vsa-brown pt-2 text-sm md:pt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
