import Sber_light from "../icons/sber/Sber_light"
import Visa_light from "../icons/visa/Visa_light"
import Mastercard_light from "../icons/mastercard/Mastercard_light"
import styles from "./Sber_card.module.css"

interface SberCardProps {
  children: React.ReactNode;
}

const Sber_card = ({children}: SberCardProps) => {
  return (
    <div className={`${styles.sberCardWrapper} mb-3`}>
        <div className={`${styles.cardHeader} d-flex justify-content-between align-items-center mb-4`}>
            {/* <Sber_light />
            <div className="d-flex justify-content-between align-items-center gap-2">
                <Visa_light />
                <Mastercard_light />
            </div> */}
        </div>
        {children}
    </div>
  )
}
 
export default Sber_card
