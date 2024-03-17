import React, { useState } from "react";
import styles from "../../styles/userSignUp.module.css";
import { useDispatch } from "react-redux";
import {
  authUser,
  changeClose,
  changeCurrentAuth,
} from "../../slice/userSlice";
import { signUp } from "../../utils/constant";
export default function UserLogin() {
  const dispatch = useDispatch();
  const defaultValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(defaultValues);

  const handleChangeValues = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authUser(values));
    dispatch(changeClose(false));
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.auth_wrapper}>
        <div className={styles.title}>Login</div>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChangeValues}
            autoComplete="off"
            required
          />

          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChangeValues}
            autoComplete="off"
            required
          />

          <button onClick={handleSubmit} type="submit">
            Login an account
          </button>
        </form>
        <div
          onClick={() => dispatch(changeClose(false))}
          className={styles.icon}
        >
          <svg className={styles["icon_close"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}></use>
          </svg>
        </div>
        <div
          onClick={() => dispatch(changeCurrentAuth(signUp))}
          className={styles.have}
        >
          <span>I dont have account</span>
          <div className={styles.login}>Sign up</div>
        </div>
      </div>
    </section>
  );
}
