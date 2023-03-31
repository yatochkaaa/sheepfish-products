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
  return (
    <Table className="mt-3" striped bordered hover>
      <thead className="align-middle text-center">
        <tr>
          {Object.values(COL).map((col) => (
            <ColItem key={col} col={col} />
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
