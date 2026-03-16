import "./imagecard.css";

const ImageCard = ({ image }) => {

  return (
    <div className="card">

      <img
        src={image.urls.small}
        alt={image.alt_description}
      />

      <div className="user">

        <img
          src={image.user.profile_image.small}
          alt={image.user.name}
        />

        <p>{image.user.name}</p>

      </div>

    </div>
  );
};

export default ImageCard;