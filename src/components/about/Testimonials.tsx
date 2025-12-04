import { testimonialData } from "@/data/TestimonialData";
import Card from "./TestimonialCard";

const Testimonials = () => {
  const leftColumn = testimonialData.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonialData.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col gap-2 px-50 pb-10 lg:grid lg:grid-cols-2">
      <div className="mt-10 flex flex-col gap-6 lg:mt-0">
        {leftColumn.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            affiliation={item.affiliation}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 lg:mt-0 lg:pt-40">
        {rightColumn.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            affiliation={item.affiliation}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
