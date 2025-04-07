import styles from "./Vertical_stepper_v3.module.css";
const Vertical_stepper_v3 = () => {
  return (
    <div className={styles.wrapper}>
      <ol className={styles.cStepper}>
        <li className={styles.cStepperItem}>
          <div className={`${styles.cStepperContent} position-relative`}>
            <h3 className={styles.cStepperTitle}>Шаг 1</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>
                Войдите в приложение вашего банка, чтобы выполнить платеж
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
                Откройте раздел платежи и выберите другой банк или международные переводы
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
              <p className={styles.cStepperDesc}>В следующем окне введите любые Фамилию Имя
              Получателя и укажите сумму перевода</p>
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
              <p className={styles.cStepperDesc}>Нажмите "Перевести" и дождитесь завершения платежа</p>
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

export default Vertical_stepper_v3;
