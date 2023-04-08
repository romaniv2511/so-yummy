import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShoppingList = createAsyncThunk(
  'shopping-list',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/shopping-list');
      const { data } = res.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addToShoppingList = createAsyncThunk(
  'shoppingList/add',
  async ({ _id, measure }, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await axios.patch('/shopping-list/add', { _id, measure });
      const { data } = res.data;
      dispatch(fetchShoppingList()); // оновлюємо список покупок після успішного додавання елемента
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteToShoppingList = createAsyncThunk(
  'shoppingList/remove',
  async ({ _id, measure }, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await axios.patch('/shopping-list/remove', { _id, measure });
      const { data } = res.data;
      dispatch(fetchShoppingList()); // оновлюємо список покупок після успішного додавання елемента
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
