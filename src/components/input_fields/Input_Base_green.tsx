import styles from "./Input_Styles.module.css"

const Input_Base_green = ({title, value}: {title: string, value: string}) => {
  return (
    <div className={`${styles.inputBoxGreen}`}>
      <input type="text" disabled={true} placeholder="Data here....." value={value}/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base_green;
