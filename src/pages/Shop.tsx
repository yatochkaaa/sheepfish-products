import React from "react";
import { useAppSelector } from "../store/hooks";
import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import Loader from "../components/Loader";

const Shop: React.FC = () => {
  const { products, isLoading } = useAppSelector((state) => state.productReducer);

  return (
    <Container className="mt-4">
      <ProductSearch />
      {!isLoading ? <ProductList products={products} /> : <Loader />}
    </Container>
  );
};

export default Shop;
