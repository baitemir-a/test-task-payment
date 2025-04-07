import styles from "./Vertical_stepper_transgran.module.css";
import Step from "./Step";

interface Vertical_stepper_v3Props {
  steps: string[] | undefined;
}

const Vertical_stepper_transgran = ({ steps }: Vertical_stepper_v3Props) => {
  return (
    <div className={styles.wrapper}>
      <ol className={styles.cStepper}>
        {steps && steps.map((step, index) => (
          <Step key={index} stepIndex={index + 1} description={step} />
        ))}
      </ol>
    </div>
  );
};

export default Vertical_stepper_transgran;
