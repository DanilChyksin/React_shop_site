import React from "react";
import styles from "../../styles/sidebar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";
export default function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <div className={styles.list}>
        {list.slice(0, 5).map(({ name, id }) => (
          <NavLink
            to={`/categories/${id}`}
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
            key={id}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <div className={styles.text}>
        <p>Help</p>
        <p className={styles.underline}>Terms & Conditions</p>
      </div>
    </section>
  );
}
