import Shopping_cart from "../icons/Shopping_cart"
import styles from "./Button.module.css"

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button_icon_red = ({text, onClick}: ButtonProps) => {
  return (
    <button className={`${styles.buttonIconRed} d-flex align-items-center justify-content-center`} onClick={onClick}>
        <Shopping_cart />
        <p>{text}</p>
    </button>
  )
}

export default Button_icon_red