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
          src={image.user.profile_image.medium}
          alt={image.user.name}
        />

        <div>
          <p>{image.user.name}</p>
          <span>{image.created_at.slice(0,10)}</span>
        </div>

      </div>

    </div>
  );
};

export default ImageCard;