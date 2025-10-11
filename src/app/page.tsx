import Example from "@/components/Example";
import VSAlogo from "@/public/VSA_logo.svg";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="adjust" text2="text2" text3="these" image={VSAlogo} />
    </div>
  );
};

export default Home;
