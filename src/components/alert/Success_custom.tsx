import styles from "./Success_custom.module.css"

const Success_custom = ({text, icon}: {text: string, icon: React.ReactNode}) => {
  return (
    <div className={`${styles.success_custom} d-flex align-items-center mb-2`}>
        {icon}
        <span className="ms-2">{text}</span>
    </div>
  )
}

export default Success_custom