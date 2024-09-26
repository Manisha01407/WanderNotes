import { Link } from "react-router-dom";
import style from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export default function Cityitem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${style.cityItem} ${
          id === currentCity.id ? style["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={style.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={style.name}>{cityName}</h3>
        <time className={style.date}>{formatDate(date)}</time>
        <button className={style.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
