interface props {
  text: string;
  title: string;
}

const Header = ({ text, title }: props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-vsa-green-400 font-vsa-main text-5xl font-extrabold">
        {title}
      </p>
      <p className="font-vsa-alt m-5 text-black">{text}</p>
    </div>
  );
};

export default Header;
