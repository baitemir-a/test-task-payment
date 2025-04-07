import styles from "./Captcha.module.css";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useGlobalContext } from '../../context/GlobalContext';

interface CaptchaProps {
  setCaptchaVerified: (verified: boolean) => void;
}

const Captcha = ({ setCaptchaVerified }: CaptchaProps) => {

  const { turnstileToken, setTurnstileToken } = useGlobalContext();

  const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY;

  const turnstile = useTurnstile();

  return (
    <Turnstile
      className={styles.captcha}
      size="flexible"
      // Вместо того чтобы напрямую писать sitekey, вынесем его в .env файл и в зависимости в каком режиме запускаем использовать нужный ключ
      // 
      sitekey={sitekey}
      onVerify={(token: string) => {
        setTurnstileToken(token)
        setCaptchaVerified(true)
      }}
    />
  );
};

export default Captcha;
