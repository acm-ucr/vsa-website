const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="font-meduim flex w-2/3 flex-col items-center justify-center gap-10 bg-red-200 p-10 text-lg">
      <div className="w-1/3 bg-blue-200 p-5 text-center">{props.text1}</div>
      <div className="flex w-1/3 flex-row gap-8">
        <div className="w-1/2 rounded-full bg-blue-400 p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="w-1/2 rounded-full bg-blue-400 p-5 text-center text-lg">
          {props.text3}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-1/3 bg-blue-600 p-5 text-center text-lg text-white">
        {props.text4}
      </div>
    </div>
  );
};
export default Example;
