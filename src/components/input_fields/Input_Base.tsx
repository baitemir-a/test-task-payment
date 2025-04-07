import styles from "./Input_Styles.module.css"

interface InputBaseProps {
  title: string;
  isDisabled?: boolean;
  onChange?: () => void;
  value?: string;
}

const Input_Base = ({title, isDisabled, onChange, value}: InputBaseProps) => {
  return (
    <div className={`${styles.inputBox} ${isDisabled ? styles.grey : ''}`}>
      <input type="text" placeholder="Data here....." disabled={true} value={value}/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base;
  