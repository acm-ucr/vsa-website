import { JSX } from "react";
interface BoardProps {
  title: string;
  color: string;
  children: JSX.Element | JSX.Element[];
}

const Board = ({ title, color, children }: BoardProps) => {
  return (
    <div className={` text-${color} max-w-3/4 text-center text-2xl`}>
      <p className="p-5">{title}</p>
      <div className="grid grid-cols-3 place-items-center gap-5">
        {children}
      </div>
    </div>
  );
};
export default Board;
