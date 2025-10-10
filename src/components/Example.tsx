const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-pink-200 p-10">
      <div className="w-[260px] bg-purple-100 p-5 text-center">{props.text1}</div>
      <div className="flex justify-center w-[260px] gap-4">
        <div className="w-[150px] rounded-full bg-red-300 p-5 text-center">{props.text2}</div>
        <div className="w-[150px] rounded-full bg-red-300 p-5 text-center">{props.text2}</div>
      </div>
      <div className="w-[260px] bg-purple-100 p-5 text-center">{props.text3}</div>
    </div>
  );
};
export default Example;
