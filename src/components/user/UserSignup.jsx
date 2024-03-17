import React, { useState } from "react";
import styles from "../../styles/userSignUp.module.css";
import { useDispatch } from "react-redux";
import {
  changeClose,
  changeCurrentAuth,
  createUser,
} from "../../slice/userSlice";
import { logIn } from "../../utils/constant";
export default function UserSignup() {
  const dispatch = useDispatch();
  const defaultValues = {
    email: "",
    name: "",
    password: "",
    avatar: "",
  };

  const [values, setValues] = useState(defaultValues);

  const handleChangeValues = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(values));
    dispatch(changeClose(false));
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.auth_wrapper}>
        <div className={styles.title}>Sign up</div>
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
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
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
          <input
            className={styles.input}
            type="text"
            name="avatar"
            placeholder="Avatar url"
            value={values.avatar}
            onChange={handleChangeValues}
            autoComplete="off"
            required
          />

          <button onClick={handleSubmit} type="submit">
            Create an account
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
          onClick={() => dispatch(changeCurrentAuth(logIn))}
          className={styles.have}
        >
          <span>I have account</span>
          <div className={styles.login}>Log in</div>
        </div>
      </div>
    </section>
  );
}
