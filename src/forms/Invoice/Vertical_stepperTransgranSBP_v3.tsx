import styles from "./Vertical_stepper_v3.module.css";
const Vertical_stepperTransgranSBP_v3 = () => {
  return (

//     ﻿﻿1.Откройте приложение или сайт Т-Банка
// ﻿﻿﻿2.Зайдите на страницу переводов
// ﻿﻿﻿3.Выберите способ перевода: "по номеру телефона" и вставьте
// «номер который выдался»
// ﻿﻿﻿4.Введите «указанную сумму». Важно переводить именно указанную сумму
// ﻿﻿﻿5.Сделайте перевод
// ﻿﻿﻿6.Ожидайте поступления



    <div className={styles.wrapper}>
      <ol className={styles.cStepper}>
        <li className={styles.cStepperItem}>
          <div className={`${styles.cStepperContent} position-relative`}>
            <h3 className={styles.cStepperTitle}>Шаг 1</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>
Перевод можно сделать только через T-Банк (Тинькофф). Зайдите в приложение банка
              </p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>
        <li className={styles.cStepperItem}>
          <div className={`${styles.cStepperContent} position-relative`}>
            <h3 className={styles.cStepperTitle}>Шаг 2</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>
              Откройте вкладку «перевести»
              </p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>
        <li className={styles.cStepperItem}>
          <div className={styles.cStepperContent}>
            <h3 className={styles.cStepperTitle}>Шаг 3</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>Выберите метод - «по номеру телефона»</p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>
        <li className={styles.cStepperItem}>
          <div className={styles.cStepperContent}>
            <h3 className={styles.cStepperTitle}>Шаг 4</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>Скопируйте номер из формы оплаты и вставьте</p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>


        <li className={styles.cStepperItem}>
          <div className={styles.cStepperContent}>
            <h3 className={styles.cStepperTitle}>Шаг 5</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>Выберете банк указанный в форме оплаты</p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>

        <li className={styles.cStepperItem}>
          <div className={styles.cStepperContent}>
            <h3 className={styles.cStepperTitle}>Шаг 6</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>Скопируйте и вставьте сумму перевода из формы и нажмите перевести</p>
              <svg
                className={styles.stepperDescIcon}
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.573484 5.87418C-0.112326 5.49317 -0.112328 4.50687 0.573481 4.12586L8 -3.93402e-07L8 10L0.573484 5.87418Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
          </div>
        </li>


      </ol>
    </div>
  );
};

export default Vertical_stepperTransgranSBP_v3;
