
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './imagineGalerry.module.css'


export const ImageGallery = ({ images, onImageClick }) => {
    return (
      <ul className={css.imageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onImageClick}
          />
        ))}
      </ul>
    );
  };


