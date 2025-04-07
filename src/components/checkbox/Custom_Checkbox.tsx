import styles from './Checkbox.module.css';

const Checkbox = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkBoxContainer}>
        <input defaultChecked={true} type="checkbox" />
        <div className={styles.checkmark} />
      </label>
    </div>
  );
}

export default Checkbox;
