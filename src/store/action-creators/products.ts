import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../utils/types";

const BASE_URL = "https://dummyjson.com";

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products?limit=100`);
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

export const postProduct = createAsyncThunk(
  "products/add",
  async (product: IProduct, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/products/add`, product);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to post product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: number, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load product");
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "products/categories/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/categories`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load categories");
    }
  }
);

export const getByCategory = createAsyncThunk(
  "products/getByCategory",
  async (category: string, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/category/${category}`);
      return res.data.products;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load categories");
    }
  }
);
