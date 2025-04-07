import styles from "./Vertical_stepper_transgran.module.css";

interface StepProps {
  stepIndex: number;
  description: string;
}

const Step = ({stepIndex, description }: StepProps) => {
  return (
    <li className={styles.cStepperItem}>
      <div className={`${styles.cStepperContent} position-relative`}>
            <h3 className={styles.cStepperTitle}>Шаг {stepIndex}</h3>
            <div className={styles.cStepperDescWrapper}>
              <p className={styles.cStepperDesc}>
                {description}
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
  );
};

export default Step;
