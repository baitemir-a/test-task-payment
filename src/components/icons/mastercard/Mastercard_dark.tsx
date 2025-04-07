import styles from "./Mastercard.module.css";

const Mastercard_dark = () => {
  return (
    <div className={`${styles.mastercard}`}>
      <svg
        width="26px"
        height="13px"
        viewBox="0 0 26 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6.5" cy="6.5" r="6.5" fill="#7F7A95" fillOpacity="0.7" />

        <circle cx="15" cy="6.5" r="6.5" fill="#7F7A95" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export default Mastercard_dark;
