import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllCategories, getAllProducts } from "../store/action-creators/products";
import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import Loader from "../components/Loader";

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.productReducer);

  React.useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-4">
      <ProductSearch />
      {!isLoading ? <ProductList products={products} /> : <Loader />}
    </Container>
  );
};

export default Shop;
