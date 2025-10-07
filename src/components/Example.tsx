const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 gap-7 rounded-xl bg-cyan-300 p-10 font-mono text-xl">
      <div className="bg-vsa-green-100 w-1/2 p-5 text-center text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-vsa-green-300 w-full rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
        <div className="bg-vsa-green-300 w-full rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-vsa-green-400 w-1/2 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
