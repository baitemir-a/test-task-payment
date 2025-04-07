import Shopping_cart from "../icons/Shopping_cart"
import styles from "./Button.module.css"

interface ButtonIconProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button_icon = ({text, onClick, disabled }: ButtonIconProps) => {
  return (
    <button className={`${styles.buttonIcon} ${disabled ? styles.disabled : ""} d-flex align-items-center justify-content-center`} onClick={onClick}>
        <Shopping_cart />
        <p>{text}</p>
    </button>
  )
}

export default Button_icon