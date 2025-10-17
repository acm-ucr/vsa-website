const Card = (props: { name: string; image: string; position: string }) => {
  return (
    <div className="m-4 flex w-max flex-col items-center justify-center bg-transparent p-4 text-center">
      <img
        src={props.image}
        alt={props.name}
        className="h-32 w-32 rounded-lg border-2 border-fuchsia-600 object-fill"
      />
      <div className="mt-2 mb-1 text-lg font-normal">{props.name}</div>
      <div className="text-lg font-medium text-fuchsia-600">
        {props.position}
      </div>
    </div>
  );
};

export default Card;
