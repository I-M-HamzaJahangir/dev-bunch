import styles from "./selectpanel.module.css";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import Panel from "./Panel";
const SelectPanels = () => {
  return (
    <section className={styles.panel__section}>
      <div className="container">
        <div className={styles.panel__wrapper}>
          <div>
            <Panel />
          </div>
          <div>
            <Panel />
          </div>
          <div className={styles.updown__arrow}>
            <HiOutlineArrowsUpDown />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SelectPanels;
