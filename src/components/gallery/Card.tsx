import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface props {
  title: string;
  link: string;
  leftimage: StaticImageData;
  rightimage: StaticImageData;
  leftalt: string;
  rightalt: string;
}

const Card = ({
  title,
  link,
  leftimage,
  leftalt,
  rightimage,
  rightalt,
}: props) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-2/3">
      <div className="bg-vsa-green-300 border-vsa-green-400 flex w-full md:w-1/5 place-items-center rounded-l-2xl md:rounded-t-none md:rounded-l-2xl border-3 p-4 md:p-7 text-center text-white">
        <Link
          href={link}
          className="font-vsa-main text-xl md:text-4xl font-black hover:underline"
        >
          click here to see full gallery
          <p className="font-vsa-alt text-center text-2xl md:text-5xl font-black italic">
            →
          </p>
        </Link>
      </div>
      <div className="bg-vsa-yellow-100 border-vsa-green-400 w-full md:w-4/5 rounded-b-2xl md:rounded-r-2xl border-3 border-t-0 md:border-l-0 p-4 md:p-9">
        <p className="font-vsa-main text-vsa-pink-300 pb-3 md:pb-5 text-2xl md:text-5xl font-black">
          {title}
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Image
            src={leftimage}
            alt={leftalt}
            className="border-vsa-green-400 aspect-square w-full md:w-1/2 border-3 object-cover"
          />
          <Image
            src={rightimage}
            alt={rightalt}
            className="border-vsa-green-400 aspect-square w-full md:w-1/2 border-3 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// interface props {
//   title: string;
//   link: string;
//   leftimage: StaticImageData;
//   rightimage: StaticImageData;
//   leftalt: string;
//   rightalt: string;
// }
// const Card = ({
//   title,
//   link,
//   leftimage,
//   leftalt,
//   rightimage,
//   rightalt,
// }: props) => {
//   return (
//     <div className="flex w-2/3">
//       <div className="bg-vsa-green-300 border-vsa-green-400 flex w-1/5 place-items-center rounded-l-2xl border-3 p-7 text-center text-white">
//         <Link
//           href={link}
//           className="font-vsa-main text-4xl font-black hover:underline"
//         >
//           click here to see full gallery
//           <p className="font-vsa-alt text-center text-5xl font-black italic">
//             →
//           </p>
//         </Link>
//       </div>
//       <div className="bg-vsa-yellow-100 border-vsa-green-400 w-4/5 rounded-r-2xl border-3 border-l-0 p-9">
//         <p className="font-vsa-main text-vsa-pink-300 pb-5 text-5xl font-black">
//           {title}
//         </p>
//         <div className="inline-flex gap-4">
//           <Image
//             src={leftimage}
//             alt={leftalt}
//             className="border-vsa-green-400 aspect-square w-1/2 border-3 object-cover"
//           />
//           <Image
//             src={rightimage}
//             alt={rightalt}
//             className="border-vsa-green-400 aspect-square w-1/2 border-3 object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;