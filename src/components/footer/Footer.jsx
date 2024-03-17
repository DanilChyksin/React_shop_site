import React from "react";
import styles from "../../styles/footer.module.css";
import LOGO from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <Link>
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(${LOGO})` }}
        />
      </Link>
      <div className={styles.developed}>
        Developed by <span>Chuksin</span>
      </div>
      <div className={styles.icons}>
        <Link className={styles.youtube}>
          <svg className={styles["icon_youtube"]}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
            ></use>
          </svg>
        </Link>
        <Link className={styles.facebook}>
          <svg className={styles["icon_facebook"]}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
            ></use>
          </svg>
        </Link>
        <Link className={styles.instagram}>
          <svg className={styles["icon_instagram"]}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
            ></use>
          </svg>
        </Link>
      </div>
    </section>
  );
}
