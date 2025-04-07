import { useGlobalContext } from "../../context/GlobalContext";
import Button from "../button/Button";
import Custom_Checkbox from "../checkbox/Custom_Checkbox";
// import Card from "../icons/Card";
import styles from "./Method.module.css";

interface MethodProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  selectPayment:()=>void
}

const Method = ({ title, text, icon, selectPayment }: MethodProps) => {

  const { turnstileToken } = useGlobalContext();

  
  return (
    <div className={`${styles.methodContainer} d-flex flex-column`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex justify-content-between align-items-center">
          {icon}
          <span className="ms-2">{title}</span>
        </div>
        
        {/* <div className={`${styles.button} ${turnstileToken ? "" : styles.disabled}`}>Выбрать</div> */}

        {/* Использовал кастомный UI компонент Button */}

        <Button text="Выбрать" disabled={!turnstileToken} onClick={selectPayment}/>
      </div>
      <div className="text-start">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Method;
