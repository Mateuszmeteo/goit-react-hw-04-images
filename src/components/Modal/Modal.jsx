
  import React, { Component } from "react";
    import css from "./modal.module.css";
    
    export class Modal extends Component {
      componentDidMount() {
        document.addEventListener("keydown", this.handleEscapeKey);
      }
    
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEscapeKey);
      }
    
      handleEscapeKey = (event) => {
        if (event.key === "Escape") {
          this.props.onClose();
        }
      };
    
      handleClose = () => {
        this.props.onClose();
      };
    
      render() {
        const { selectedImage } = this.props;
    
        return (
          <div
            className={css.overlay}
            onClick={this.handleClose}
            role="presentation"
          >
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={this.handleClose}>
                X
              </button>
              {selectedImage && (
                <img src={selectedImage.webformatURL} alt={selectedImage.id} />
              )}
            </div>
          </div>
        );
      }
    }

    /////////=============================////////////////////////////=============================/////////////////////
// import css from './modal.module.css'


// export const Modal = ({ onClose, selectedImage }) => {
//     const handleClose = () => {
//         onClose();
//       };
    
//       return (
//         <div className={css.overlay}>
//           <div className={css.modal}>
//             <button className="close-button" onClick={handleClose}>
//               X
//             </button>
//             {selectedImage && (
//               <img src={selectedImage.webformatURL} alt={selectedImage.id} />
//             )}
//           </div>
//         </div>
//       );
//     };

  