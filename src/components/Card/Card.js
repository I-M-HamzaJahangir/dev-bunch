import styles from "./card.module.css";
import { GoHeart } from "react-icons/go";
import Button from "../Button/Button";
const Card = ({
  title,
  type,
  carImg,
  fuel,
  gear,
  space,
  price,
  discount,
  icon1,
  icon2,
  icon3,
  col,
}) => {
  return (
    <>
      <div className={styles.card__wrap}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.card__head}`}
        >
          <div className={styles.card__title}>
            <h6 className="mb-0">{title}</h6>
            <p className={styles.sub__title}>{type}</p>
          </div>
          <div className={`align-self-start ${styles.heart__icon}`}>
            <GoHeart fontSize="20px" />
          </div>
        </div>
        <div className={col ? `${styles.group}` : ""}>
          <div className={styles.card__img}>
            <img src={carImg} alt="" />
          </div>
          <div className={`d-flex align-items-center ${styles.card__details} `}>
            <div className={styles.detail}>
              <span>{icon1}</span>
              <span>{fuel}</span>
            </div>
            <div className={styles.detail}>
              <span>{icon2}</span>
              <span>{gear}</span>
            </div>
            <div className={styles.detail}>
              <span>{icon3}</span>
              <span>{space}</span>
            </div>
          </div>
        </div>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.price__section}`}
        >
          <div className={styles.price}>
            <h6>
              {price} / <span>day</span>
            </h6>
            {discount !== "" && <p className={styles.discount}>{discount}</p>}
          </div>
          <div className={styles.action__btn}>
            <Button text="Rent now" color="#3563e9" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
