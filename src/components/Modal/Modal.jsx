
import css from './modal.module.css'


export const Modal = ({ onClose, children }) => {
    const handleClose = () => {
        onClose();
      };
    
      return (
        <div className={css.overlay}>
          <div className={css.modal}>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            {children}
          </div>
        </div>
      );
    };
