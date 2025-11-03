import Card from "@/components/gallery/Card";
import { galleryEvents } from "@/data/Galleries/mainGalleryInfo";

const Gallery = () => {
  return (
    <div className="m-10 grid place-items-center gap-10">
      <div className="text-center">
        <p className="font-vsa-main text-vsa-green-400 m-5 text-5xl font-bold">
          Events Gallery
        </p>
        <p className="font-vsa-alt">
          A gallery to display all our former major events!
        </p>
      </div>
      {galleryEvents.map(
        ({ title, link, leftimage, leftalt, rightimage, rightalt }, index) => (
          <Card
            key={index}
            title={title}
            link={link}
            leftimage={leftimage}
            leftalt={leftalt}
            rightimage={rightimage}
            rightalt={rightalt}
          />
        ),
      )}
    </div>
  );
};

export default Gallery;
