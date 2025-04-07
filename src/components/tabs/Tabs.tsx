import { useState } from "react";
import styles from "./Tabs.module.css";


interface TabsProps {
  setActiveTabProps: (tab: string) => void;
}

const Tabs = ({ setActiveTabProps }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveTabProps(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            activeTab === "stepTBank" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("stepTBank")}
        >
          T-Банк
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "stepAlpha" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("stepAlpha")}
        >
          Альфа
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "stepVtb" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("stepVtb")}
        >
          ВТБ
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "stepOtherBank" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("stepOtherBank")}
        >
          Другой банк
        </div>
      </div>  
    </div>
  );
};

export default Tabs;
