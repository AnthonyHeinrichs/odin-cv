import styles from "../styles/Form.module.css";

const FormEducation = () => {
  return (
    <>
      <h3 className={styles.educationTitle}>Education</h3>
      <div className={styles.education}>
        <div className={styles.schoolDates}>
          <label for="schoolFrom"></label>
          <input
            id="schoolFrom"
            type="text"
            name="schoolFrom"
            placeholder="From"
          ></input>
          <div className={styles.line}></div>
          <label for="schoolTo"></label>
          <input
            id="schoolTo"
            type="text"
            name="schoolTo"
            placeholder="To"
          ></input>
        </div>
        <label for="school"></label>
        <input
          id="school"
          type="text"
          name="school"
          placeholder="School"
        ></input>
        <label for="location"></label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Location"
        ></input>
        <label for="degree"></label>
        <input
          id="degree"
          type="text"
          name="degree"
          placeholder="Degree / Certificate"
        ></input>
        <button className={styles.educationBtn}>+ Add Education</button>
      </div>
    </>
  );
};

export default FormEducation;
