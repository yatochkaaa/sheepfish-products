import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import {
  getAllProducts,
  searchProducts,
} from "../store/action-creators/products";
import { Search } from "react-bootstrap-icons";

const ProductSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>("");
  const [isFiltered, setIsFiltered] = React.useState<boolean>(false);

  const search = () => {
    dispatch(searchProducts(value));
    setIsFiltered(true);
  };

  const reset = () => {
    if (isFiltered) {
      dispatch(getAllProducts());
    }
    setValue("");
    setIsFiltered(false);
  };

  return (
    <InputGroup className="d-flex">
      <InputGroup.Text className="p-0">
        <Form.Label className="px-3" htmlFor="productName">
          <Search />
        </Form.Label>
      </InputGroup.Text>

      <Form.Control
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введіть назву"
        id="productName"
      />

      {value && (
        <Button variant="danger" onClick={reset}>
          X
        </Button>
      )}
      <Button variant="dark" onClick={search}>
        Пошук
      </Button>
    </InputGroup>
  );
};

export default ProductSearch;
