import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/category.module.css";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../slice/apiSlice";
import Product from "../products/Product";
import { useSelector } from "react-redux";
export default function Category() {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };
  const [name, setName] = useState("");
  const [isEnd, setEnd] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [items, setItems] = useState([]);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id || !list.length) return;
    setName(list.find((el) => el.id === id * 1));
  }, [id, list]);

  useEffect(() => {
    if (!id) return;
    setValues(defaultValues);
    setEnd(false);
    setItems([]);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  const handleValue = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };
  const handleReset = () => {
    setEnd(false);
    setParams(defaultParams);
    setValues(defaultValues);
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>{name.name}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            name="title"
            autoComplete="off"
            onChange={handleValue}
            placeholder="Product name"
            value={values.title}
            type="text"
          />
        </div>
        <div className={styles.input}>
          <input
            name="price_min"
            autoComplete="off"
            onChange={handleValue}
            value={values.price_min}
            placeholder="0"
            type="number"
          />
          <span>Price from</span>
        </div>
        <div className={styles.input}>
          <input
            name="price_max"
            autoComplete="off"
            placeholder="0"
            onChange={handleValue}
            value={values.price_max}
            type="number"
          />
          <span>Price to</span>
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No result</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Product list={items} caption="" amount={items.length} />
      )}
      {!isEnd && (
        <div className={styles.btn}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
}
