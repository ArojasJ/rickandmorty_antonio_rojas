import React from "react";
import { useState } from "react";
import { validation } from "./validation";
import styles from "./Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(userData)

  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className={styles.formContainer}>
        <label htmlFor="" className={styles.textLabel}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingrese el usuario.."
          value={userData.username}
          onChange={handleInputChange}
          className={errors.username && styles.warning}
        />
        <p className={styles.danger}>{errors.username}</p>
        <label htmlFor="" className={styles.textLabel}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese la password.."
          value={userData.password}
          onChange={handleInputChange}
          className={errors.username && styles.warning}
        />
        <p className={styles.danger}>{errors.password}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
