import Close_button from "../../components/button/Close_button";
import Input_icon from "../../components/input_fields/Input_icon";
import Countdown from "../../components/countdown/Countdown";
import Id_badge from "../../components/id_badge/Id_badge";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Sber_card from "../../components/sber_card_wrapper/Sber_card";
import Shop from "../../components/icons/Shop";
import Wallet from "../../components/icons/Wallet";
import Button from "../../components/button/Button";
import Collapsible from "../../components/collapsible/Collapsible";
import Vertical_stepper_v3 from "./Vertical_stepper_v3";
import Info_wavy from "../../components/icons/Info_wavy";
import Input_icon_green from "../../components/input_fields/Input_icon_green";


import styles from "./Invoice.module.css";
import { PaymentForm } from "../../pages/PaymentFormData";
import Instruction from "../instructions/Instruction";

interface InvoiceTransgranProps {
  paymentForm: PaymentForm | null;
  checkPayment: () => void;
}

const InvoiceTransgran: React.FC<InvoiceTransgranProps> = ({ paymentForm, checkPayment }) => {
  return (
    <div className={`${styles.refillWindow}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className={`${styles.invoiceHeader} d-flex flex-column`}>
          <p>Перевод с карты на карту</p>
          <h3>Счет на оплату</h3>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={paymentForm?.operationData.idTransactionMerchant ?? ""} />
        </div>
      </div>

      <div className="d-flex flex-column gap-3 mb-3">
        <Input_icon title="Сумма для перевода" value={paymentForm?.operationData.amount.toString() ?? ""} />
        <div
          className={`${styles.shopIconContainer} d-flex align-items-center gap-2`}
        >
          <div>
            <Shop />
          </div>
          <strong>{paymentForm?.operationData.redirectGeneralURL}</strong>
        </div>
        <div
          className={`${styles.walletIconContainer} d-flex align-items-center gap-2`}
        >
          <Wallet />
          <strong>
            Оплатите <span>ровно {paymentForm?.operationData.amount} </span>одним переводом
          </strong>
        </div>
      </div>

      <Sber_card>
        <div className="d-flex flex-column gap-3">
          <Input_icon_green title="Номер карты получателя" value={paymentForm?.operationData.paymentDetailsData.number ?? ""} />
          {paymentForm?.operationData.paymentDetailsData.nameMediator !== null && paymentForm?.operationData.paymentDetailsData.nameMediator !== "" && 
          <Input_icon_green title="Имя получателя" value={paymentForm?.operationData.paymentDetailsData.nameMediator ?? ""} />}
        </div>
      </Sber_card>

      <div className=" d-flex align-items-center gap-3 mb-3">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Animated_spinner />
          <div className={`${styles.countdownContainer}`}>
            <p>Мы ожидаем ваш платеж</p>
            <Countdown minutes={9} />
          </div>
        </div>
        <div className={`${styles.invoicePaidButtonContainer}`}>
          <Button text="Оплачено" onClick={checkPayment} disabled={false} />
        </div>
      </div>

      {/* <Vertical_stepper_v3/> */}

      <Instruction />

      {/* <Collapsible icon={<Info_wavy />} title="Инструкция по оплате">
        <Vertical_stepper_v3/>
      </Collapsible> */}
    </div>
  );
};

export default InvoiceTransgran;
