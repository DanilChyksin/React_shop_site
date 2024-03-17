import React from "react";
import styles from "../../styles/product.module.css";
import { Link } from "react-router-dom";
export default function Product({ list = [], caption, amount }) {
  const products = list.filter((_, i) => i < amount);
  return (
    <section className={styles.products}>
      <div className={styles.title}>{caption}</div>
      <div className={styles.list}>
        {products.map(({ id, title, price, images, category: { name } }) => (
          <Link key={id} to={`/products/${id}`} className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${images[0]})`,
              }}
            />
            <div className={styles.desc}>
              <div className={styles.desc_item}>
                <div className={styles.name}>{title}</div>
                <div className={styles.category_name}>{name}</div>
              </div>
              <div className={styles.purchased}>
                <div className={styles.price_group}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.old_price}>
                    {Math.round(Math.random() * 200 + price)}$
                  </div>
                </div>
                <div className={styles.people}>
                  {Math.round(Math.random() * 100)} people purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
