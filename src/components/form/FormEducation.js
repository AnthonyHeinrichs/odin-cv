import styles from "../styles/Form.module.css";

const FormEducation = () => {
  return (
    <>
      <h3 className={styles.educationTitle}>Education</h3>
      <div className={styles.education}>
        <div className={styles.schoolDates}>
          <input type="text" name="schoolFrom" placeholder="From"></input>
          <div className={styles.line}></div>
          <input type="text" name="schoolTo" placeholder="To"></input>
        </div>
        <input type="text" name="school" placeholder="School"></input>
        <input type="text" name="location" placeholder="Location"></input>
        <input
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
