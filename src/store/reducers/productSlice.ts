import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";
import {
  deleteProduct,
  getAllCategories,
  getAllProducts,
  getByCategory,
  getOneProduct,
  postProduct,
  searchProducts,
} from "../action-creators/products";

export interface ProductState {
  products: IProduct[];
  categories: string[];
  selectedProduct: IProduct | null;
  lastId: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  selectedProduct: null,
  lastId: 0,
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
      state.products = action.payload;
      state.lastId = action.payload.length
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
      state.products = action.payload;
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
    [deleteProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.error = null;
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    [deleteProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllCategories.fulfilled.type]: (
      state,
      action: PayloadAction<string[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [getAllCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllCategories.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
    [getByCategory.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getByCategory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postProduct.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.products = [...state.products, action.payload];
      state.lastId = state.lastId + 1;
    },
    [postProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [postProduct.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
