import { useState } from "react";
import Button from "../../components/button/Button";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_Base from "../../components/input_fields/Input_Base";
import styles from "./Refill.module.css";
import Input_left_icon from "../../components/input_fields/Input_left_icon";
import Spb from "../../components/icons/Spb";
import Captcha from "../../components/turnstile_captcha/Captcha";
import { PaymentForm } from "../../pages/PaymentFormData";

interface RefillInitialProps {
  paymentForm: PaymentForm | null;
  getSelectPaymentMethod: () => void;
}

const Refill_initial: React.FC<RefillInitialProps> = ({ paymentForm, getSelectPaymentMethod }) => {

  //Переименовал state для логичного использования
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = () => {
    // setIsButtonEnabled(true);
  };

  return (
    <div className={styles.refillWindow}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={paymentForm?.operationData.idTransactionMerchant ?? ""} />
          <Close_button onClick={() => {}} />
        </div>
      </div>
      <div className="d-flex flex-column gap-4 mb-3">
        <Input_Base
          title="Сумма для перевода"
          value={paymentForm?.operationData.amount.toString()}
          onChange={handleInputChange} 
          isDisabled={!isButtonEnabled}
        />
        <Input_Base
          title="Название магазина"
          value={paymentForm?.operationData.redirectGeneralURL ?? ""}
          isDisabled={!isButtonEnabled}
          onChange={handleInputChange} 
        />
        {paymentForm?.operationData.status !== 'created' && (
          <Input_left_icon
            icon={<Spb />}
            title="Метод оплаты"
          />
        )}
      </div>
      <div className="d-flex flex-column gap-3">
          <Captcha setCaptchaVerified={setIsButtonEnabled} />
        {/* перевернул булевое значение аттрибута disabled для правильного отображения кнопки */}
        <Button 
          text="Получить реквизиты" 
          disabled={!isButtonEnabled} 
          onClick={getSelectPaymentMethod}
        />
      </div>
    </div>
  );
};

export default Refill_initial;
