import Card from "@/components/board/Card";
import VSA from "@/public/VSA_logo.svg";

const Staff = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card
        name="John Doe"
        image={VSA}
        position="President"
        color="border-vsa-pink-300"
      />
    </div>
  );
};

export default Staff;
