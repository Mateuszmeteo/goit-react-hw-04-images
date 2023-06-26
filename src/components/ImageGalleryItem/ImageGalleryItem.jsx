
import css from './imageGalleryItem.module.css'


export const ImageGalleryItem = ({ image, onClick }) => {
    const handleClick = () => {
      onClick(image);
    };
  
    return (
      <li className={css.imageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.id}
          className={css.imageGalleryItemImage}
          onClick={handleClick}
        />
      </li>
    );
  };
  








///==========================================================//////////===============================================

// export const ImageGalleryItem = ({src, alt}) => {

//     return(
//         <li class="gallery-item">
//             <img src={src} alt={alt} />
//         </li>
//     )
// }