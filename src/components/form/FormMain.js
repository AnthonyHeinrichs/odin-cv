import styles from "../styles/Form.module.css";

const FormMain = () => {
  return (
    <>
      <h3 className={styles.mainTitle}>Main</h3>
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <input type="text" name="fullName" placeholder="Full name"></input>
          <input type="text" name="title" placeholder="Title"></input>
          <input type="text" name="address" placeholder="Address"></input>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
          ></input>
          <input
            type="text"
            name="emailAddress"
            placeholder="Email address"
          ></input>
        </div>
        <div className={styles.headShot}>
          <h2>Image</h2>
          <button>Upload Image</button>
        </div>
      </div>
      <div>
        <textarea
          className={styles.description}
          type="text"
          name="description"
          placeholder="Description..."
        ></textarea>
      </div>
    </>
  );
};

export default FormMain;
