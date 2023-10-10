import Card from "../Card/Card";
import styles from "./recomended.module.css";
import cardData from "./cardData";
import Button from "../Button/Button";
const Recommended = () => {
  return (
    <section className={styles.recommended__wrap}>
      <div className="container">
        <div
          className={`d-flex justify-content-between align-items-center ${styles.section__head}`}
        >
          <span>Recommendation Car</span>
        </div>
        <div className={styles.recommended__section}>
          {cardData?.map((card, index) => {
            return <Card key={index} {...card} col={true} />;
          })}
        </div>
        <div className="text-center " style={{ marginBlock: "80px" }}>
          <Button text="show more car" />
        </div>
      </div>
    </section>
  );
};

export default Recommended;
