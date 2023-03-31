import React, { SetStateAction } from "react";
import { Dropdown } from "react-bootstrap";
import { COL, sortableCols } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getAllProducts,
  getByCategory,
} from "../store/action-creators/products";

interface Props {
  col: COL;
  isAsc: boolean;
  setCol: () => void;
  setIsAsc: React.Dispatch<SetStateAction<boolean>>;
  filteredCol: COL;
}

const ColItem: React.FC<Props> = ({
  col,
  isAsc,
  setCol,
  setIsAsc,
  filteredCol,
}) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.productReducer);

  const setSortCol = () => {
    if (col === filteredCol) {
      setIsAsc(!isAsc);
    } else {
      setCol();
    }
  };

  if (col === COL.CATEGORY) {
    return (
      <th>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: "transparent",
              border: 0,
              color: "black",
              fontWeight: "bold",
            }}
            id="dropdown-basic"
          >
            {col}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              style={{ fontWeight: "bold" }}
              onClick={() => {
                dispatch(getAllProducts());
              }}
              key="all"
            >
              All
            </Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item
                onClick={() => {
                  dispatch(getByCategory(category));
                }}
                key={category}
              >
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </th>
    );
  }

  if (sortableCols.includes(col)) {
    return (
      <th style={{ cursor: "pointer" }} onClick={setSortCol}>
        {col}
      </th>
    );
  }

  return <th>{col}</th>;
};

export default ColItem;
