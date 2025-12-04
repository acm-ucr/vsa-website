import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
interface CardProps {
  name: string;
  image: StaticImageData;
  affiliation: string;
  text: string;
}
const Card = ({ name, image, affiliation, text }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.4 }}
      whileTap={{ scale: 0.8 }}
      className="border-vsa-green-400 shadow-[6px_6px_0_theme('colors.vsa-green-300')] mt-10 mb-4 flex h-80 w-72 flex-col items-start justify-center rounded-lg border-2 bg-white p-4 lg:ml-16 lg:w-4/5 xl:w-3/4"
    >
      <div className="flex items-start gap-2 xl:mt-2">
        <Image
          src={image}
          alt="Student Image"
          className="h-25 w-25 rounded-lg object-cover xl:ml-8 xl:h-30 xl:w-30"
        />
        <div className="mt-4">
          <p className="font-vsa-main text-vsa-brown text-lg xl:text-xl">
            {name}
          </p>
          <p className="font-vsa-alt text-sm text-black xl:text-lg">
            {affiliation}
          </p>
        </div>
      </div>

      <div className="w-full p-4">
        <p className="font-vsa-alt text-vsa-brown text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

export default Card;
