import styles from "../styles/Form.module.css";
import FormMain from "./FormMain"
import FormEducation from "./FormEducation"
import FormExperience from "./FormExperience"

const Form = () => {
  return (
    <div className={styles.formMain}>
      <div className={styles.title}>
        <h1>Form</h1>
      </div>
      <div className={styles.form}>
        <form>
          <FormMain />
          <FormEducation />
          <FormExperience />
        </form>
      </div>
    </div>
  );
};

export default Form;
