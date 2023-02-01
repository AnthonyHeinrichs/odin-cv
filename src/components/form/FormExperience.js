import styles from "../styles/Form.module.css";

const FormExperience = () => {
  return (
    <>
      <h3 className={styles.experienceTitle}>Experience</h3>
      <div className={styles.experience}>
        <div className={styles.workDates}>
          <label for="workFrom"></label>
          <input
            id="workFrom"
            type="text"
            name="workFrom"
            placeholder="From"
          ></input>
          <div className={styles.line}></div>
          <label for="workTo"></label>
          <input id="workTo" type="text" name="workTo" placeholder="To"></input>
        </div>
        <label for="company"></label>
        <input
          id="company"
          type="text"
          name="business"
          placeholder="Company"
        ></input>
        <label for="location"></label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Location"
        ></input>
        <label for="title"></label>
        <input id="title" type="text" name="title" placeholder="Title"></input>
        <button className={styles.experienceBtn}>+ Add experience</button>
        <div className={styles.skill}>
          <label for="skill"></label>
          <input
            id="skill"
            type="text"
            name="skill"
            placeholder="Skill"
          ></input>
          <button className={styles.skillBtn}>+ Add skill</button>
        </div>
        <div className={styles.social}>
          <label for="social"></label>
          <input
            id="social"
            type="text"
            name="social"
            placeholder="Social"
          ></input>
          <button className={styles.socialBtn}>+ Add social</button>
        </div>
      </div>
    </>
  );
};

export default FormExperience;
