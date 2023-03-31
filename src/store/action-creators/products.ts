import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      return res.data.products;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load products");
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (name: string, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/search?q=${name}`);
      return res.data.products;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load products");
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "products/getOne",
  async (id: number, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  (id: number) => id
);
