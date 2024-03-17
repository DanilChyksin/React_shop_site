import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { changeClose } from "../../slice/userSlice";
import { useGetProductsQuery } from "../../slice/apiSlice";

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector(({ user }) => user);

  const [search, setSearch] = useState("");

  const [values, setValues] = useState({
    name: "Guest",
    avatar: AVATAR,
  });

  const { data, isLoading } = useGetProductsQuery({ title: search });

  useEffect(() => {
    if (!user) return;
    setValues(user);
  }, [user]);

  const handleChange = () => {
    if (!user) {
      dispatch(changeClose(true));
    } else {
      navigate(ROUTES.PROFILE);
    }
  };
  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${LOGO})` }}
        />
      </Link>

      <div onClick={handleChange} className={styles.user}>
        <div
          className={styles.avatar}
          style={{
            backgroundImage: `url(${values.avatar})`,
          }}
        />
        <div className={styles.username}>{values.name}</div>
      </div>
      <form className={styles.form}>
        <div className={styles.icon}>
          <svg className={styles["icon_header"]}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
            ></use>
          </svg>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search"
            onChange={handleSearch}
            value={search}
          />
          {search && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No result"
                : data.map(({ id, title, images }) => (
                    <Link
                      to={`/products/${id}`}
                      className={styles.search_item}
                      key={id}
                      onClick={() => setSearch("")}
                    >
                      <div
                        className={styles.search_img}
                        style={{ backgroundImage: `url(${images[0]})` }}
                      />
                      <div className={styles.search_title}>{title}</div>
                    </Link>
                  ))}
            </div>
          )}
        </div>
      </form>
      <div className={styles.account}>
        <Link to={ROUTES.HOME} className={styles.favourite}>
          <svg className={styles["icon_fav"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}></use>
          </svg>
        </Link>
        <Link to={ROUTES.CART} className={styles.basket}>
          <svg className={styles["icon_basket"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
          </svg>
          <span className={styles.quantity}>2</span>
        </Link>
      </div>
    </div>
  );
}
