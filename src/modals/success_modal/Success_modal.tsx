import Button_icon from "../../components/button/Button_icon";
import Close_button from "../../components/button/Close_button";
import Green_check from "../../components/icons/Green_check";
import Id_badge from "../../components/id_badge/Id_badge";
import { PaymentForm } from "../../pages/PaymentFormData";

import styles from "./Success_modal.module.css";

interface Success_modalProps {
  paymentForm: PaymentForm | null;
} 

const Success_modal = ({paymentForm}: Success_modalProps) => {
  return (
    <div className={`${styles.successModal} d-flex flex-column`}>
      <div className={`${styles.modalHeader} position-relative`}>
      <Id_badge id={paymentForm?.operationData.idTransactionMerchant ?? ""} />  
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Green_check />
        <div className={`${styles.modalText} d-flex flex-column gap-1 mb-2`}>
          <h3>Счет оплачен</h3>
          <p>Платеж зачислен</p>
        </div>
        <div className={styles.modalCash}>
            <p>+ {paymentForm?.operationData.amount} рублей</p>
        </div>
        <Button_icon text="На сайт магазина" onClick={() => {window.location.href = paymentForm?.operationData.redirectSuccessURL ?? ""}}/>
      </div>
    </div>
  );
};

export default Success_modal;
