const ImageCard = ({ image, title }) => {
  return (
    <div className="foto">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ImageCard;
