import { useState } from "react";

import Button from "../../components/button/Button";
import Close_button from "../../components/button/Close_button";
import Card from "../../components/icons/Card";
import Spb from "../../components/icons/Spb";
import Check from "../../components/icons/Check";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_icon from "../../components/input_fields/Input_icon";
import Method from "../../components/payment_method/Method";

import styles from "./Refill_methods.module.css";
import Captcha from "../../components/turnstile_captcha/Captcha";
import { PaymentForm } from "../../pages/PaymentFormData";
import Input_Base from "../../components/input_fields/Input_Base";

interface RefillInitialProps {
  paymentForm: PaymentForm | null;
  handleSelectPaymentMethod: (paymentMethod: string) => void;
}

const Refill_methods: React.FC<RefillInitialProps> = ({
  paymentForm,
  handleSelectPaymentMethod,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleInputChange = () => {
    setIsButtonDisabled(false);
  };

  return (
    <div className={styles.refillWindow}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className={styles.methodsHeader}>
          <h3>Пополнение</h3>
          <p>Выберите способ оплаты</p>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge
            id={paymentForm?.operationData.idTransactionMerchant ?? ""}
          />
          <Close_button onClick={() => {}} />
        </div>
      </div>
      <div className="d-flex flex-column gap-3 mb-3">
        {paymentForm?.listAvailablePaymentMethod.includes("toCard") && (
          //Вместо добавления слушателя событий в div передовать функцию через пропс в компонент Method и уде там передовать его в Button для обработки
          <div>
            <Method
              title="Номер карты"
              text="Перевод по номеру карты."
              icon={<Card />}
              selectPayment={() => handleSelectPaymentMethod("toCard")}
            />
          </div>
        )}
        {paymentForm?.listAvailablePaymentMethod.includes("transgran") && (
          <div>
            <Method
              title="Номер карты - Трансгран"
              text="Перевод по номеру карты."
              icon={<Card />}
              selectPayment={() => handleSelectPaymentMethod("transgran")}
            />
          </div>
        )}
        {paymentForm?.listAvailablePaymentMethod.includes("sbp") && (
          <div>
            <Method
              title="СПБ"
              text="Перевод по номеру телефона и названию банка"
              icon={<Spb />}
              selectPayment={() => handleSelectPaymentMethod("sbp")}
            />
          </div>
        )}

        {paymentForm?.listAvailablePaymentMethod.includes("transgranSBP") && (
          <div>
            <Method
              title="СПБ - Трансгран"
              text="Перевод по номеру телефона и названию банка"
              icon={<Spb />}
              selectPayment={() => handleSelectPaymentMethod("transgranSBP")}
            />
          </div>
        )}

        {paymentForm?.listAvailablePaymentMethod.includes("toAccount") && (
          <div>
            <Method
              title="Номер счета"
              text="Перевод по номеру счета"
              icon={<Check />}
              selectPayment={() => handleSelectPaymentMethod("toAccount")}
            />
          </div>
        )}
        <Input_Base
          title="Сумма для перевода"
          value={paymentForm?.operationData.amount.toString()}
          isDisabled={true}
        />
      </div>
      <div className="d-flex flex-column gap-4">
        <div className={styles.captcha}>
          <Captcha setCaptchaVerified={setIsCaptchaVerified} />
        </div>
        <Button 
          text="Продолжить" 
          disabled={isButtonDisabled} 
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Refill_methods;
