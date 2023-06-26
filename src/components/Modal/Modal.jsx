


export const Modal = ({ onClose, children }) => {
    const handleClose = () => {
        onClose();
      };
    
      return (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            {children}
          </div>
        </div>
      );
    };
