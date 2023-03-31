import React from "react";
import { Table } from "react-bootstrap";
import { COL } from "../utils/consts";
import { IProduct } from "../utils/types";
import ProductItem from "./ProductItem";
import ColItem from "./ColItem";

interface Props {
  products: IProduct[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const [filteredCol, setFilteredCol] = React.useState<COL>(COL.ID);
  const [isAsc, setIsAsc] = React.useState<boolean>(true);

  const sorting = (col: COL) => {
    switch (col) {
      case COL.PRICE:
        return [...products].sort((product1, product2) =>
          isAsc
            ? product1.price - product2.price
            : product2.price - product1.price
        );

      case COL.RATING:
        return [...products].sort((product1, product2) =>
          isAsc
            ? product1.rating - product2.rating
            : product2.rating - product1.rating
        );

      case COL.STOCK:
        return [...products].sort((product1, product2) =>
          isAsc
            ? product1.stock - product2.stock
            : product2.stock - product1.stock
        );

      default:
        return [...products].sort((product1, product2) =>
          isAsc ? product1.id - product2.id : product2.id - product1.id
        );
    }
  };

  return (
    <Table className="mt-3" striped bordered hover>
      <thead className="align-middle text-center">
        <tr>
          {Object.values(COL).map((col) => (
            <ColItem
              isAsc={isAsc}
              setIsAsc={setIsAsc}
              setCol={() => setFilteredCol(col)}
              col={col}
              key={col}
              filteredCol={filteredCol}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sorting(filteredCol).map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
