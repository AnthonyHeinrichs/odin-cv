import styles from "../styles/Form.module.css";

const FormExperience = () => {
  return (
    <>
      <h3 className={styles.experienceTitle}>Experience</h3>
      <div className={styles.experience}>
        <div className={styles.workDates}>
          <input type="text" name="workFrom" placeholder="From"></input>
          <div className={styles.line}></div>
          <input type="text" name="workTo" placeholder="To"></input>
        </div>
        <input type="text" name="business" placeholder="Company"></input>
        <input type="text" name="location" placeholder="Location"></input>
        <input type="text" name="title" placeholder="Title"></input>
        <button className={styles.experienceBtn}>+ Add experience</button>
        <div className={styles.skill}>
          <input type="text" name="skill" placeholder="Skill"></input>
          <button className={styles.skillBtn}>+ Add skill</button>
        </div>
        <div className={styles.social}>
          <input type="text" name="social" placeholder="Social"></input>
          <button className={styles.socialBtn}>+ Add social</button>
        </div>
      </div>
    </>
  );
};

export default FormExperience;
