import React from "react";
import styles from "../../styles/categories.module.css";
import { Link } from "react-router-dom";
export default function Categories({ list, amount, caption }) {
  return (
    <section className={styles.categories}>
      <div className={styles.title}>{caption}</div>
      <div className={styles.list}>
        {list.slice(0, amount).map(({ name, image, id }) => (
          <Link className={styles.item} key={id} to={`/categories/${id}`}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.name}>{name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
