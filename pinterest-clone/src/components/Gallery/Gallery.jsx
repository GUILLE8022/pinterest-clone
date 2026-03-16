import ImageCard from "../ImageCard/ImageCard";
import "./gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">

      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}

    </div>
  );
};

export default Gallery;