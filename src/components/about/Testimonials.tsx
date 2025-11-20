import { testimonialData } from "@/data/TestimonialData";
import Card from "./TestimonialCard";

const Testimonials = () => {
  const leftColumn = testimonialData.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonialData.filter((_, i) => i % 2 === 1);

  return (
    <div className="pb-10 px-50 grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-6">
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
      <div className="flex flex-col gap-6 pt-40">
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
