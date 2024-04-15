import ImageCard from './ImageCard.jsx';
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.imageItem}>
          <ImageCard
            imageUrl={image.small}
            alt={image.alt}
            onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
