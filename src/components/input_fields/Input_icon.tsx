import styles from "./Input_Styles.module.css";

interface InputIconProps {
  title: string;
  isDisabled?: boolean;
  value: string;
}

const Input_icon = ({ title, isDisabled, value }: InputIconProps) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
      .catch(err => console.error('Ошибка при копировании:', err));
  };


  return (
    <div className={`${styles.inputBox} ${isDisabled ? styles.grey : ''}`}>
      <input type="text"  placeholder="data here....." disabled={true} value={value} />
      <span>{title}</span>
      <svg
        className={`${styles.inputIcon} position-absolute`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
         onClick={handleCopy}
        style={{ cursor: 'pointer' }}
      >
        <path
          d="M13.3333 10.75V14.25C13.3333 17.1667 12.1667 18.3333 9.25 18.3333H5.75C2.83333 18.3333 1.66666 17.1667 1.66666 14.25V10.75C1.66666 7.83334 2.83333 6.66667 5.75 6.66667H9.25C12.1667 6.66667 13.3333 7.83334 13.3333 10.75Z"
          fill="#C5C2D2"
        />
        <path
          d="M14.25 1.66667H10.75C8.24655 1.66667 7.03841 2.53232 6.74595 4.61575C6.66853 5.16726 7.13 5.62501 7.68691 5.62501H9.25C12.75 5.62501 14.375 7.25 14.375 10.75V12.3131C14.375 12.87 14.8328 13.3315 15.3843 13.2541C17.4677 12.9616 18.3333 11.7535 18.3333 9.25001V5.75001C18.3333 2.83334 17.1667 1.66667 14.25 1.66667Z"
          fill="#C5C2D2"
        />
      </svg>
    </div>
  );
};

export default Input_icon;
