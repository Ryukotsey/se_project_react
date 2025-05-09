import "./Header.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { currentDate } from "../../utils/constants";

function Header({ handleAddClick, weatherData }) {
  return (
    <header className="header">
      <img alt="header logo" src={logo} className="header__logo"></img>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
