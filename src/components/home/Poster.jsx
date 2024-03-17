import React from "react";
import styles from "../../styles/poster.module.css";
import BG from "../../images/computer.png";
export default function Poster() {
  return (
    <section className={styles.poster}>
      <div className={styles.text_bg}>BIG SALE 20%</div>
      <div className={styles.content}>
        <div className={styles.sup_text}>THE BESTSELLER OFF 2022</div>
        <div className={styles.mein_text}>
          <p> LENNON R2D2</p>
          <p> WITH NVIDIA 5090 TI</p>
        </div>
        <button className={styles.btn}>Shop Now</button>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${BG})` }} />
    </section>
  );
}
