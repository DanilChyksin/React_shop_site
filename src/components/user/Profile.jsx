import React, { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../slice/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);
  const defaultValues = {
    email: "",
    name: "",
    password: "",
    avatar: "",
  };
  const [values, setValues] = useState(defaultValues);

  const handleChangeValues = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  useEffect(() => {
    if (!user) return;
    setValues(user);
  }, [user]);
  return (
    <section className={styles.profile}>
      <div className={styles.title}>Update profile</div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.submit}>
          Update
        </button>
      </form>
    </section>
  );
}
