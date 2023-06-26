
import css from './modal.module.css'


export const Modal = ({ onClose, selectedImage, children }) => {
    const handleClose = () => {
        onClose();
      };
    
      return (
        <div className={css.overlay}>
          <div className={css.modal}>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            {/* {selectedImage && (
              <img src={selectedImage.largeformatURL} alt={selectedImage.id} />
            )} */}
            {children}
          </div>
        </div>
      );
    };
