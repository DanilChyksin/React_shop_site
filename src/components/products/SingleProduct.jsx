import React, { useEffect } from "react";
import { useGetProductQuery } from "../../slice/apiSlice";
import { useParams, useNavigate } from "react-router-dom";
import CurrentProduct from "./CurrentProduct";
import { ROUTES } from "../routes/routes";
import { useSelector, useDispatch } from "react-redux";
import { getRelatedProducts } from "../../slice/productsSlice";
import Product from "./Product";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list, related } = useSelector(({ products }) => products);
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({
    id,
  });

  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;
    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <CurrentProduct {...data} />
      <Product list={related} title="Related products" amount={5} />
    </>
  );
}
