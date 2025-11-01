interface CardProps {
  date: string;
  time: string;
  loc: string;
  text: string;
  color: string;
}

const Card = ({ date, time, loc, text, color }: CardProps) => {
  return (
    <div className="border-vsa-brown flex w-1/5 flex-col items-center justify-center overflow-hidden rounded-lg border-2 bg-white">
      <div
        className={`bg-${color} border-vsa-brown h-1/3 w-full justify-center border-b-2 p-4 text-left`}
      >
        <p className="text-md font-vsa-main text-vsa-yellow-200 text-outline justify-center text-center text-4xl font-extrabold">
          {date}
        </p>
      </div>

      <div className="h-1/3 w-full justify-center p-1 text-left">
        <p className="font-vsa-alt text-vsa-brown justify-center text-center">
          {time}
        </p>
        <p className="font-vsa-alt text-vsa-brown justify-center text-center">
          {loc}
        </p>
      </div>

      <div className="bg-vsa-pink-300 my-2 h-[2px] w-8"></div>

      <div className="w-full rounded-b-lg p-2 text-center">
        <p className="font-vsa-alt text-vsa-brown text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
