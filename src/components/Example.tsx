interface ExampleProps {
  text1: string;
  text2: string;
  text3: string;
}

const Example = ({ text1, text2, text3 }: ExampleProps) => {
  return (
    <div className="flex w-3/4 items-center gap-1 bg-red-200 p-10">
      <div className="w-1/2 bg-green-200 p-5 text-left">{text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="w-full bg-green-200 p-5 text-left">{text2}</div>
        <div className="w-full bg-green-200 p-5 text-right">{text3}</div>
      </div>
    </div>
  );
};
export default Example;
