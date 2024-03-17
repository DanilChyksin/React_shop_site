import React, { useEffect } from "react";
import Product from "../products/Product";
import Poster from "./Poster";
import { useSelector, useDispatch } from "react-redux";
import Categories from "./Categories";
import Baner from "./Baner";
import { sortPrice } from "../../slice/productsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { list, sort } = useSelector(({ products }) => products);
  const category = useSelector(({ categories }) => categories);

  useEffect(() => {
    if (!list.length) return;
    dispatch(sortPrice(100));
  }, [list.length, dispatch]);
  return (
    <>
      <Poster />
      <Product list={list} caption="Trending" amount={5} />
      <Categories list={category.list} caption="Worth seeing" amount={5} />
      <Baner />
      <Product list={sort} caption="Less than 100$" amount={5} />
    </>
  );
}
