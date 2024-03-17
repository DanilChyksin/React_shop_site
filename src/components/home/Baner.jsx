import React from "react";
import styles from "../../styles/baner.module.css";
import device_1 from "../../images/shoe.png";
import device_2 from "../../images/devices.png";
import BANER from "../../images/banner.png";
export default function Baner() {
  return (
    <div className={styles.baner}>
      <div className={styles.left}>
        <div className={styles.left_text}>
          NEW YEAR
          <br />
          <span>SALE</span>
        </div>
        <button className={styles.btn}>See more</button>
        <div
          className={styles.left_img_1}
          style={{ backgroundImage: `url(${device_1})` }}
        />
        <div
          className={styles.left_img_2}
          style={{ backgroundImage: `url(${device_2})` }}
        />
      </div>
      <div className={styles.right}>
        <div
          className={styles.right_img}
          style={{ backgroundImage: `url(${BANER})` }}
        />
        <div className={styles.rigth_text}>
          save up to <span>50%</span> off
        </div>
      </div>
    </div>
  );
}
