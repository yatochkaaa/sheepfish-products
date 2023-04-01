import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllCategories } from "../store/action-creators/products";

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.productReducer);
  const [productVisible, setProductVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark mt-4 p-2"
        onClick={() => setProductVisible(true)}
      >
        Додати продукт
      </Button>
      <CreateProduct
        categories={categories}
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
    </Container>
  );
};

export default Admin;
