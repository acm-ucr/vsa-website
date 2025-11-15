import { testimonialData } from "@/data/TestimonialData";
import Card from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {testimonialData.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          affiliation={item.affiliation}
          image={item.image}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Testimonials;
