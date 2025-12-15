import { JSX } from "react";
interface BoardProps {
  title: string;
  text: string;
  children: JSX.Element | JSX.Element[];
}

const EventsBoard = ({ title, text, children }: BoardProps) => {
  return (
    <div className="mt-4 mb-14 w-full max-w-2xl text-center text-2xl">
      <p className={` ${text} p-5 text-4xl font-semibold`}>{title}</p>
      <div className="grid grid-cols-1 place-items-center gap-5">
        {children}
      </div>
    </div>
  );
};
export default EventsBoard;
