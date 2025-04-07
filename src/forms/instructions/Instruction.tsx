// import Button_green from "../../components/button/Button_green";
// import Close_button from "../../components/button/Close_button";
import Info_circle_green from "../../components/icons/Info_circle_green";
import Tabs from "../../components/tabs/Tabs";
import Vertical_stepper_transgran from "./Vertical_stepper_transgran";
import styles from "./Instruction.module.css";
import { useState } from "react";

const Instruction = () => {

  const stepTBank = [
    "Откройте приложение или сайт Т-Банка",
    "Зайдите на страницу переводов",
    "Выберите способ перевода: По номеру карты и вставьте номер карты",
    "Введите указанную сумму. Важно переводить именно указанную сумму",
    "Сделайте перевод и ожидайте зачисления денег в течении 1-5 минут"
  ];

  const stepSber = [
    "Временно не обрабатываются международные платежи, попробуйте с другого банка"
  ]

  const stepAlpha = [
    "Откройте приложение или сайт Альфа-банк",
    "Зайдите в раздел Платежи - По номеру карты",
    "Запоняем номер карты получателя - Продолжить",
    "Вводим сумму - и нажимаем Отправить",
    "Ожидайте зачисления денег в течении 1-5 минут"
  ]

  const stepVtb = [
    "Зайдите в приложение ВТБ - Главный экран - Платежи",
    "Выберите В другую страну - Абхазия",
    "Выбираем по номеру карты - вводим карту получателя - Продолжить",
    "Вводим фамилию, имя и сумму - Продолжить - Перевести",
    "Ожидайте зачисления денег в течении 1-5 минут"
  ]

  const stepOtherBank = [
    "Откройте приложение или сайт банка",
    "Зайдите на страницу переводов",
    "Выберите способ перевода: По номеру карты и вставьте номер карты который выдался",
    "В зависимости банка, возможно, нужно указать перевод в другую страну",
    "Введите указанную сумму. Важно переводить именно указанную сумму",
    "Сделайте перевод и ожидайте зачисления денег в течении 1-5 минут"
  ] 

  const getSteps = () => {
    if (activeTab === "stepTBank") {
      return stepTBank;
    } else if (activeTab === "stepSber") {
      return stepSber;
    } else if (activeTab === "stepAlpha") {
      return stepAlpha;
    } else if (activeTab === "stepVtb") {
      return stepVtb;
    } else if (activeTab === "stepOtherBank") {
      return stepOtherBank;
    }
  }

  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <div className={`${styles.instruction} `}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <Info_circle_green />
          <p>Инструкция по оплате</p>
        </div>
        {/* <Close_button onClick={() => {}} /> */}
      </div>

    <div>
      СБЕР Временно не обрабатываются международные платежи, попробуйте с другого банка
      </div>

      <div
        className={`${styles.instructionContainer} d-flex flex-column gap-2 mb-3`}
      >
        <div className={`${styles.instructionTabsContainer}`}>
          <Tabs setActiveTabProps={(tab: string) => setActiveTab(tab)} />
        </div>
        <div className={`${styles.instructionStepperContainer}`}>
          <Vertical_stepper_transgran steps={getSteps()} />
        </div>
      </div>
      {/* <Button_green /> */}  
    </div>
  );
};

export default Instruction;

