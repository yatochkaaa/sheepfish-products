import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import { useAppSelector } from "../store/hooks";

const Admin: React.FC = () => {
  const { categories, lastId } = useAppSelector((state) => state.productReducer);
  const [productVisible, setProductVisible] = React.useState<boolean>(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark mt-4 p-2"
        onClick={() => setProductVisible(true)}
      >
        Додати продукт
      </Button>
      <CreateProduct
        productsLastId={lastId}
        categories={categories}
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
