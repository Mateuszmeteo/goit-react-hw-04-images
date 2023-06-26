
export const ImageGalleryItem = ({ image, onClick }) => {
    const handleClick = () => {
      onClick(image);
    };
  
    return (
      <li className="gallery-item">
        <img
          src={image.webformatURL}
          alt={image.id}
          className="gallery-image"
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