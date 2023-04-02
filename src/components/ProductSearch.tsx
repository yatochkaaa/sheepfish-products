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

  React.useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
        <Button variant="danger" className="px-4" onClick={reset}>
          X
        </Button>
      )}
    </InputGroup>
  );
};

export default ProductSearch;
