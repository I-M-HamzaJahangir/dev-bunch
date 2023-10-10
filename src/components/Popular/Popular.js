import styles from "./popular.module.css";
import Card from "../Card/Card";
import cardData from "./popularCarData";
const Popular = () => {
  return (
    <section>
      <div className="container">
        <div
          className={`d-flex justify-content-between align-items-center ${styles.section__head}`}
        >
          <span>Popular Car</span>
          <a href="#" className="text-decoration-none">
            View All
          </a>
        </div>

        <div className={styles.card__container}>
          {cardData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Popular;
