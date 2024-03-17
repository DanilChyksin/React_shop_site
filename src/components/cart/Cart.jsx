import React, { useEffect } from "react";
import styles from "../../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemToCart } from "../../slice/userSlice";
import { sumPrice } from "../../utils/common";

export default function Cart() {
  const dispatch = useDispatch();

  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };
  const removeItem = (id) => {
    dispatch(removeItemToCart(id));
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>Your cart</div>
      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.space}>
            <div className={styles.list}>
              {cart.map((item) => {
                const {
                  id,
                  title,
                  price,
                  images,
                  category: { name },
                  quantity,
                } = item;
                return (
                  <div key={id} className={styles.item}>
                    <div className={styles.left_item}>
                      <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${images[0]})` }}
                      ></div>
                      <div className={styles.desc}>
                        <div className={styles.title_item}>{title}</div>
                        <div className={styles.category_name}>{name}</div>
                      </div>
                    </div>
                    <div className={styles.center_item}>
                      <div className={styles.price}>{price} $</div>
                      <div className={styles.quantity}>
                        <button
                          onClick={() =>
                            changeQuantity(item, Math.max(1, quantity - 1))
                          }
                          className={styles.btn_minus}
                        >
                          -
                        </button>
                        <div className={styles.quantity_text}>{quantity}</div>
                        <button
                          onClick={() =>
                            changeQuantity(item, Math.max(1, quantity + 1))
                          }
                          className={styles.btn_plus}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.rigth_item}>
                      <div className={styles.total_price}>
                        {price * quantity} $
                      </div>
                      <div
                        onClick={() => removeItem(id)}
                        className={styles.icon}
                      >
                        <svg className={styles["icon_close"]}>
                          <use
                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                          ></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.total}>
              <div className={styles.text}>
                TOTAL PRICE:
                <span>
                  {sumPrice(
                    cart.map(({ price, quantity }) => price * quantity)
                  )}
                  $
                </span>
              </div>
              <button className={styles.btn}>Proceed to checkout</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
