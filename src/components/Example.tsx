const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-vsa-yellow-100 font-vsa-main flex w-2/3 flex-col items-center gap-1 rounded-xl p-10">
      <div className="bg-vsa-green-100 m-8 w-1/2 p-5 text-center text-xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-vsa-green-200 w-full rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-vsa-green-200 w-full rounded-full p-5 text-center text-xl">
          {props.text3}
        </div>
      </div>
      <div className="bg-vsa-green-300 m-8 w-1/2 p-5 text-center text-xl text-white">
        {props.text4}
      </div>
    </div>
  );
};
export default Example;
