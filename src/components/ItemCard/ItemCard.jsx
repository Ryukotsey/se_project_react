import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__text">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item-card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
