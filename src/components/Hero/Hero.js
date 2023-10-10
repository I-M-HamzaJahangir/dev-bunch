import styles from "./hero.module.css";
import Button from "../Button/Button";
import carData from "./carData";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={styles.hero__section}>
      <div className="container">
        <div className="row g-4">
          {carData?.map(
            (
              { id, imageSrc, heading, description, buttonText, buttonColor },
              index
            ) => (
              <div
                className={`col  ${isMobile && index > 0 ? "d-none" : ""}`}
                key={id}
              >
                <div className={styles.content__wrap}>
                  <img src={imageSrc} alt="Car Here" />
                  <div className={styles.content}>
                    <h3 className="mb-0">{heading}</h3>
                    <p className="mb-0">{description}</p>
                    <Button text={buttonText} color={buttonColor} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
