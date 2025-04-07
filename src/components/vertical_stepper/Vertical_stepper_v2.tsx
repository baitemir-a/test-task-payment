import { PaymentForm } from "../../pages/PaymentFormData";
import Input_icon from "../input_fields/Input_icon";
import styles from "./Vertical_stepper.module.css";

interface Vertical_stepperProps {
  paymentForm: PaymentForm | null;
}

const Vertical_stepper_v2 = ({paymentForm}: Vertical_stepperProps) => {
  return (
    <ol className={styles.stepper}>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>
          Скопируйте реквизиты номера счета
          </h3>
        </div>
      </li>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>
          В Окне “Назначение перевода” необходимо прописать “Перевод”, тип перевода - “Другое”
          </h3>
        </div>
      </li>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>
          Переведите по номеру счета 
          </h3>
          <Input_icon 
            title="Номер счета"
            value={paymentForm?.operationData.paymentDetailsData.number ?? ""}
          />
        </div>
      </li>
      
    </ol>
  );
};

export default Vertical_stepper_v2;
