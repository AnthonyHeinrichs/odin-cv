import styles from "../styles/Form.module.css";

const FormActions = () => {
  return (
    <div className={styles.formActionBtns}>
      <button className={styles.pdfBtn}>Export to PDF</button>
      <button className={styles.resetBtn}>Reset Form</button>
    </div>
  );
};

export default FormActions;
