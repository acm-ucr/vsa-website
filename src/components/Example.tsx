const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-6 rounded-2xl bg-pink-200 p-24 text-[20px]">
      <div className="w-full items-center gap-6 bg-blue-200 p-5 text-center">
        {props.text1}
      </div>
      <div className="ite flex flex-row justify-center gap-11">
        <div className="w-full rounded-full bg-blue-300 p-5 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-300 p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="w-full bg-blue-500 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
