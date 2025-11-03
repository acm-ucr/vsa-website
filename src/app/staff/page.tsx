import Card from "@/components/board/Card";
import StaffBoard from "@/components/board/StaffBoard";
import { ExecutiveStaff } from "@/data/Staff/ExecutiveStaff";
import { GeneralStaff } from "@/data/Staff/GeneralStaff";

const Staff = () => {
  return (
    <div className="flex h-screen w-screen flex-col place-items-center text-center">
      <p className="text-vsa-green-400 m-8 text-4xl font-black">
        Meet the Staff
      </p>
      <StaffBoard title="Executive Staff" text="text-vsa-pink-300">
        {ExecutiveStaff.map(({ name, image, position }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            position={position}
            border="border-vsa-pink-300"
            text="text-vsa-pink-300"
          />
        ))}
      </StaffBoard>
      <StaffBoard title="General Staff" text="text-vsa-green-300">
        {GeneralStaff.map(({ name, image, position }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            position={position}
            border="border-vsa-green-400"
            text="text-vsa-green-400"
          />
        ))}
      </StaffBoard>
    </div>
  );
};

export default Staff;
