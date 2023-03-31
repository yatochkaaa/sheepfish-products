import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";
import {
  deleteProduct,
  getAllProducts,
  getOneProduct,
  searchProducts,
} from "../action-creators/products";

export interface ProductState {
  data: IProduct[];
  selectedProduct: IProduct | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getAllProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [searchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [searchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [searchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getOneProduct.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.selectedProduct = action.payload;
    },
    [getOneProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getOneProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteProduct.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.error = null;
      state.data = state.data.filter((product) => product.id !== action.payload);
    },
    [deleteProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
