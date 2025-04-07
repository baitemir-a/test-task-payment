import { useState } from 'react';
import styles from './Collapsible.module.css';
import Arrow_down from '../icons/Arrow_down';
import Arrow_up from '../icons/Arrow_up';

interface CollapsibleProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Collapsible = ({ title, icon, children }: CollapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true); 

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev); 
  };

  return (
    <div className={styles.collapsible}>
      <div className={styles.header} onClick={toggleCollapse}>
        <div className='d-flex justify-content-between align-items-center gap-2'>
        {icon}
        <h3 className={styles.title}>{title}</h3>
        </div>
        <span className={styles.arrow}>{isCollapsed ? <Arrow_down /> : <Arrow_up />}</span> 
      </div>
      <div className={styles.content} style={{ display: isCollapsed ? 'none' : 'block' }}>
        {children} 
      </div>
    </div>
  );
};

export default Collapsible;
