import { DemoData } from "@/data/DemoData";
import Example from "@/components/Example";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-12">
      {DemoData.map(({ text1, text2, text3 }, index) => (
        <Example key={index} text1={text1} text2={text2} text3={text3} />
      ))}
    </div>
  );
};

export default Home;
