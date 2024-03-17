import React, { useEffect, useState } from "react";
import styles from "../../styles/singleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../slice/userSlice";

export default function CurrentProduct(item) {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);

  const SIZES = [4, 4.5, 5];
  const [currentImg, setCurrentImg] = useState();
  const [currentSize, setCurrentSize] = useState();
  const { id, title, price, description, images } = item;

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  const handleChangeCurrentImg = (img) => {
    setCurrentImg(img);
  };
  const handleAddCurrentSize = (size) => {
    setCurrentSize(size);
  };
  useEffect(() => {
    if (!images.length) return;
    setCurrentImg(images[0]);
  }, [images]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.images}>
        <div
          className={styles.current_img}
          style={{ backgroundImage: `url(${currentImg})` }}
        />
        <div className={styles.dop_images}>
          {images.map((image, i) => (
            <div
              onClick={() => handleChangeCurrentImg(image)}
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
      <div className={styles.description_product}>
        <div className={styles.main_desc}>
          <div className={styles.name}>{title}</div>
          <div className={styles.price}>{price}$</div>
          <div className={styles.color}>
            Color: <span>Blanc</span>
          </div>
          <div className={styles.sizes}>
            Sizes:
            <div className={styles.size}>
              {SIZES.map((size, i) => (
                <div
                  onClick={() => handleAddCurrentSize(size)}
                  key={i}
                  className={`${styles.size_btn} ${
                    size === currentSize ? styles.active : ""
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.small_desc}>{description}</div>
          <div className={styles.buttons}>
            <button
              disabled={!currentSize}
              onClick={addToCart}
              className={styles.btn_add}
            >
              Add to cart
            </button>
            <button className={styles.btn_fav}>Add to favorites</button>
          </div>
        </div>
        <div className={styles.purchased}>
          <p className={styles.people}>
            {Math.floor(Math.random() * 100)} people purchased
          </p>
          <p className={styles.find}>Find in a store</p>
        </div>
      </div>
    </section>
  );
}
