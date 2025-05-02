import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import App from "../App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
