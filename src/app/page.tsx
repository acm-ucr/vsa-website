import Card from "@/components/gallery/Card";
import VSAIcon from "@/public/VSA_logo.svg";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-12">
      <Card title="test" link="/gallery" image1={VSAIcon} image2={VSAIcon} />
    </div>
  );
};

export default Home;
