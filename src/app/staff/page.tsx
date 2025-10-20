import Card from "@/components/board/Card";
import VSA_logo from "@/public/VSA_logo.svg";


const Staff = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card name="John Doe" image={VSA_logo} position="President" />
    </div>
  );
};

export default Staff;
