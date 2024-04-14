/* eslint-disable react/jsx-key */
import ImageCard from './ImageCard.jsx';
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  if (images.length === 0) {
    return null;
  }

return (
     <ul className={css.imageGallery}>
    {images.map((image) => (
        <li className={css.imageItem}>
          <ImageCard
          key={image.id}
          imageUrl={image.small}
          alt={image.alt}
          onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

 export default ImageGallery;