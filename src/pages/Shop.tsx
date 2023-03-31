import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllProducts } from "../store/action-creators/products";
import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(
    (state) => state.productReducer
  );

  React.useEffect(() => {
    dispatch(getAllProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-4">
      <ProductSearch />
      <ProductList products={data} />
    </Container>
  );
};

export default Shop;
