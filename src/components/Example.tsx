const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 items-center gap-1 bg-red-200 p-10">
      <div className="w-1/2 bg-green-200 p-5 text-left">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="w-full bg-green-200 p-5 text-left">{props.text2}</div>
        <div className="w-full bg-green-200 p-5 text-right">{props.text2}</div>
      </div>
      <div className="bg-vsa-green-200 m-2 w-2 p-10 text-right">
        {props.text3}
      </div>
      <div className="bg-vsa-green-200 m-2 w-1/3 p-10 text-right">
        {props.text2}
      </div>
    </div>
  );
};
export default Example;
