import "./WeatherCard.css";
import sunnyDay from "../../assets/sunnyDay.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={sunnyDay} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
