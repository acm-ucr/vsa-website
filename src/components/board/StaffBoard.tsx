import { JSX } from "react";
interface BoardProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Board = ({ title, children }: BoardProps) => {
  return (
    <div className="text-vsa-pink-200 text-center text-6xl">
      <p className="">{title}</p>
      <div className="grid grid-cols-3">{children}</div>
    </div>
  );
};
export default Board;
