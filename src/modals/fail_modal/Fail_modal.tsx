import Button_icon from "../../components/button/Button_icon";
import Button_icon_red from "../../components/button/Button_icon_red";
import Close_button from "../../components/button/Close_button";
import Red_cross from "../../components/icons/Red_cross";
import Id_badge from "../../components/id_badge/Id_badge";
import { PaymentForm } from "../../pages/PaymentFormData";
import styles from "./Fail_modal.module.css";

interface Fail_modalProps {
  paymentForm: PaymentForm | null;
}

const Fail_modal = ({ paymentForm }: Fail_modalProps) => {
  return (
    <div className={`${styles.failModal} d-flex flex-column`}>
      <div className={`${styles.modalHeader} position-relative`}>
        <Id_badge id={paymentForm?.operationData.idTransactionMerchant ?? ""} />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Red_cross />
        <div className={`${styles.modalText} d-flex flex-column gap-1 mb-2`}>
          <h3>Ошибка оплаты</h3>
          <p>Платеж не зачислен</p>
        </div>
        <div className={styles.modalCash}>
          <p>{paymentForm?.operationData.amount} рублей</p>
        </div>
        
          <Button_icon_red text="На сайт магазина" onClick={() => {window.location.href = paymentForm?.operationData.redirectFailURL ?? ""}} />
        
        
      </div>
    </div>
  );
};

export default Fail_modal;
