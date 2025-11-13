const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 flex-col items-center gap-6 bg-pink-200 p-10">
      {/* Top box - light blue */}
      <div className="w-1/2 bg-blue-200 p-8 text-center text-4xl">
        {props.text1}
      </div>

      {/* Middle row - two rounded blue pills */}
      <div className="flex w-1/2 flex-row gap-4">
        <div className="w-full rounded-full bg-blue-400 px-12 py-8 text-center text-3xl">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 px-12 py-8 text-center text-3xl">
          {props.text2}
        </div>
      </div>

      {/* Bottom box - darker blue */}
      <div className="w-1/2 bg-blue-600 p-8 text-center text-4xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
