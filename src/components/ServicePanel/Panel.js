import styles from "./panel.module.css";
const Panel = () => {
  return (
    <div className={styles.panel__wrap}>
      <div className={styles.label}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Pick-Up
          </label>
        </div>
      </div>
      <div className={styles.options__wrap}>
        <div className={styles.option}>
          <div className="fw-bold">Location</div>
          <select
            className="form-select ps-0"
            aria-label="Default select example"
          >
            <option hidden selected>
              Select your city
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <hr />
        <div className={styles.option}>
          <div className="fw-bold">Date</div>
          <select
            className="form-select ps-0"
            aria-label="Default select example"
          >
            <option hidden selected>
              Select your date
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <hr />
        <div className={styles.option}>
          <div className="fw-bold">Time</div>
          <select
            className="form-select ps-0"
            aria-label="Default select example"
          >
            <option hidden selected>
              Select your time
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Panel;
