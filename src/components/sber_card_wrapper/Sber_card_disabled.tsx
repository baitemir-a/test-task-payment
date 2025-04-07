import Sber_dark from "../icons/sber/Sber_dark"
import Visa_dark from "../icons/visa/Visa_dark"
import Mir from "../icons/Mir"
import Mastercard_dark from "../icons/mastercard/Mastercard_dark"
import styles from "./Sber_card.module.css"

interface SberCardDisabledProps {
  children: React.ReactNode;
}

const Sber_card_disabled = ({children}: SberCardDisabledProps) => {
  return (
    <div className={`${styles.sberCardDisabledWrapper} mb-3`}>
        <div className={`${styles.cardHeader} d-flex justify-content-between align-items-center mb-4`}>
            <Sber_dark />
            <div className="d-flex justify-content-between align-items-center gap-2">
                <Mir />
                <Visa_dark />
                <Mastercard_dark />
            </div>
        </div>
        {children}
    </div>
  )
}
 
export default Sber_card_disabled
