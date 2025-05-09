import "./ItemModal.css";
import closeButton from "../../assets/closeButtonWhite.png";

function ItemModal({ handleCloseClick, activeModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content item__modal_content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={closeButton} alt="close button" className="close__button" />
        </button>
        <img src={card.link} alt="outfit image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
