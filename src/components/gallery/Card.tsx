import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface props {
  link: string
  image1: StaticImageData
  alt1: string
  image2: StaticImageData
  alt2: string
}
const Card: React.FC<props> = ({link, image1, alt1, image2, alt2}) => {
  return <div>
    <div>
      <Link href={link}/>
    </div>
    <div>
      <Image src={image1} alt={alt1}/>
      <Image src={image2} alt ={alt2}/>
    </div>
  </div>;
};

export default Card;
