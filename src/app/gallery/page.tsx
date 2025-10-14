import Card from "@/components/gallery/Card";
import VSAIcon from "@/public/VSA_logo.svg";

const Gallery = () => {
  return (
    <div className="">
      Gallery
      <Card
        title="test"
        link="/gallery"
        leftimage={VSAIcon}
        leftalt="left logo"
        rightimage={VSAIcon}
        rightalt="right logo"
      />
    </div>
  );
};

export default Gallery;
