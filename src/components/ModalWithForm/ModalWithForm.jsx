import closeButton from "../../assets/closeButton.png";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  handleCloseClick,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={closeButton} alt="close button" className="close__button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            <p className="modal__submit-text">{buttonText}</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
