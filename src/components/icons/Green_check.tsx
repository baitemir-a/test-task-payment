import styles from "./Icons.module.css";

const Green_check = () => {
  return (
    <div className={styles.checkIconContainer}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9287 25.2236L7.7455 18.0404C7.2155 17.5104 6.35621 17.5104 5.82621 18.0404C5.29621 18.5704 5.29621 19.4296 5.82621 19.9596L13.9691 28.1025C14.4991 28.6325 15.3584 28.6325 15.8884 28.1025L32.1741 11.8168C32.7041 11.2868 32.7041 10.4275 32.1741 9.8975C31.6441 9.3675 30.7848 9.3675 30.2548 9.8975L14.9287 25.2236Z"
          fill="#61B469"
        />
      </svg>
    </div>
  );
};

export default Green_check;
