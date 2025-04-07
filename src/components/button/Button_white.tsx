import styles from "./Button.module.css";

const Button_white = ({ text, onClick }: { text: string, onClick: () => void }) => {
  return (
    <button
      className={`${styles.buttonWhite} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button_white;
