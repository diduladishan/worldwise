import styles from "./CountryItem.module.css";

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CountryItem({ country }) {
  const { cityName, emoji, date } = country;
  return (
    <li className={styles.countryItem}>
      {/* <span>{country.emoji}</span> */}
      <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
