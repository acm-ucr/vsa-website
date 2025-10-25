import Card from "@/components/board/Card";
import VSA from "@/public/VSA_logo.svg";
import StaffBoard from "@/components/board/StaffBoard";

const Staff = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <StaffBoard title="Executive Staff">
        <Card
          name="John Doe"
          image={VSA}
          position="President"
          color="border-vsa-pink-300"
        />
      </StaffBoard>
    </div>
  );
};

export default Staff;
