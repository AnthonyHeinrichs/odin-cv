import styles from "../styles/Form.module.css";

const FormMain = () => {
  return (
    <>
      <h3 className={styles.mainTitle}>Main</h3>
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <label for="fullName"></label>
          <input id="fullName" type="text" name="fullName" placeholder="Full name"></input>
          <label for="title"></label>
          <input id="title" type="text" name="title" placeholder="Title"></input>
          <label for="address"></label>
          <input id="address" type="text" name="address" placeholder="Address"></input>
          <label for="phone"></label>
          <input
            id="phone"
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
          ></input>
          <label for="email"></label>
          <input
            id="email"
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
        <label for="description"></label>
        <textarea
          className={styles.description}
          id="description"
          type="text"
          name="description"
          placeholder="Description..."
        ></textarea>
      </div>
    </>
  );
};

export default FormMain;
