
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, onImageClick }) => {
    return (
      <ul className="gallery">
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






//===========================/////////////////////====================






// export const ImageGallery = ({ children }) => {
//     return <ul className="gallery">{children}</ul>;
//   };











//////==========================================//////////////////=====================================
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

// export const ImageGallery = () => {

//     const images = [
//         {id: 1,src: "ścieżka1.jpg",alt: "jpg1"},
//         {id: 2,src: "ścieżka2.jpg",alt: "jpg2"},
//     ]

//     return (
//         <ul class="gallery">
//             {/* <!-- Zbiór <li> z obrazami --> */}
//             {images.map((image) => (
//                 <ImageGalleryItem key={image.id} src={image.src} alt={image.alt} />
//             ))}

//         </ul>
//     )
// }